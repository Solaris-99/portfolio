import type { Project } from '../../data/projects';
import { useTranslation } from '../../context/I18nContext';
import styles from './Projects.module.css';

export const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      {project.imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={project.imageUrl} alt={t(`projects.items.${project.id}.title`)} loading="lazy" />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{t(`projects.items.${project.id}.title`)}</h3>
        <p className={styles.cardDescription}>{t(`projects.items.${project.id}.description`)}</p>
        <div className={styles.cardFooter}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.cardLink}>
              {t('projects.viewGithub')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
