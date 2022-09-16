import React, { useState, useEffect } from 'react'
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import styles from '../../styles/Time.module.css'

function Time() {
     const [date, setDate] = useState(new Date());

     useEffect(() => {
       setInterval(() => setDate(new Date()), 30000);
     }, []);

    return (
      <div className={styles.timeContainer}>
        <p className={styles.clock}>
          <GoLocation className={styles.icon} />
          {date.toLocaleString("en-US", {
            timeZone: "America/Phoenix",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          : Phoenix, AZ
        </p>
        <a href='tel:623-335-52514' className={styles.clock}>
          <BsTelephone /> 480-808-2054
        </a>
        <a href='mailto:chris.ware.dev@gmail.com' className={styles.clock}>
          <AiOutlineMail className={styles.icon2} /> chris.ware.dev@gmail.com
        </a>
      </div>
    );
}

export default Time
