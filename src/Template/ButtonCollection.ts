import { ButtonProps, CSSObject, SxProps, Theme } from '@mui/material'
import { IButton } from 'Components/CreateElements'
import { shadow } from 'config'
import { IconLibrary } from 'Utilities/Icon'

export const ButtonCollection = {
  ADD: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    Authorization?: boolean | undefined
  }): IButton | undefined => {
    return args?.Authorization
      ? undefined
      : {
          style: (theme) => ({
            display: args?.Authorization ? ('none!important' as 'none') : '',
            fontWeight: 700,
            margin: '1rem 0.5rem',
            boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
            ...(args?.style?.(theme) as CSSObject),
          }),
          props: {
            size: 'small',
            color: 'success',
            variant: 'contained',
            startIcon: IconLibrary('Plus', 'ButtonSize'),
            ...args?.props,
          },
          __CHILD: 'ADD',
        }
  },

  UPDATE: (args?: { props?: ButtonProps; style?: (theme?: Theme) => SxProps<Theme>; Authorization?: boolean | undefined }): IButton => ({
    style: (theme) => ({
      display: args?.Authorization ? 'none' : '',
      fontWeight: 700,
      margin: '1rem 0.5rem',
      boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
      ...(args?.style?.(theme) as CSSObject),
    }),
    props: {
      size: 'small',
      color: 'info',
      variant: 'contained',
      startIcon: IconLibrary('Edit', 'ButtonSize'),
      ...args?.props,
    },
    __CHILD: 'UPDATE',
  }),

  DELETE: (args?: { props?: ButtonProps; style?: (theme?: Theme) => SxProps<Theme>; Authorization?: boolean | undefined }): IButton => ({
    style: (theme) => ({
      display: args?.Authorization ? 'none' : '',
      fontWeight: 700,
      margin: '1rem 0.5rem',
      boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
      ...(args?.style?.(theme) as CSSObject),
    }),
    props: {
      size: 'small',
      color: 'error',
      variant: 'contained',
      startIcon: IconLibrary('Trash', 'ButtonSize'),
      ...args?.props,
    },
    __CHILD: 'DELETE',
  }),
}
