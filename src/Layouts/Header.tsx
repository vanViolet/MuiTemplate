import { CSSObject } from '@emotion/react'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { sidebarToggle } from 'Contexts/customizationReducer'
import { setTheme } from 'Contexts/modeReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { css } from 'Assets/css'
import { IconLibrary } from 'Utilities/Icon'
import { MobileView } from 'Utilities/MediaQuery'
import { MuiSwitch } from 'Components/MuiSwitch'
import React from 'react'
import { borderRadius } from 'config'
import { ColorLibrary } from 'Utilities/Color'

export const Header = () => {
  const DARK_MODE = useAppSelector((state) => state.mode.Theme)
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function Food(): IFoodForGluttony[] {
    return [
      {
        DIRECTION: 'row', //Direction Element, ===========> FLex

        StyleForGluttonyParentRoot: (theme) => ({
          ...(css.HEADER_ROOT(theme) as CSSObject),
        }),
        style: { height: 'inherit' },
        Box: [
          // Burger Toggle  <====================================================
          {
            style: (theme) => ({
              ...(css.HEADER_BURGER_TOGGLE(theme) as CSSObject),
              ...(css.HEADER_ITEM(theme) as CSSObject),
              width: BURGER_TOGGLE ? '15.7rem' : '3.5rem',
              [MobileView()]: {
                width: BURGER_TOGGLE ? '70%' : '3.5rem',
              },
            }),
            props: {
              onClick: () => {
                dispatch(sidebarToggle())
              },
            },
            Box: [
              {
                props: { display: 'flex' },
                __CHILD: IconLibrary('Hamburger', 'HeroSize'),
              },
            ],
            __CHILD: IconLibrary('Toggle', 'HeroSize'),
          },

          // Title  <====================================================
          {
            style: (theme) => ({
              ...(css.HEADER_ITEM(theme) as CSSObject),
              flexGrow: 2,
              [MobileView()]: {
                opacity: BURGER_TOGGLE ? 0 : 1,
                display: BURGER_TOGGLE ? ('none!important' as 'none') : '',
              },
            }),
            props: {},
            Typography: [
              {
                props: { fontWeight: 700 },
                __CHILD: 'MARKETING',
              },
            ],
          },

          // Switch DarkMode  <====================================================
          {
            style: (theme) => ({
              flexGrow: 0.05,
              ...(css.HEADER_ITEM(theme) as CSSObject),
              [MobileView()]: {
                flexGrow: 0.2,
                opacity: BURGER_TOGGLE ? 0 : 1,
                display: BURGER_TOGGLE ? ('none!important' as 'none') : '',
              },
            }),

            __CHILD: MuiSwitch({
              onChange: () => {
                dispatch(setTheme())
                localStorage.setItem('THEME', DARK_MODE === 'dark' ? 'light' : 'dark')
              },
              checked: DARK_MODE === 'dark' ? true : false,
            }),
          },

          // User Menu Button  <====================================================
          {
            style: (theme) => ({
              flexGrow: 0.05,
              ...(css.HEADER_ITEM(theme) as CSSObject),
              ...(css.HEADER_USER_MENU_BUTTON(theme) as CSSObject),
              [MobileView()]: {
                flexGrow: 0.2,
                opacity: BURGER_TOGGLE ? 0 : 1,
                display: BURGER_TOGGLE ? ('none!important' as 'none') : '',
              },
            }),
            props: {
              onClick: (e) => {
                setAnchorEl(e.currentTarget)
              },
            },
            __CHILD: IconLibrary('UserCircle', 'HeroSize'),
          },

          // User Menu Dropdown <====================================================
          {
            Menu: [
              {
                open,
                anchorEl,
                onClose() {
                  setAnchorEl(null)
                },

                style: (theme) => ({
                  '& > .MuiPaper-root': {
                    backgroundImage: 'none',
                    width: 300,
                    boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 1px 5px rgba(0,0,0,0.5)',
                    padding: '0.5rem 1.5rem',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0)' : 'white',
                    backdropFilter: 'blur(25px)',
                    [MobileView()]: {
                      backgroundColor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
                    },
                    marginTop: '0.2rem',
                  },
                }),

                Typography: [
                  {
                    props: { variant: 'subtitle1', fontWeight: 700 },
                    __CHILD: 'Hallo, Irvan',
                  },
                  {
                    props: { fontStyle: 'italic', fontWeight: 400, variant: 'subtitle2' },
                    __CHILD: 'MANAGER MARKETING',
                  },
                ],

                Divider: [
                  {
                    style: () => ({
                      margin: '1rem 0rem',
                    }),
                  },
                ],
                MenuItem: [
                  {
                    style: (theme) => ({
                      borderRadius: '10rem',
                      transitionDuration: '100ms',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' ? ColorLibrary('hover-bg-dark') : ColorLibrary('hover-bg-light'),
                        cursor: 'pointer',
                        borderRadius: borderRadius.md,
                        color: theme.palette.mode === 'dark' ? ColorLibrary('hover-text-dark') : ColorLibrary('hover-text-light'),
                      } as CSSObject,
                    }),
                    rightIcon: IconLibrary('LogOut', 'MenuSize'),
                    label: 'Logout',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
  }

  return <Gluttony FoodForGluttony={Food()} />
}
