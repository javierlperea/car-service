import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans"'
  },
  palette: {
    type: 'light',
    primary: {
      light: '#BEC7C7',
      main: '#353D46',
      dark: '#121317',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#B85220',
      main: '#BB2020',
      dark: '#571109'
    },
    warning: {
      light: '#C1A139',
      main: '#ff9800'
    },
    text: {
      primary: '#FFF',
      secondary: '#D9D9D9'
    }
  },
  background: {
    primary: {
      light: '#F2B705',
      main: '#ff9800',
      dark: '#F28705',
      default: '#041D26'
    },
    secondary: {
      light: '#BEC7C7',
      main: '#041D26',
      dark: '#04141C'
    },
    gradient: 'linear-gradient(0deg, #04141C 30%, #012C3B 90%)'
  }
})

export default theme
