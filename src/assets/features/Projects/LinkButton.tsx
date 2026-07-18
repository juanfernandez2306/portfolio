// LinkButton.tsx
import React from "react"
import styles from "./LinkButton.module.css"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
}

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer" // Añadido por seguridad al usar target="_blank"
      href={href}
      className={styles.linkButton}
    >
      {children}
    </a>
  )
}