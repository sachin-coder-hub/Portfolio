import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <h3 className={styles.sectionHeading}>Tech Stack</h3>
          <p className={styles.skillNote}>
            Frontend and backend tools for your evolving full-stack journey.
          </p>
          <div className={styles.skillGrid}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    {skill.imageSrc ? (
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    ) : (
                      <span className={styles.skillPlaceholder}>
                        {skill.title}
                      </span>
                    )}
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.historyWrapper}>
          <h3 className={styles.sectionHeading}>Work History</h3>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <div className={styles.historyHeader}>
                      <div>
                        <h4>{historyItem.role}</h4>
                        <p className={styles.companyName}>
                          {historyItem.organisation}
                        </p>
                        {historyItem.location && (
                          <p className={styles.location}>
                            {historyItem.location}
                          </p>
                        )}
                      </div>
                      <span className={styles.dates}>
                        {historyItem.startDate} - {historyItem.endDate}
                      </span>
                    </div>
                    <ul className={styles.historyDetails}>
                      {historyItem.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
