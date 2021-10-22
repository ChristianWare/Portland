import styles from "../../styles/About.module.css";

function About() {
    return (
      <div className={styles.a}>
        <div className={styles.aLeft}>
          <div className={styles.triContainer}>Triangle</div>
        </div>

        <div className={styles.aRight}>
          <h1 className={styles.aTitle}>About Me</h1>
          <h5 className={styles.aSub}>
            I am a front end developer who specializes in building web
            applications with NextJS and React.
          </h5>
          <p className={styles.aDescription}>
            Becasue of my background in design, and finance, I understand the
            asthetic and business side to any project. While websites have to
            make good impressions on it's visitors, they also motivate them to action. 
          </p>
          <p className={styles.aDescription}>
         I am looking for an opportunity to apply these principles in a role as a Front End Developer.
          </p>
        </div>
      </div>
    );
}

export default About;
