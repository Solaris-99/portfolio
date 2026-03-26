import { useTranslation } from '../../context/I18nContext';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
