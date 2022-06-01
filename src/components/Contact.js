import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { slideLeft } from "../components/utils/Animation";
import { motion } from "framer-motion";
import { useScroll } from "./utils/useScroll";

function Contact() {
  const [element, controls] = useScroll();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.phone && inputs.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };
  return (
    <section id='contact' className={styles.cContainer} ref={element}>
      <div className={styles.cWrapper}>
        <motion.div
          animate={controls}
          variants={slideLeft}
          transition={{ delay: 0.1, stiffness: 300 }}
          className={styles.cLeft}
        >
          <h2 className={styles.heading}>
            Here are the best ways to contact me:
          </h2>
          <div className={styles.cInfo}>
            <a href='tel:623-335-52514' className={styles.cInfoItem}>
              <BiPhoneCall className={styles.cIcon} />
              <span>480-808-2054</span>
            </a>
            <a
              href='mailto:chris.ware.dev@gmail.com'
              className={styles.cInfoItem}
            >
              <AiOutlineMail className={styles.cIcon} />
              <span>chris.ware.dev@gmail.com</span>
            </a>
            <a
              href='https://github.com/ChristianWare'
              target='_blank'
              rel='noreferrer'
              className={styles.cInfoItem}
            >
              <BsGithub className={styles.cIcon} />
              <span>Github</span>
            </a>
            <a
              href='https://www.linkedin.com/in/christian-ware/'
              target='_blank'
              rel='noreferrer'
              className={`${styles.cInfoItem} ${styles.linkedIn}`}
            >
              <BsLinkedin className={styles.cIcon} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
        <div className={styles.contactForm}>
          <h2>Send A Message</h2>
          <form className={styles.formBox} onSubmit={(e) => onSubmitForm(e)}>
            <div className={styles.inputBox50}>
              <input
                id='name'
                value={inputs.name}
                onChange={handleChange}
                type='text'
                required
              />
              <label htmlFor='first'>Name</label>
            </div>
            <div className={styles.inputBox50}>
              <input
                id='email'
                value={inputs.email}
                onChange={handleChange}
                type='text'
                required
              />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className={styles.inputBox50}>
              <input
                id='phone'
                value={inputs.phone}
                onChange={handleChange}
                type='text'
                required
              />
              <label htmlFor='phone'>Phone #</label>
            </div>
            <div className={styles.inputBox100}>
              <textarea
                id='message'
                value={inputs.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor='message'>Your Message Here...</label>
            </div>
            <div className={styles.btnContainer}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={styles.tertiary}
              >
                Submit
              </motion.button>
            </div>
            {form.state === "loading" ? (
              <div className={styles.msg}>Sending....</div>
            ) : form.state === "error" ? (
              <div className={styles.msg}>{form.message}</div>
            ) : (
              form.state === "success" && (
                <div className={styles.msg}>
                  <AiFillCheckCircle className={styles.icon2} />
                  Sent successfully!
                </div>
              )
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
