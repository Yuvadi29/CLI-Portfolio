import React from 'react';
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          Hello World
        </div>
      </div>
    </div>
  )
}

export default App;