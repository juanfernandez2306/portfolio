
import ExperienceItem from './ExperienceItem';
import styles from './Experience.module.css';

// Importa tu JSON de experiencia laboral
import experienceData from '../../data/experience.json'; 

import TitleSection from '../TitleSection';
import { BriefcaseIcon } from '../../svg/BriefcaseIcon';

const Experience: React.FC = () => {
  return (
    <ol className={styles.experienceList} aria-label="Experiencia laboral">
      <TitleSection>
       <BriefcaseIcon /> 
        Experiencia laboral
      </TitleSection>
      {experienceData.map((exp, i) => (
        <li 
          key={i} 
          className={styles.animFadeIn} 
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <ExperienceItem {...exp} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;