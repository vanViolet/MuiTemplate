import { Box, createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useAppSelector } from 'Contexts/_store'
import NavigationScroll from 'NavigationScroll'
import { Routes } from 'Routers/Routes'

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
  const Theme = useAppSelector((state) => state.mode.Theme)

  const darkModeTheme = createTheme({
    ...getDesignTokens(Theme),

    typography: {
      fontFamily:
        "Poppins,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        // small
        sm: 900,
        // medium
        md: 900,
        // large
        lg: 1200,
        // extra-large
        xl: 1536,
      },
    },
    components: {
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
        </NavigationScroll>
      </ThemeProvider>
    </Box>
  )
}

export default App
