import { Box, createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useAppSelector } from 'Contexts/_hook'
import { MainLayout } from 'Layouts/MainLayout'
import NavigationScroll from 'NavigationScroll'
import { Routes } from 'react-router-dom'

function App() {
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      text: {
        ...(mode === 'light'
          ? {
              primary: grey[800],
              secondary: grey[800],
            }
          : {
              primary: '#fff',
              secondary: grey[500],
            }),
      },
    },
  })
  const Theme = useAppSelector((state) => state.darkMode.Theme)

  const darkModeTheme = createTheme({
    ...getDesignTokens(Theme),
    breakpoints: {
      values: {
        xs: 0,
        // small
        sm: 850,
        // medium
        md: 900,
        // large
        lg: 1200,
        // extra-large
        xl: 1536,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            '*::-webkit-scrollbar': {
              width: '2px',
            },
            '*::-webkit-scrollbar-track': {
              background: '#E4EFEF',
            },
            '*::-webkit-scrollbar-thumb': {
              background: '#1D388F61',
              borderRadius: '2px',
            },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          fontFamily: 'inherit',
        },
      },
    },
  })

  return (
    <Box
      sx={{
        colorScheme: darkModeTheme.palette.mode === 'dark' ? 'dark' : 'light',
      }}
    >
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
          <MainLayout />
        </NavigationScroll>
      </ThemeProvider>
    </Box>
  )
}

export default App
