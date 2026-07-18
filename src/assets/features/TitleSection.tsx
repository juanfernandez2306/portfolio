import styles from './TitleSection.module.css';

interface TitleSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ children, className = "" }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.title} ${className}`}>
        {children}
      </h2>
      {/* Línea decorativa con gradiente */}
      <div className={styles.underline} aria-hidden="true" />
    </div>
  );
};

export default TitleSection;