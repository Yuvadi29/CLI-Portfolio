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
        </div>
        Hello World
      </div>
    </div>
  )
}

export default App;