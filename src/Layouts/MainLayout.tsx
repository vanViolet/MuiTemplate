import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { LottieLibrary } from 'Utilities/Lottie'
import { CreateElements, IIngredient } from 'Components/Gluttony'
import { sidebarToggleToFalse, sidebarToggleToTrue } from 'Contexts/customizationReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MobileView } from 'Utilities/MediaQuery'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const MainLayout = () => {
  const Mobile = useMediaQuery('(max-width: 850px)')
  const dispatch = useAppDispatch()
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  // const DARK_MODE = useAppSelector((state) => state.mode.Theme)
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (Mobile) {
      dispatch(sidebarToggleToFalse())
    } else {
      dispatch(sidebarToggleToTrue())
    }
  }, [Mobile])

  function Ingredient(): IIngredient[] {
    return [
      {
        Box: [
          {
            __CHILD: LottieLibrary.WAVE({
              BoxStyle: (theme) => ({
                width: 700,
                opacity: 0.3,
                transform: 'rotateZ(-10deg)',
                marginTop: '-210px',
                display: theme.palette.mode === 'light' ? 'none' : '',
                [MobileView()]: {
                  display: 'none',
                },
              }),
            }),
          },

          {
            Box: [
              {
                style(theme) {
                  return {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : '#e3f2fd',
                    backdropFilter: 'blur(5px)',
                  }
                },
              },
            ],
          },
          {
            Box: [
              {
                style: () => ({
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,

                  zIndex: '10',
                }),
                __CHILD: (
                  <Box
                    sx={{
                      transitionDuration: '200ms',
                      marginTop: '4rem',
                      marginRight: '1rem',
                      marginLeft: BURGER_TOGGLE ? '16.6rem' : '4rem',
                      [MobileView()]: {
                        marginLeft: '1rem',
                        paddingBottom: '1rem',
                      },
                    }}
                  >
                    <Outlet />
                  </Box>
                ),
              },
              {
                __CHILD: (
                  <Box>
                    <Header />
                    <Sidebar />
                  </Box>
                ),
              },
            ],
          },
        ],
      },
    ]
  }
  return <CreateElements Ingredient={Ingredient()} />
}
