import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Sachin</h1>
        <p className={styles.description}>
          I'm a frontend developer with 3 years of experience using React,
          Javascript and Angular js. Reach out if you'd like to learn more!
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
