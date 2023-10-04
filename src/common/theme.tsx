import { ruRU } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: { default: '#282727' },
      primary: {
        main: '#86cecb',
      },
      secondary: {
        main: '#137a7f',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 14,
    },
  },
  ruRU
)
