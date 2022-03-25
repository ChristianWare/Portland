import React, { useRef, useState, useEffect } from "react";
import styles from "../../styles/Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

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
    e.target.reset();
  };
  return (
    <section id='contact' className={styles.cContainer}>
      <div className={styles.cWrapper}>
        <div className={styles.cLeft}>
          <h2 className={styles.heading}>
            Here are the best ways to contact me:
          </h2>
          <div className={styles.cInfo}>
            <a href='tel:623-335-52514' className={styles.cInfoItem}>
              <BiPhoneCall className={styles.cIcon} />
              <span>
                623-335-52514
              </span>
            </a>
            <a href='mailto:chris.ware.dev@gmail.com' className={styles.cInfoItem}>
              <AiOutlineMail className={styles.cIcon} />
              <span>
                
                  chris.ware.dev@gmail.com
                
              </span>
            </a>
            <a href='https://github.com/ChristianWare' target='_blank' className={styles.cInfoItem}>
              <BsGithub className={styles.cIcon} />
              <span>Github</span>
            </a>
            <a
              href='https://www.linkedin.com/in/christian-ware/'
              target='_blank'
              className={`${styles.cInfoItem} ${styles.linkedIn}`}
            >
              <BsLinkedin className={styles.cIcon} />
              <span>LinkedIn</span>
            </a>
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
            </form>
          </div>
          <div className={styles.forResponse}>
            {done && "Thank You, I will be in touch with you soon."}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
