import { CSSObject, SxProps, Theme } from '@mui/material'
import { COLOR } from './Color'

export const CSS = {
  Header: (theme: Theme): SxProps<Theme> => {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3rem',
      background: theme.palette.mode === 'dark' ? COLOR('header-dark') : COLOR('header-light'),
      boxShadow: '0 1px 5px rgba(0,0,0,1)',
    } as CSSObject
  },

  GridItemForHeader: (theme: Theme): SxProps<Theme> => {
    return {
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.mode === 'dark' ? '' : 'white',
    }
  },

  SidebarRoot: (theme: Theme): SxProps<Theme> => {
    return {
      overflowY: 'scroll',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.mode === 'dark' ? COLOR('sidebar-dark') : COLOR('sidebar-light'),
      boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
    }
  },

  SidebarMenuItems: (theme: Theme): SxProps<Theme> => {
    return {
      '&:hover': {
        backgroundColor: theme.palette.mode === 'dark' ? COLOR('hover-bg-dark') : COLOR('hover-bg-light'),
        cursor: 'pointer',
      },

      height: '3rem',
      widht: 'inherit',
      display: 'flex',
      zIndex: 1,
      alignItems: 'center',
    }
  },

  CustomScrollbar: (theme: Theme): SxProps<Theme> => {
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
