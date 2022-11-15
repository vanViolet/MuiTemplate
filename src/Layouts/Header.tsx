import { CSSObject } from '@emotion/react'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { sidebarToggle } from 'Contexts/customizationReducer'
import { setTheme } from 'Contexts/darkModeReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_hook'
import { COLOR } from 'Libraries/Color'
import { CSS } from 'Libraries/Css'
import { ICON } from 'Libraries/Icon'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'

export const Header = () => {
  const DARK_MODE = useAppSelector((state) => state.darkMode.Theme)
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const dispatch = useAppDispatch()

  function Food(): IFoodForGluttony[] {
    return [
      {
        StyleForGluttonyParentRoot: (theme) => ({
          ...CSS.Header(theme),
        }),

        GridContainer: () => [
          {
            PropsForThisGridContainer: { height: 'inherit' },
            GridItem: () => [
              {
                PropsForThisGridItem: {
                  xs: 1.5,
                  sm: BURGER_TOGGLE ? 2.3 : 0.5,
                  sx: (theme) => ({
                    '& > svg': {
                      [DekstopView()]: {
                        display: 'none!important' as 'none',
                      },
                    },
                    '& > :not(svg)': {
                      [MobileView()]: {
                        display: 'none!important' as 'none',
                      },
                    },

                    ['&:hover']: {
                      cursor: 'pointer',
                      backgroundColor:
                        theme.palette.mode === 'dark' ? COLOR('hover-header-background-dark') : COLOR('hover-header-background-light'),
                    },

                    '& > ::after': {
                      content: `'ONITORING'`,
                      display: BURGER_TOGGLE ? '' : ('none!important' as 'none'),
                    },
                    ...(CSS.GridItemForHeader(theme) as CSSObject),
                  }),
                  onClick: () => {
                    dispatch(sidebarToggle())
                  },
                },
                Typography: () => [
                  {
                    PropsForThisTypography: {
                      variant: 'h5',
                      fontWeight: 700,
                    },
                    WhateverIwantAsChild: 'M',
                  },
                ],
                WhateverIwantAsChild: ICON('Toggle', 'HeroSize'),
              },
              {
                PropsForThisGridItem: {
                  xs: 9,
                  sm: BURGER_TOGGLE ? 9.2 : 11,
                  sx: (theme) => ({
                    ...CSS.GridItemForHeader(theme),
                  }),
                },
                WhateverIwantAsChild: 'Document Monitoring',
              },
              {
                PropsForThisGridItem: {
                  xs: 1.5,
                  sm: 0.5,
                  sx: (theme) => ({
                    ...(CSS.GridItemForHeader(theme) as CSSObject),
                    '&:hover': {
                      cursor: 'pointer',
                      backgroundColor:
                        theme.palette.mode === 'dark' ? COLOR('hover-header-background-dark') : COLOR('hover-header-background-light'),
                    },
                  }),
                  onClick: () => {
                    dispatch(setTheme())
                    localStorage.setItem('THEME', DARK_MODE === 'dark' ? 'light' : 'dark')
                  },
                },
                WhateverIwantAsChild: ICON('UserCircle', 'HeroSize'),
              },
            ],
          },
        ],
      },
    ]
  }

  return <Gluttony FoodForGluttony={Food()} />
}
