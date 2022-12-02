import { InputAdornment, SxProps, TextFieldProps, Theme } from '@mui/material'
import { IIngredient, IMenuItem, ITextField } from 'Components/CreateElements'
import { useState } from 'react'
import { IconCollection, IIconCollection } from 'Utilities/IconCollection'

export function TextFieldTemplate<V extends Record<string, unknown>>(args?: {
  type?: 'TextField' | 'NumberInput' | 'PasswordInput' | 'CurrencyInput' | 'Autocomplete'
  style?: SxProps<Theme>
  icon?: IIconCollection
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean | undefined
  values?: V
  handleChange?: (e: React.ChangeEvent<any>) => void
  handleBlur?: (e: React.ChangeEvent<any>) => void
  errors?: Record<string, unknown>
  touched?: Record<string, boolean>
  props?: TextFieldProps
  order?: number | undefined

  MenuItem?: IMenuItem[] | undefined
}): IIngredient {
  const [visibility, setVisibility] = useState(false)

  const Material: ITextField = {
    style: args?.style,
    icon: IconCollection(args?.icon ? args?.icon : undefined, 'ButtonSize'),
    props: {
      name: args?.name,
      label: args?.label,
      placeholder: args?.placeholder,
      disabled: args?.disabled,
      value: args?.values?.[args.name],
      onChange: args?.handleChange,
      onBlur: args?.handleBlur,
      error: (args?.errors?.[args?.name] as boolean) && (args?.touched?.[args?.name] as boolean),
      helperText:
        (args?.errors?.[args?.name] as boolean) && (args?.touched?.[args?.name] as boolean) && (args?.errors?.[args?.name] as string),
      type: args?.type === 'PasswordInput' && !visibility ? 'password' : 'text',
      InputProps: {
        sx: () => ({
          '& > input': {
            padding: '1rem 1rem',
          },
          '& :-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 0px rgba(0,0,0,0) inset',
            boxShadow: 'none!important' as 'none',
          },
        }),
        autoComplete: args?.name === 'username' || args?.name === 'password' ? 'new-password' : 'off',
        startAdornment: (
          <InputAdornment position="start">
            {IconCollection(
              args?.icon ? args.icon : undefined,
              'ButtonSize',
              (args?.errors?.[args?.name] as boolean) && (args?.touched?.[args?.name] as boolean) ? '#d32f2f' : ''
            )}
          </InputAdornment>
        ),
        endAdornment:
          args?.type === 'PasswordInput' ? (
            <InputAdornment
              onClick={() => setVisibility(!visibility)}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              position="end"
            >
              {IconCollection(visibility ? 'VisibilityOn' : 'VisibilityOff', 'ButtonSize')}
            </InputAdornment>
          ) : undefined,
      },
      InputLabelProps: {
        sx: () => ({
          fontWeight: 700,
          fontSize: '1rem',
          marginTop: '-0.3rem',
        }),
      },
      select: args?.type === 'Autocomplete',

      ...args?.props,
    },
    MenuItem:
      args?.type === 'Autocomplete'
        ? args?.MenuItem?.map((row) => ({
            label: row.label,
            rightIcon: row.rightIcon,
            style: row.style,
            props: row.props,
          }))
        : undefined,
    order: args?.order,
  }
  return {
    ...Material,
  }
}
