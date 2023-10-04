import { Button } from '@mui/material'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Button>О проекте</Button>
      <Button>Правила проекта</Button>
      <Button>Контакты</Button>
    </div>
  )
}

export default Footer
