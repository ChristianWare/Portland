import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";
import Link from "next/link";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_czwggs7",
        "template_4gckyfj",
        formRef.current,
        "user_CLMhQmZ4MMx2LLZjKzXTH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact' className={styles.cContainer}>
      <div className={styles.cBg}></div>
      <div className={styles.cWrapper}>
        <div className={styles.cLeft}>
          <h1 className={styles.cTitle}>
            Here are the best ways to contact me:
          </h1>
          <div className={styles.cInfo}>
            <div className={styles.cInfoItem}>
              <BiPhoneCall className={styles.cIcon} />
              <span>602-842-4084</span>
            </div>
            <div className={styles.cInfoItem}>
              <AiOutlineMail className={styles.cIcon} />
              <span>
                <a href='mailto:chris.ware.dev@gmail.com'>
                  chris.ware.dev@gmail.com
                </a>
              </span>
            </div>
            <div className={styles.cInfoItem}></div>
            <div className={styles.cInfoItem}>
              <Link href='https://github.com/ChristianWare'>
                <a target='_blank'>
                  <BsGithub className={styles.cIcon} />
                  <span>GitHub</span>
                </a>
              </Link>
            </div>
            <div className={styles.cInfoItem}>
              <Link href='https://www.linkedin.com/in/christian-ware/'>
                <a target='_blank'>
                  <BsLinkedin className={styles.cIcon} />
                  <span>LinkedIn</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.cRight}>
          <div className={styles.cDescription}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name' /> <br />
              <input type='text' placeholder='Subject' name='user_subject' />
              <br />
              <input type='text' placeholder='Email' name='user_email' />
              <textarea rows='5' placeholder='Message' name='message' />
              <button>Submit</button>
              {done && "Thank You, I will be in touch with you soon."}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
