import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.smallLabel}>Let's work together</p>
          <h2>Contact</h2>
          <p>
            I thrive on collaboration and am available for team projects,
            contract roles, or freelance partnerships. Let's discuss how I can
            contribute to your goals.
          </p>
        </div>

        <div className={styles.cards}>
          <a
            className={styles.card}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sachincoder0706@gmail.com"
            aria-label="Compose email to Sachin in Gmail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.cardIcon}>
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
              />
            </div>
            <div>
              <h3>Email</h3>
              <p>sachincoder0706@gmail.com</p>
            </div>
          </a>

          <a
            className={styles.card}
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <div className={styles.cardIcon}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/sachin-doddahubballi</p>
            </div>
          </a>

          <a
            className={styles.card}
            href="https://github.com/sachin-coder-hub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <div className={styles.cardIcon}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
              />
            </div>
            <div>
              <h3>GitHub</h3>
              <p>github.com/sachin-coder-hub</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
