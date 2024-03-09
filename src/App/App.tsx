import React from 'react';
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.dotHolder}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          <div className={styles.titleHeader}>
            <i className='fa fw fas fa-code'></i> Aditya@Dev:~
          </div>
        </div>
        <div className={styles.mainContent}>
          Hello World
        </div>
      </div>
    </div>
  )
}

export default App;