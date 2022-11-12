import { Gluttony } from 'Components/Gluttony'
import NavigationScroll from 'NavigationScroll'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <NavigationScroll>
      <Routes />
      {/* <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: ColorLibrary('header-light'),
          height: 50,
          display: 'flex',
        }}
      >
        <Box sx={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Monitoring</Box>
        <Box sx={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>
        <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>
      </Box>
      <Box
        sx={(theme) => ({
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '15%',
          marginTop: 6.2,
          backgroundColor: ColorLibrary('sidebar-light'),
          [theme.breakpoints.down('sm')]: {
            backgroundColor: 'black',
          },
        })}
      ></Box> */}
      <Gluttony
        DevourArraysObject={[
          {
            GridContainer: () => {
              return [
                {
                  Property: { sx: { backgroundColor: 'red' } },
                  GridItem: () => {
                    return [
                      {
                        WhateverIwantAsChild: 'Hello',
                        Property: {
                          sx: (theme) => ({ backgroundColor: 'red', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }),
                        },
                      },
                    ]
                  },
                },
              ]
            },
          },
        ]}
      />
    </NavigationScroll>
  )
}

export default App
