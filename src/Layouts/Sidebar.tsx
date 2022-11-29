import { CSSObject } from '@emotion/react'
import { CreateElements, IBox, IBoxNotNested, IIngredient } from 'Components/CreateElements'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'

import { css } from 'Assets/style'
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

  function Ingredient(): IIngredient[] {
    return [
      {
        styleForParentBox(theme) {
          return {
            ...(css.SIDEBAR_ROOT(theme) as CSSObject),
            ...(css.CUSTOM_SCROLLBAR(theme) as CSSObject),
            transitionDuration: '200ms',
            [DekstopView()]: {
              width: BURGER_TOGGLE ? '15.7rem' : '3.5rem',
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
                padding: BURGER_TOGGLE ? '0 1rem' : '0rem 0.2rem',
                paddingTop: BURGER_TOGGLE ? '0.9rem' : '0.3rem',
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
                  __CHILD: row.label,
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
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          marginLeft: '0.5rem',
                          display: BURGER_TOGGLE ? '' : 'none',
                        },
                      }
                    },
                    order: 2,
                    __CHILD: row.icon,
                  } as IBoxNotNested)
              ),
            } as IBox)
        ),
      },
    ]
  }
  return <CreateElements Ingredient={Ingredient()} />
}
