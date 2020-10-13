/** @jsx jsx */
import { jsx } from 'theme-ui'
// import '../styles/globals.css'
import theme from '../theme'
import { ThemeProvider, useThemeUI } from 'theme-ui'

function MyApp({ Component, pageProps }) {
  // const context = useThemeUI()
  // const { theme, colorMode, setColorMode } = context

  const a = 'sjdflksdjfkldsjflkdsjfdsf'

  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
