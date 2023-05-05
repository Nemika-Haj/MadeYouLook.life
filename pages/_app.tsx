import AppTheme from '@/styles/app.theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import "../styles/app.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={AppTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
