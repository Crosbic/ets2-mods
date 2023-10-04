import '@/styles/globals.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from '@/common/theme'
import Footer from '@/pages/components/footer'
import Header from '@/pages/components/header'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Моды Euro Truck Simulator 2</title>
        <meta name="description" content="Developed by Crosbic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
