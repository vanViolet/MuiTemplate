import { ButtonProps, CSSObject, SxProps, Theme } from '@mui/material'
import { IButton } from 'Components/CreateElements'
import { shadow } from 'config'
import { openStack } from 'Contexts/customizationReducer'
import { useAppDispatch } from 'Contexts/_store'
import { IconCollection, IIconCollection } from 'Collections/IconCollection'

export const ButtonCollection = {
  CUSTOM: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    whichDialog?: JSX.Element | JSX.Element[]
    disabled?: boolean | undefined
    label?: React.ReactNode | undefined
    icon?: IIconCollection
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
    size?: 'medium' | 'large' | 'small' | undefined
  }): IButton | undefined => {
    const dispatch = useAppDispatch()
    return {
      style: (theme) => ({
        fontWeight: 700,
        // margin: '1rem 0.5rem',
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        ...(args?.style?.(theme) as CSSObject),
      }),
      props: {
        disabled: args?.disabled,
        size: args?.size ?? 'small',
        color: args?.color,
        variant: 'contained',
        startIcon: IconCollection(args?.icon ?? undefined, 'ButtonSize'),
        onClick: () => dispatch(openStack(args?.whichDialog)),
        ...args?.props,
      },
      __CHILD: args?.label,
    }
  },

  ADD: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    whichDialog?: JSX.Element | JSX.Element[]
    disabled?: boolean | undefined
    label?: React.ReactNode | undefined
    icon?: IIconCollection
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
    size?: 'medium' | 'large' | 'small' | undefined
  }): IButton | undefined => {
    const dispatch = useAppDispatch()
    return {
      style: (theme) => ({
        fontWeight: 700,
        // margin: '1rem 0.5rem',
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        ...(args?.style?.(theme) as CSSObject),
      }),
      props: {
        disabled: args?.disabled,
        size: args?.size ?? 'small',
        color: args?.color ?? 'success',
        variant: 'contained',
        startIcon: IconCollection(args?.icon ?? 'Plus', 'ButtonSize'),
        onClick: () => dispatch(openStack(args?.whichDialog)),
        ...args?.props,
      },
      __CHILD: args?.label ?? 'ADD',
    }
  },

  UPDATE: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    whichDialog?: JSX.Element | JSX.Element[]
    disabled?: boolean | undefined
    label?: React.ReactNode | undefined
    icon?: IIconCollection
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
    size?: 'medium' | 'large' | 'small' | undefined
  }): IButton | undefined => {
    const dispatch = useAppDispatch()
    return {
      style: (theme) => ({
        fontWeight: 700,
        // margin: '1rem 0.5rem',
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        ...(args?.style?.(theme) as CSSObject),
      }),
      props: {
        disabled: args?.disabled,
        size: args?.size ?? 'small',
        color: args?.color ?? 'info',
        variant: 'contained',
        startIcon: IconCollection(args?.icon ?? 'Edit', 'ButtonSize'),
        onClick: () => dispatch(openStack(args?.whichDialog)),
        ...args?.props,
      },
      __CHILD: args?.label ?? 'UPDATE',
    }
  },

  DELETE: (args?: {
    props?: ButtonProps
    style?: (theme?: Theme) => SxProps<Theme>
    whichDialog?: JSX.Element | JSX.Element[]
    disabled?: boolean | undefined
    label?: React.ReactNode | undefined
    icon?: IIconCollection
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
    size?: 'medium' | 'large' | 'small' | undefined
  }): IButton | undefined => {
    const dispatch = useAppDispatch()
    return {
      style: (theme) => ({
        fontWeight: 700,
        // margin: '1rem 0.5rem',
        boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        ...(args?.style?.(theme) as CSSObject),
      }),
      props: {
        disabled: args?.disabled,
        size: args?.size ?? 'small',
        color: args?.color ?? 'error',
        variant: 'contained',
        startIcon: IconCollection(args?.icon ?? 'Trash', 'ButtonSize'),
        onClick: () => dispatch(openStack(args?.whichDialog)),
        ...args?.props,
      },
      __CHILD: args?.label ?? 'DELETE',
    }
  },
}
