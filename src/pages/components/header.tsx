import { Typography } from '@mui/material'
import Link from 'next/link'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Typography
          className={styles.textLogo}
          sx={{ fontWeight: 'bold' }}
          color="primary"
        >
          ets2-mods.ru
        </Typography>
      </Link>
    </div>
  )
}

export default Header
