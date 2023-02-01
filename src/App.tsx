import { ThemeProvider } from "styled-components"
import { Transactions } from "./pages/Transactions"
import { GlobalStyle } from "./styles/Global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
      <h1>Hello</h1>
    </ThemeProvider>
  )
}
