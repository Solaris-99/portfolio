import { useTranslation } from '../../context/I18nContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">Emanuel<span className={styles.dot}>.</span></a>
        </div>
        
        <ul className={styles.links}>
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
        </ul>

        <div className={styles.controls}>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className={styles.langBtn}
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>
          
          <button 
            onClick={toggleTheme} 
            className="btn-icon"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
