import { useTranslation } from '../../context/I18nContext';
import styles from './Experience.module.css';

export const Experience = () => {
  const { t } = useTranslation();
  const jobIndices = ['0', '1', '2'];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
        <div className={styles.timeline}>
          {jobIndices.map(index => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.timelineRole}>{t(`experience.jobs.${index}.role`)}</h3>
                  <span className={styles.timelinePeriod}>{t(`experience.jobs.${index}.period`)}</span>
                </div>
                <p className={styles.timelineDescription}>
                  {t(`experience.jobs.${index}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
