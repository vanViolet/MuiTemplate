import { ButtonProps, CSSObject, SxProps, Theme } from '@mui/material'
import { IButton } from 'Components/CreateElements'
import { shadow } from 'config'
import { openStack } from 'Contexts/customizationReducer'
import { useAppDispatch } from 'Contexts/_store'
import { IconCollection } from 'Utilities/IconCollection'

export const ButtonCollection = {
  ADD: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    doNotAppearWhen?: boolean | undefined
    whichDialog?: JSX.Element | JSX.Element[]
    disabled?: boolean | undefined
  }): IButton | undefined => {
    const dispatch = useAppDispatch()
    const material: IButton | undefined = {
      style: (theme) => ({
        fontWeight: 700,
        margin: '1rem 0.5rem',
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        ...(args?.style?.(theme) as CSSObject),
      }),
      props: {
        disabled: args?.disabled,
        size: 'small',
        color: 'success',
        variant: 'contained',
        startIcon: IconCollection('Plus', 'ButtonSize'),
        onClick: () => dispatch(openStack(args?.whichDialog)),
        ...args?.props,
      },
      __CHILD: 'ADD',
    }
    return args?.doNotAppearWhen ? undefined : material
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
      startIcon: IconCollection('Edit', 'ButtonSize'),
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
      startIcon: IconCollection('Trash', 'ButtonSize'),
      ...args?.props,
    },
    __CHILD: 'DELETE',
  }),
}
