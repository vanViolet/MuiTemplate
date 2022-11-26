import { CSSObject } from '@emotion/react'
import { Gluttony, IBox, IBoxNotNested, IFoodForGluttony } from 'Components/Gluttony'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'

import { css } from 'Assets/css'
import { Link, useLocation } from 'react-router-dom'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'
import { MenuItems } from './MenuItems'
import { useMediaQuery, useTheme } from '@mui/material'
import { sidebarToggleToFalse } from 'Contexts/customizationReducer'

export const Sidebar = () => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useAppDispatch()
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const location = useLocation()

  function Food(): IFoodForGluttony[] {
    return [
      {
        StyleForGluttonyParentRoot(theme) {
          return {
            ...(css.SIDEBAR_ROOT(theme) as CSSObject),
            ...(css.CUSTOM_SCROLLBAR(theme) as CSSObject),
            transitionDuration: '200ms',
            [DekstopView()]: {
              width: BURGER_TOGGLE ? ' 19.166667%' : '4.166667%',
              marginTop: '3rem',
            },
            [MobileView()]: {
              width: BURGER_TOGGLE ? ' 70%' : '0',
              marginTop: '3rem',
            },
          }
        },
        Box: MenuItems.map(
          (row) =>
            ({
              style: () => ({
                padding: BURGER_TOGGLE ? '0 1rem' : '',
                paddingTop: BURGER_TOGGLE ? '0.9rem' : '0.1rem',
              }),
              Divider: [
                {
                  style() {
                    return {
                      transitionDuration: '300ms',
                      display: row.label === '' ? 'none' : '',
                      margin: '0.5rem 0rem',
                      '.MuiDivider-wrapper': {
                        display: BURGER_TOGGLE ? '' : 'none',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                      },
                    }
                  },
                  order: 1,
                  props: {
                    textAlign: 'left',
                  },
                  WhateverIwantAsChild: row.label,
                },
              ],
              Box: row.children?.map(
                (row) =>
                  ({
                    props: {
                      component: Link,
                      to: row.path,
                      onClick: () => (isMobileView ? dispatch(sidebarToggleToFalse()) : undefined),
                    },
                    style(theme) {
                      return {
                        ...css.SIDEBAR_MENU_ITEMS(theme, location.pathname, row),
                        [MobileView()]: {
                          display: BURGER_TOGGLE ? '' : 'none',
                        },
                        padding: BURGER_TOGGLE ? '0rem 1rem' : '',
                        justifyContent: BURGER_TOGGLE ? '' : 'center',
                        ['::after']: {
                          content: `"${row.label}"`,
                          marginTop: '0.2rem',
                          fontSize: '0.95rem',
                          marginLeft: '0.5rem',
                          display: BURGER_TOGGLE ? '' : 'none',
                        },
                      }
                    },
                    order: 2,
                    WhateverIwantAsChild: row.icon,
                  } as IBoxNotNested)
              ),
            } as IBox)
        ),
      },
    ]
  }
  return <Gluttony FoodForGluttony={Food()} />
}
