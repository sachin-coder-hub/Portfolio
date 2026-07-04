import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.overline}>Frontend Developer</p>
        <h1 className={styles.title}>Hello, I'm Sachin</h1>
        <p className={styles.description}>
          I build clean, responsive React experiences with polished UI and
          thoughtful interactions. Let's create something modern and easy to
          use.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
