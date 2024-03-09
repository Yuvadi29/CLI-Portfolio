
import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "./loader.module.scss";

const Loader: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Initial loader animation
        tl.to(".loader", { duration: 1, opacity: 1 })
            .to(".loader-text", { duration: 1, opacity: 1, y: -20 })
            .to(".loader-text", { duration: 1, y: 0 })
            .to(".loader-spinner", { duration: 1, opacity: 1 })
            .to(".loader-spinner", { duration: 2, rotation: 360, repeat: -1, ease: "linear" });

        // Hello text animation in 7 different languages
        const languages = ["English", "Spanish", "French", "German", "Italian", "Chinese", "Japanese"];
        languages.forEach((language, index) => {
            tl.to(".loader-text", { duration: 1, opacity: 0 })
                .to(".loader-text", { duration: 1, text: `Hello (${language})`, opacity: 1 })
                .to(".loader-text", { duration: 2, opacity: 0, delay: index === languages.length - 1 ? 1 : 0 });
        });

        // Screen transition to the main page
        tl.to(".loader", { duration: 1, opacity: 0, delay: 1 })
            .to(".loader", { display: "none" })
            .to(".main-content", { duration: 1, opacity: 1 });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.loader}>
            <div className={styles.loaderText}>Loading...</div>
            <div className={styles.loaderSpinner}></div>
        </div>
    );
};

export default Loader;
