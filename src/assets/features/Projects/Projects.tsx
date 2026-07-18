// Projects.tsx
import { useRef } from "react"
import styles from "./Projects.module.css";

// Importa tus componentes de React para los iconos y botones
import ReactIcon from "../../svg/ReactIcon";
import CssModule from "../../svg/CssModule";
import GitHubIcon from "../../svg/GitHubIcon" 
import ExternalLink from "../../svg/ExternalLink";
import LinkButton from "./LinkButton";

// Datos de proyectos simulados o importados directamente
import projectsData from '../../data/projects.json';

import CodeDotsIcon from "../../svg/CodeDotsIcon";
import TitleSection from "../TitleSection";
import MySQLIcon from "../../svg/MySQLIcon";
import PhpIcon from "../../svg/PhpIcon";

// Tipado de los Tags disponibles
interface TagInfo {
  name: string
  className: string
  Icon: React.ComponentType<{ className?: string }>
}

const TAGS: Record<string, TagInfo> = {
  REACT: {
    name: "React",
    className: styles.fondoReact,
    Icon: ReactIcon,
  },
  CSSMODULE: {
    name: "CSS module",
    className: styles.fondoCss,
    Icon: CssModule,
  },
  PHP: {
    name: "PHP",
    className: styles.fondoCss,
    Icon: PhpIcon,
  },
  MYSQL: {
    name: "MySQL",
    className: styles.fondoReact,
    Icon: MySQLIcon,
  },
}

interface Project {
  title: string
  description: string
  image: string // Puede ser la ruta al .webm o .png/.jpg
  tags: string[]
  link?: string
  github?: string
}

export default function Projects() {
  // Mapeamos las keys de los tags de JSON al objeto de configuración TAGS
  const projects = (projectsData as Project[]).map((project) => ({
    ...project,
    resolvedTags: project.tags.map((key) => TAGS[key]).filter(Boolean),
  }))

  return (
    <div className={styles.container}>
      <TitleSection>
        <CodeDotsIcon /> Proyectos
      </TitleSection>

      <div className={styles.projectsContainer}>
      

      {projects.map(({ image, title, description, resolvedTags, link, github }, index) => {
        // Corrección: Declaramos el hook y la lógica abriendo un bloque de función dentro del .map
        const videoRef = useRef<HTMLVideoElement>(null);
        const isVideo = image.endsWith('.webm') || image.endsWith('.mp4');

        return (
          
          <article key={index} className={styles.projectArticle}>
            {/* Columna de la Imagen / Video */}
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                {isVideo ? (
                  <video
                    ref={videoRef}
                    className={styles.projectImage}
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    loop
                  >
                    <source src={image} type="video/webm" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                ) : (
                  <img
                    alt={title}
                    className={styles.projectImage}
                    loading="lazy"
                    src={image}
                  />
                )}
              </div>
            </div>

            {/* Columna de la Información */}
            <div className={styles.infoWrapper}>
              <h3 className={styles.title}>{title}</h3>
              
              <ul className={styles.tagList}>
                {resolvedTags.map((tag, tagIndex) => {
                  const TagIcon = tag.Icon
                  return (
                    <li key={tagIndex}>
                      <span className={`${styles.badge} ${tag.className}`}>
                        <TagIcon className={styles.svg} />
                        {tag.name}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <p className={styles.description}>{description}</p>
              
              <footer className={styles.footer}>
                {github && (
                  <LinkButton href={github}>
                    <GitHubIcon />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <ExternalLink className="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </article>
        )
      })}
    </div>

    </div>
  )
}