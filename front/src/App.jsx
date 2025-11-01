import { useState } from 'react'
import Header from './components/header/header'
import { observer } from 'mobx-react'
import { Box, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GilroyMediumFont from './assets/fonts/gilroy-medium.ttf'
import clientStore from './stores/clientStore';
import FirstBlock from './components/firstContentBlock/firstBlock';
import SecondContentBlock from './components/secondContentBlock/secondContentBlock';
import RoutesComponent from './routes/routes';


const theme = createTheme({
  typography: {
    fontFamily: '"GilroyMedium", sans-serif',
    fontSize: {
      xs: '1rem', 
      sm: '1.25rem',
      md: '1.5rem',  
      lg: '1.75rem',
      xl: '2rem', 
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"GilroyMedium", sans-serif',
          fontSize: {
            xs: '1rem', 
            sm: '1.25rem',
            md: '1.5rem',  
            lg: '1.75rem',
            xl: '2rem', 
          },
        },
      },
    },
  },
});



function App() {
  document.body.style.backgroundColor = '#ffffff'
  const fontFace = new FontFace('GilroyMedium', `url(${GilroyMediumFont})`)
  document.fonts.add(fontFace)

  clientStore.setIsMobile(useMediaQuery('(max-width:1024px)'))

  return (
    <ThemeProvider theme={theme}>
      <RoutesComponent />
    </ThemeProvider>
  )
}

export default observer(App)
