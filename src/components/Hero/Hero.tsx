import { useTranslation } from '../../context/I18nContext';
import styles from './Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();

  const greetingParts = t('hero.greeting').split(',');
  const part1 = greetingParts[0];
  const part2 = greetingParts.length > 1 ? ',' + greetingParts.slice(1).join(',') : '';

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            <span>Available for work</span>
          </div>
          <h1 className={styles.title}>
            {part1}
            <br />
            <span className={styles.gradientText}>{part2}</span>
          </h1>
          <p className={styles.description}>
            {t('hero.description')}
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">{t('hero.cta')}</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.086.635-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
