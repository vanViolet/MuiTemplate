import { CSSObject, SxProps, Theme } from '@mui/material'
import { IMenuChildren } from 'Layouts/MenuItems'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'
import { color } from './Color'

const globalTransition = '200ms'

export const css = {
  HEADER_ROOT: (theme: Theme): SxProps<Theme> => {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3rem',
      background: theme.palette.mode === 'dark' ? color('header-dark') : color('header-light'),
      backdropFilter: 'blur(10px)',

      boxShadow: theme.palette.mode === 'dark' ? '0 1px 5px rgba(0,0,0,1)' : '0 1px 5px rgba(0,0,0,0.5)',
    } as CSSObject
  },

  HEADER_BURGER_TOGGLE: (theme: Theme): SxProps<Theme> => {
    return {
      transitionDuration: globalTransition,
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
        backgroundColor: theme.palette.mode === 'dark' ? color('hover-header-background-dark') : color('hover-header-background-light'),
      },
    } as CSSObject
  },

  GRID_ITEM_HEADER: (theme: Theme): SxProps<Theme> => {
    return {
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.mode === 'dark' ? '' : 'white',
      transitionDuration: globalTransition,
    }
  },

  SIDEBAR_ROOT: (theme: Theme): SxProps<Theme> => {
    return {
      overflowY: 'auto',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'white',
      boxShadow: theme.palette.mode === 'dark' ? '2px 5px 5px rgba(0,0,0,0.5)' : '2px 5px 5px rgba(0,0,0,0.2)',
    }
  },

  SIDEBAR_MENU_ITEMS: (theme: Theme, pathname?: string, row?: IMenuChildren): SxProps<Theme> => {
    const interaction =
      pathname === row?.path
        ? {
            backgroundColor: theme.palette.mode === 'dark' ? color('active-bg-dark') : color('active-bg-light'),
            borderRadius: '0.5rem',
            color: theme.palette.mode === 'dark' ? color('active-text-dark') : color('active-text-light'),
          }
        : {
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' ? color('hover-bg-dark') : color('hover-bg-light'),
              cursor: 'pointer',
              borderRadius: '0.5rem',
              color: theme.palette.mode === 'dark' ? color('hover-text-dark') : color('hover-text-light'),
            } as CSSObject,
          }
    return {
      borderRadius: '10rem',

      color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.primary,
      textDecoration: 'none',
      height: '3rem',
      widht: 'inherit',
      display: 'flex',
      zIndex: 1,
      alignItems: 'center',
      transitionDuration: '100ms',
      ...interaction,
    }
  },

  CUSTOM_SCROLLBAR: (theme: Theme): SxProps<Theme> => {
    return {
      '::-webkit-scrollbar': {
        width: '5px',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.1)' : '#fff',
        borderRadius: '15px',
      },
      '::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '5px',
        boxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
        backgroundColor: theme.palette.mode === 'dark' ? '#555' : 'rgba(0,0,0,0)',
        paddingTop: 20,
      },
    }
  },
}
