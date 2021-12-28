// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppRouter } from './routers/AppRouter'
import theme from './theme'

import './App.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
