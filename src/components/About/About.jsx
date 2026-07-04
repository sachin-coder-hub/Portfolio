import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.intro}>
        Frontend Developer with 4+ years in the IT industry, specializing in
        React.js and modern JavaScript. I&apos;m expanding my knowledge toward
        full-stack development with Python, backend fundamentals, and scalable
        architecture.
      </p>

      <div className={styles.aboutItems}>
        <article className={styles.aboutItem}>
          <h3>Focus Areas</h3>
          <p>
            Performance optimization, secure coding, responsive UI, and
            delivering polished web applications for real users.
          </p>
        </article>

        <article className={styles.aboutItem}>
          <h3>Core Stack</h3>
          <p>
            React.js, JavaScript, Redux, Tailwind CSS, Python, Amazon
            DocumentDB, Firebase, and REST APIs.
          </p>
        </article>

        <article className={styles.aboutItem}>
          <h3>Growth Mindset</h3>
          <p>
            I learn by building real-world projects, staying current with web
            trends, and continuing to improve application reliability and UX.
          </p>
        </article>
      </div>
    </section>
  );
};
