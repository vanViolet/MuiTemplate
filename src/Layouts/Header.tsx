import { CSSObject } from '@emotion/react'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { sidebarToggle } from 'Contexts/customizationReducer'
import { setTheme } from 'Contexts/darkModeReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { color } from 'Assets/Color'
import { css } from 'Assets/css'
import { icon } from 'Assets/icon'

export const Header = () => {
  const DARK_MODE = useAppSelector((state) => state.darkMode.Theme)
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const dispatch = useAppDispatch()

  function Food(): IFoodForGluttony[] {
    return [
      {
        StyleForGluttonyParentRoot: (theme) => ({
          ...css.HEADER_ROOT(theme),
        }),

        GridContainer: [
          {
            style: { height: 'inherit' },

            GridItem: [
              {
                style: (theme) => ({
                  ...(css.HEADER_BURGER_TOGGLE(theme) as CSSObject),
                  ...(css.GRID_ITEM_HEADER(theme) as CSSObject),
                }),
                props: {
                  xs: 1.5,
                  sm: BURGER_TOGGLE ? 2.3 : 0.5,
                  onClick: () => {
                    dispatch(sidebarToggle())
                  },
                },
                Box: [
                  {
                    props: { display: 'flex' },
                    WhateverIwantAsChild: icon('Hamburger', 'HeroSize'),
                  },
                ],
                WhateverIwantAsChild: icon('Toggle', 'HeroSize'),
              },
              {
                style: (theme) => ({
                  ...(css.GRID_ITEM_HEADER(theme) as CSSObject),
                }),
                props: {
                  xs: 9,
                  sm: BURGER_TOGGLE ? 9.2 : 11,
                },
                WhateverIwantAsChild: 'Marketing',
              },
              {
                style: (theme) => ({
                  ...(css.GRID_ITEM_HEADER(theme) as CSSObject),

                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor:
                      theme.palette.mode === 'dark' ? color('hover-header-background-dark') : color('hover-header-background-light'),
                  },
                }),
                props: {
                  xs: 1.5,
                  sm: 0.5,

                  onClick: () => {
                    dispatch(setTheme())
                    localStorage.setItem('THEME', DARK_MODE === 'dark' ? 'light' : 'dark')
                  },
                },
                WhateverIwantAsChild: icon('UserCircle', 'HeroSize'),
              },
            ],
          },
        ],
      },
    ]
  }

  return <Gluttony FoodForGluttony={Food()} />
}
