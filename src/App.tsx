import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/Global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello</h1>
    </ThemeProvider>
  )
}
