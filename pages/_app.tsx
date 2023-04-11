import "../styles/globals.css"
import "@fontsource/noto-sans"
import "@fontsource/open-sans"
import "@fontsource/teko"
import Box from "@mui/material/Box"
import { theme, globalStyles, ThemeProps } from "@ory/themes"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from "styled-components"

import AppsList from "../components/AppsList"

const GlobalStyle = createGlobalStyle((props: ThemeProps) =>
  globalStyles(props),
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-testid="app-react">
      <ThemeProvider theme={theme}>
        <div className="background-wrapper">
          <div className="overlay-image"></div>
        </div>
        <Box display="flex">
          <Component {...pageProps} />
          <AppsList />
        </Box>
        <ToastContainer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
