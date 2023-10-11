import { Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

import styles from './auth.module.css'

const Auth = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorLogin, setErrorLogin] = useState<boolean>(false)
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleClickLogin = async () => {
    setIsLoading(true)
    axios
      .post('/api/auth', {
        email: email,
        password: password,
      })
      .then((r) => r.data)
      .then(() => setIsLoading(false))
      .finally(() => router.push('/'))
  }

  return (
    <div className={styles.wrapper}>
      <Typography sx={{ fontWeight: 'bold' }} variant="h5">
        Аутентификация
      </Typography>

      <TextField
        className={styles.input}
        label="Логин"
        required
        variant="filled"
        type="text"
        autoComplete="off"
        error={errorLogin}
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value)
        }}
        onBlur={(e) => {
          const value = e.currentTarget.value
          setErrorLogin(!value)
        }}
      />

      <TextField
        className={styles.input}
        label="Пароль"
        required
        variant="filled"
        type="password"
        onBlur={(e) => {
          const value = e.currentTarget.value
          setErrorPassword(!value)
        }}
        autoComplete="off"
        error={errorPassword}
        value={password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value)
        }}
      />

      <Button
        variant="contained"
        disabled={errorLogin || errorPassword}
        sx={{ width: '150px', fontWeight: 'bold' }}
        onClick={handleClickLogin}
      >
        Войти
        {isLoading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Button>
    </div>
  )
}

export default Auth
