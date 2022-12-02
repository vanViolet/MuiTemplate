import { CSSObject } from '@emotion/react'
import { CreateElements, IIngredient } from 'Components/CreateElements'
import { sidebarToggle } from 'Contexts/customizationReducer'
import { setTheme } from 'Contexts/modeReducer'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { css } from 'Assets/style'
import { IconCollection } from 'Utilities/IconCollection'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'
import { MuiSwitch } from 'Components/MuiSwitch'
import React from 'react'

export const Header = () => {
  const DARK_MODE = useAppSelector((state) => state.mode.Theme)
  const BURGER_TOGGLE = useAppSelector((state) => state.custom.sidebarToggle)
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function Ingredient(): IIngredient[] {
    return [
      {
        DIRECTION: 'row', //Direction Element, ===========> FLex

        styleForParentBox: (theme) => ({
          ...(css.HEADER_ROOT(theme) as CSSObject),
          [DekstopView()]: {
            transitionDuration: '200ms',
            boxShadow: BURGER_TOGGLE
              ? theme.palette.mode === 'dark'
                ? '250px 4px 10px rgba(0,0,0,1)'
                : '0 1px 5px rgba(0,0,0,0.5)'
              : theme.palette.mode === 'dark'
              ? '50px 4px 10px rgba(0,0,0,1)'
              : '0 1px 5px rgba(0,0,0,0.5)',
          },
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
                __CHILD: IconCollection('Hamburger', 'HeroSize'),
              },
            ],
            __CHILD: IconCollection('Toggle', 'HeroSize'),
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
            __CHILD: IconCollection('UserCircle', 'HeroSize'),
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
                  ...css.HEADER_USER_MENU_PAPER(theme),
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
                      ...css.HEADER_USER_MENU_ITEM(theme),
                    }),
                    rightIcon: IconCollection('LogOut', 'MenuSize'),
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

  return <CreateElements Ingredient={Ingredient()} />
}
