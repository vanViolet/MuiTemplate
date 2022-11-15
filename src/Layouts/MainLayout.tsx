import { useMediaQuery } from '@mui/material'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { sidebarToggleToFalse, sidebarToggleToTrue } from 'Contexts/customizationReducer'
import { useAppDispatch } from 'Contexts/_hook'
import { useEffect } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const MainLayout = () => {
  const Mobile = useMediaQuery('(max-width: 850px)')
  const dispatch = useAppDispatch()

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
        WhateverIwantAsChild: <Header />,
      },
      {
        WhateverIwantAsChild: <Sidebar />,
      },
    ]
  }
  return <Gluttony FoodForGluttony={Food()} />
}
