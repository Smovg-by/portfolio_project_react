import React from 'react'
import styles from './Project.module.scss'

export const Project = ({title, shortDescription, fullDescription, style, technologies, link, viewModeSwitcher}) => {

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer} style={style}>
        <div>
          <a className={styles.button} href={link} onClick={viewModeSwitcher}>
            View
          </a>
        </div>
      </div>
      <h4>{title}</h4>
      <p className={styles.description}>{() => shortDescription}</p>
    </div>
  )
}
