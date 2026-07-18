
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  isClickable?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
    children,
    isClickable = false
 }) => {
  return (
    <div className={styles.badgeContainer}>
      <span className={styles.spinnerWrapper}>
        <span className={styles.spinnerBg}></span>
        <div 
            className={styles.content} 
            style={{ cursor: isClickable ? 'pointer' : 'default' }}>
          {children}
        </div>
      </span>
    </div>
  );
};

export default Badge;