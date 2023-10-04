import { Typography } from '@mui/material'
import Link from 'next/link'

import styles from './footer.module.css'

interface ILinks {
  name: string
  link: string
}

const Footer = () => {
  const links: ILinks[] = [
    { name: 'О проекте', link: '/about' },
    { name: 'Контакты', link: '/contact' },
    { name: 'Правила', link: '/rules' },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        {links.map((link) => {
          return (
            <div key={link.name}>
              <Link href={link.link}>
                <Typography
                  color="primary"
                  className={styles.textLink}
                  sx={{ fontWeight: 'bold' }}
                >
                  {link.name}
                </Typography>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
