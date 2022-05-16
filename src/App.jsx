import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyle from '@styles/global'
import Main from '@components/Layout/Main'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Main>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Main>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App
