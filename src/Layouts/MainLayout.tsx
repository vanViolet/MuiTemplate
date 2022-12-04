import { Backdrop, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { LottieCollection } from 'Collections/LottieCollection'
import { CreateElements, IIngredient } from 'Components/CreateElements'
import { sidebarToggleToTrue, sidebarToggleToFalse } from 'Contexts/customizationReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MobileView } from 'Utilities/MediaQuery'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { commonCss } from 'Assets/commonCss'

export const MainLayout = () => {
  const Mobile = useMediaQuery('(max-width: 850px)')
  const dispatch = useAppDispatch()
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const LOADING_OVERLAY = useAppSelector((state) => state.custom.loadingOverlay)
  const DIALOG = useAppSelector((state) => state.custom.openStack)
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
            __CHILD: LottieCollection.WAVE({
              BoxStyle: (theme) => ({
                width: 700,
                opacity: 0.3,
                transform: 'rotateZ(-10deg)',
                marginTop: '-220px',
                display: theme.palette.mode === 'light' ? 'none' : '',
                [MobileView()]: {
                  display: 'none',
                },
              }),
            }),
          },
          {
            __CHILD: LottieCollection.WAVE({
              BoxStyle: (theme) => ({
                position: 'fixed',
                top: 0,
                right: 0,
                zIndex: -1,
                opacity: 0.3,
                transform: 'rotateZ(10deg)',
                marginTop: '-220px',
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
                    ...commonCss.POSITION_ZERO_FIXED(),
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : '#e3f2fd',
                    backdropFilter: 'blur(10px)',
                  }
                },
              },
            ],
          },
          {
            Box: [
              {
                style: () => ({
                  ...commonCss.POSITION_ZERO_ABSOLUTE(),
                  zIndex: '10',
                }),
                __CHILD: (
                  <Box
                    sx={{
                      transitionDuration: '200ms',
                      marginTop: '4rem',
                      marginRight: '1rem',
                      marginLeft: BURGER_TOGGLE ? '16.6rem' : '4.6rem',
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

              LOADING_OVERLAY
                ? {
                    __CHILD: (
                      <Backdrop sx={{ color: '#fff', zIndex: (theme) => 1301 }} open={true}>
                        {LottieCollection.LOADING_SQUARE({
                          BoxStyle: () => ({
                            width: 200,
                          }),
                        })}
                      </Backdrop>
                    ),
                  }
                : undefined,

              {
                __CHILD: (
                  <Box>
                    {DIALOG.map((row: JSX.Element | JSX.Element[], key: number) => (
                      <Box key={key}>{row}</Box>
                    ))}
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
