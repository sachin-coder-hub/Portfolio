import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <p>
            Experienced Frontend Developer with over 3 years of expertise in
            building scalable and dynamic web applications using technologies
            like React.js, Tailwind CSS, and AngularJS.
          </p>
        </li>
        <li className={styles.aboutItem}>
          <p>
            Hands-on experience in building clones of popular platforms like
            Swiggy, Netflix, and YouTube, leveraging live APIs, state management
            with Redux, and modern frontend frameworks.
          </p>
        </li>
        <li className={styles.aboutItem}>
          <p>
            Passionate about creating seamless user experiences and continually
            expanding my expertise in full-stack development by learning Node.js
            and backend concepts.
          </p>
        </li>
      </ul>
    </section>
  );
};
