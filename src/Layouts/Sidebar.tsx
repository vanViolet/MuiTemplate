import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { useAppSelector } from 'Contexts/_hook'
import { CSS } from 'Libraries/Css'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'
import { MenuItems } from './MenuItems'

export const Sidebar = () => {
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  function Food(): IFoodForGluttony[] {
    return [
      {
        StyleForGluttonyParentRoot(theme) {
          return {
            ...CSS.SidebarRoot(theme),
            ...CSS.CustomScrollbar(theme),
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
        Box: () => {
          return MenuItems.map((row) => ({
            Divider() {
              return [
                {
                  OrderThisDividerTo: 1,
                  PropsForThisDivider: {
                    textAlign: 'left',
                    sx(theme) {
                      return {
                        display: row.label === '' ? 'none' : '',
                        margin: '0.5rem 0rem',
                        '.MuiDivider-wrapper': {
                          display: BURGER_TOGGLE ? '' : 'none',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                        },
                      }
                    },
                  },
                  WhateverIwantAsChild: row.label,
                },
              ]
            },
            Box() {
              return row.children?.map((row) => ({
                OrderThisBoxTo: 2,
                PropsForThisBox: {
                  sx(theme) {
                    return {
                      ...CSS.SidebarMenuItems(theme),
                      [MobileView()]: {
                        display: BURGER_TOGGLE ? '' : 'none',
                      },
                      padding: BURGER_TOGGLE ? '0.5rem 2rem' : '',
                      justifyContent: BURGER_TOGGLE ? '' : 'center',
                      '::after': {
                        content: `"${row.label}"`,
                        fontSize: '0.9rem',
                        marginLeft: '0.5rem',
                        display: BURGER_TOGGLE ? '' : 'none',
                      },
                    }
                  },
                },
                WhateverIwantAsChild: row.icon,
              }))
            },
          }))
        },
      },
    ]
  }
  return <Gluttony FoodForGluttony={Food()} />
}
