import React, { useEffect, useState } from 'react';
import styles from './Loader.module.scss';
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {

  const languages = [
    { id: 1, text: 'Hello World' },         // English
    { id: 2, text: 'Hola Mundo' },          // Spanish
    { id: 3, text: 'Bonjour le monde' },    // French
    { id: 4, text: 'Hallo Welt' },          // German
    { id: 5, text: 'こんにちは世界' },         // Japanese
    { id: 6, text: 'Привет, мир' },         // Russian
    { id: 7, text: '你好，世界' },            // Chinese
  ];

  // Track which language is currently displayed
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((currentLanguageIndex) => (currentLanguageIndex + 1) % languages.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };


  return (
    <div className={styles.mainContainer}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={languages[currentLanguageIndex].id}
          className={styles.text}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {languages[currentLanguageIndex].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Loader;