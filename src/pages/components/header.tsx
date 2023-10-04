import { Typography } from '@mui/material'

import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Typography sx={{ fontWeight: 'bold' }} color="primary">
        ets2-mods.ru
      </Typography>
    </div>
  )
}

export default Header
