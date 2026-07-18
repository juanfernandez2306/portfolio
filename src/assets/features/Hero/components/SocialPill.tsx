
import styles from './SocialPill.module.css';

interface SocialPillProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const SocialPill: React.FC<SocialPillProps> = ({ children, href, ...props }) => {
  return (
    <a 
      href={href} 
      className={styles.pill} 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props}
    >
      {children}
    </a>
  );
};

export default SocialPill;