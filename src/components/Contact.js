import styles from "../../styles/Contact.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div className={styles.cContainer}>
      <div className={styles.cBg}></div>
      <div className={styles.cWrapper}>
        <div className={styles.cLeft}>
          <h1 className={styles.cTitle}>Want to Learn More? Let's Talk</h1>
          <div className={styles.cInfo}>
            <div className={styles.cInfoItem}>
              <BiPhoneCall className={styles.cIcon} />
              <p>917-769-1192</p>
            </div>
            <div className={styles.cInfoItem}>
              <AiOutlineMail className={styles.cIcon} />
              <p>chris.ware.dev@gmail.com</p>
            </div>
            <div className={styles.cInfoItem}>
              <GoLocation className={styles.cIcon} />
              <p>Dynamic Time Zone/Date</p>
            </div>
          </div>
        </div>
        <div className={styles.cRight}>
          <div className={styles.cDescription}>
            <p>
              <b>What's Your Story?</b> Get in touch. Always available for freelancing if the right project comes along. 
            </p>
            <form>
                <input type="text" placeholder='Name' name='user_name' />  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
