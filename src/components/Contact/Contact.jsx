import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
            target="_blank"
          />
          <a href="mailto:sachincoder0706@gmail.com">
            sachincoder0706@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
          >
            linkedin.com/sachin-doddahubballi
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sachin-coder-hub" target="_blank">
            github.com/sachin-coder-hub
          </a>
        </li>
      </ul>
    </footer>
  );
};
