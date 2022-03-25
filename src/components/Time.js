import React, { useState, useEffect } from 'react'
import { GoLocation } from 'react-icons/go';
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
              timeZone: "US/Arizona",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
            _MST
          </p>
      </div>
    );
}

export default Time
