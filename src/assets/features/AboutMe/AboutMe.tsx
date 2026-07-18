
import styles from './AboutMe.module.css';
import miFoto from '../../img/yo.jpg';

import TitleSection from '../TitleSection';
import UserHeartIcon from '../../svg/UserHeartIcon';

export const AboutMe: React.FC = () => {
  const personalImageAlt = "Juan Fernández"; // De la lógica front de Astro

  return (
    <div className={styles.contenedor}>
        <TitleSection>
           <UserHeartIcon />
            Sobre mí
        </TitleSection>
        <article className={styles.container}>
      <div className={styles.content}>
        <p>
            Me llamo Juan Fernández. <strong className={styles.highlight}>
                Soy Ingeniero Geodesta
            </strong> (Universidad del Zulia, 2015) y <strong className={styles.highlight}>
                especialista en Catastro y Avalúo Inmobiliario
            </strong> (MSc., 2018). 
            Descubrí en la programación, 
            la herramienta perfecta para automatizar 
            procesos, optimizar flujos de trabajo y 
            llevar la precisión de la geomática al navegador web.
        </p>
        
        <p>
            Actualmente, combino lo mejor de dos mundos: la rigurosidad de las mediciones de campo 
            en <strong className={styles.highlight}>topografía</strong> y la <strong className={styles.highlight}>
            arquitectura de aplicaciones web geoespaciales (WebGIS).
            </strong> 
        </p>

        <p>
            Me 
            especializo en diseñar soluciones 
            para la captura de datos en tiempo real 
            (mediante GPS móvil), 
            el modelado de <strong className={styles.highlight}>bases de datos</strong> (con almacenamiento geográfico) y el <strong className={styles.highlight}>
            análisis cartográfico avanzado
            </strong>.
        </p>

        <p>
            Como desarrollador <strong className={styles.highlight}>WebGIS</strong>, mi enfoque es 
            crear <strong className={styles.highlight}>mapas dinámicos fluidos</strong>, 
            interactivos y optimizados para el usuario, 
            asegurando que la complejidad de 
            los <strong className={styles.highlight}>datos geoespaciales</strong> se 
            traduzca en una <strong className={styles.highlight}>experiencia visual intuitiva</strong>.
        </p>

        
      </div>

      <img
        width="100"
        height="100"
        src={miFoto}
        alt={personalImageAlt}
        className={styles.image}
      />
    </article>
    </div>
  );
};
