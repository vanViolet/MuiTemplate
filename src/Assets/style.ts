import { ColorCollection } from '../Collections/ColorCollection'
import { CSSObject, SxProps, Theme } from '@mui/material'
import { borderRadius, shadow } from 'config'
import { IMenuChildren } from 'Layouts/MenuItems'
import { DekstopView, MobileView } from 'Utilities/MediaQuery'
import { commonCss } from './commonCss'

const globalTransition = '200ms'

export const css = {
  HEADER_ROOT: (theme: Theme): SxProps<Theme> => {
    return {
      ...commonCss.POSITION_ZERO_FIXED(),
      height: '3rem',
      background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[0] : ColorCollection.bg.light[0],
      backdropFilter: 'blur(10px)',
      zIndex: 11,

      [MobileView()]: {
        boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(0,0,0,1)' : '0 1px 5px rgba(0,0,0,0.5)',
      },
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
        backgroundColor: ColorCollection.bg.hoverWhite,
      },
    } as CSSObject
  },

  HEADER_ITEM: (theme: Theme): SxProps<Theme> => {
    return {
      ...commonCss.TO_CENTER({}),
      height: 'inherit',
      color: theme.palette.mode === 'dark' ? '' : 'white',
      transitionDuration: globalTransition,
    }
  },

  HEADER_USER_MENU_BUTTON: (theme: Theme): SxProps<Theme> => {
    return {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: ColorCollection.bg.hoverWhite,
      },
    }
  },

  HEADER_USER_MENU_PAPER: (theme: Theme): SxProps<Theme> => {
    return {
      '& > .MuiPaper-root': {
        backgroundImage: 'none',
        width: 300,
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        padding: '0.5rem 1.5rem',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0)' : 'white',
        backdropFilter: 'blur(25px)',
        [MobileView()]: {
          backgroundColor: theme.palette.mode === 'dark' ? 'background.paper' : 'white',
        },
        marginTop: '0.2rem',
      },
    }
  },

  HEADER_USER_MENU_ITEM: (theme: Theme): SxProps<Theme> => {
    return {
      borderRadius: '10rem',
      transitionDuration: '100ms',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: ColorCollection.bg.hover,
        cursor: 'pointer',
        borderRadius: borderRadius.md,
        color: ColorCollection.text.hover,
      } as CSSObject,
    }
  },

  SIDEBAR_ROOT: (theme: Theme): SxProps<Theme> => {
    return {
      ...commonCss.POSITION_ZERO_FIXED({ Omit: ['right'] }),
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 12,
      backdropFilter: 'blur(15px)',
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.5)' : 'white',
      boxShadow: theme.palette.mode === 'dark' ? '5px 5px 10px rgba(0,0,0,0.5)' : '2px 5px 5px rgba(0,0,0,0.2)',
    }
  },

  SIDEBAR_MENU_ITEMS: (theme: Theme, pathname?: string, row?: IMenuChildren): SxProps<Theme> => {
    const interaction =
      pathname === row?.path
        ? {
            backgroundColor: ColorCollection.bg.active,
            borderRadius: borderRadius.md,
            color: ColorCollection.text.active,
          }
        : {
            '&:hover': {
              backgroundColor: ColorCollection.bg.hover,
              cursor: 'pointer',
              borderRadius: borderRadius.md,
              color: ColorCollection.text.hover,
            } as CSSObject,
          }
    return {
      ...commonCss.TO_CENTER(),
      borderRadius: '10rem',
      color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.primary,
      textDecoration: 'none',
      height: '3rem',
      transitionDuration: '100ms',
      ...interaction,
    }
  },

  CUSTOM_SCROLLBAR: (theme: Theme): SxProps<Theme> => {
    return {
      '::-webkit-scrollbar': {
        width: '5px',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.1)' : '#fff',
        borderRadius: borderRadius.md,
      },
      '::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        borderRadius: borderRadius.md,
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: borderRadius.md,
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        backgroundColor: theme.palette.mode === 'dark' ? '#555' : 'rgba(0,0,0,0)',
        paddingTop: 20,
      },
    }
  },

  TITLE_TEMPLATE: (theme: Theme): SxProps<Theme> => {
    return {
      width: '100%',
      padding: '0.7rem',
      marginBottom: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
      color: 'white',
      boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
      borderRadius: borderRadius.md,
      [MobileView()]: {
        justifyContent: 'center',
      },
    }
  },

  CRUD_ACTION: (theme: Theme): SxProps<Theme> => {
    return {
      width: '69%',
      marginLeft: '2%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexWrap: 'wrap',
      paddingRight: '1rem',
      background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
      borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0 `,
    }
  },

  FILTER_ACTION: (theme: Theme): SxProps<Theme> => {
    return {
      width: '29%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      paddingRight: '1rem',
      background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[2] : 'white',
      borderRadius: `${borderRadius.sm} ${borderRadius.sm} 0 0 `,
    }
  },
}
