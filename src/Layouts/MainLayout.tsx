import { useMediaQuery } from '@mui/material'
import { lottie } from 'Assets/lottie'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { sidebarToggleToFalse, sidebarToggleToTrue } from 'Contexts/customizationReducer'
import { useAppDispatch } from 'Contexts/_store'
import { useEffect, useState } from 'react'
import { MobileView } from 'Utilities/MediaQuery'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const MainLayout = () => {
  const Mobile = useMediaQuery('(max-width: 850px)')
  const dispatch = useAppDispatch()

  const [value, setValue] = useState(0)
  useEffect(() => {
    if (Mobile) {
      dispatch(sidebarToggleToFalse())
    } else {
      dispatch(sidebarToggleToTrue())
    }
  }, [Mobile])

  function Food(): IFoodForGluttony[] {
    return [
      {
        Box: [
          {
            WhateverIwantAsChild: lottie.WAVE({
              BoxStyle: () => ({
                width: 700,
                opacity: 0.7,
                transform: 'rotateZ(-10deg)',
                marginTop: '-210px',
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
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'white',
                    backdropFilter: 'blur(25px)',
                  }
                },
              },
            ],
          },
          {
            WhateverIwantAsChild: <Header />,
          },
          {
            WhateverIwantAsChild: <Sidebar />,
          },
        ],
      },
    ]
  }
  return <Gluttony FoodForGluttony={Food()} />
}
