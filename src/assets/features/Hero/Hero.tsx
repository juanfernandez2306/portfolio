// src/components/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';
import Badge from './components/Badge';
import SocialPill from './components/SocialPill';

// Importa tus componentes SVG de iconos desde tu carpeta de iconos:
import SparklesIcon from '../../svg/SparklesIcon';
import MailIcon from '../../svg/MailIcon';
import GitHubIcon from '../../svg/GitHubIcon';

import miFoto from '../../img/mi_foto.png';

interface HeroProps {
  personalImageAlt?: string;
  avatarSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  personalImageAlt = "Juan Fernandez",
}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.headerRow} ${styles.animFadeIn}`}>
        {/* Avatar con brillo ambiental */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarGlow} aria-hidden="true"></div>
          <img
            className={styles.avatarImage}
            src={miFoto}
            alt={personalImageAlt}
          />
        </div>

        <Badge>
           <SparklesIcon className={styles.badgeIcon} /> 
        Disponible para trabajar 
        </Badge>  
        
        
      </div>

      <h1 className={`${styles.title} ${styles.animFadeIn} ${styles.delay1}`}>
        Hey, soy <span className={styles.gradientName}>Juan Fernández</span>
      </h1>

      <p className={`${styles.description} ${styles.animFadeIn} ${styles.delay2}`}>
        +10 años de experiencia. <strong>Ingeniero Geodesta y Programador Web SIG</strong> de Maracaibo, Venezuela 🇻🇪. Conecto la ciencia geoespacial con la web para crear mapas interactivos y soluciones de geolocalización.
      </p>

      <nav
        className={`${styles.navSocial} ${styles.animFadeIn} ${styles.delay3}`}
        aria-label="Redes sociales y contacto"
      >
        <SocialPill href="mailto:juanfernandez2306@gmail.com">
          <MailIcon />
          Contáctame
        </SocialPill>
        <SocialPill href="https://github.com/juanfernandez2306/">
          <GitHubIcon />
          GitHub
        </SocialPill>
      </nav>
    </div>
  );
};

export default Hero;