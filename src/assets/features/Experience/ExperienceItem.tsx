
import styles from './ExperienceItem.module.css';

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
  current?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  description,
  link,
  date,
  current = false,
}) => {
  return (
    <div className={styles.experienceGrid}>
      {/* Columna Izquierda: Título, Empresa y Fecha */}
      <div className={styles.leftColumn}>
        <div className={styles.stickyContent}>
          
          {/* Fila del título con indicador circular */}
          <div className={styles.titleRow}>
            <span className={styles.dotContainer} aria-hidden="true">
              {current && <span className={styles.pulseRing} />}
              <span className={`${styles.indicatorDot} ${current ? styles.activeGlow : ''}`} />
            </span>
            <h3 className={styles.jobTitle}>{title}</h3>
          </div>
          
          <h4 className={styles.companyName}>{company}</h4>
          <time className={styles.jobDate}>{date}</time>
        </div>
      </div>

      {/* Columna Derecha: Descripción y Enlaces */}
      <div className={styles.jobDescription}>
        <p>{description}</p>
        {link && (
          <a href={link} className={styles.linkInline} target="_blank" rel="noopener noreferrer">
            Saber más sobre {company}
            <svg 
              className={styles.arrowIcon} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;