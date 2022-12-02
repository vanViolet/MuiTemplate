import { CSSObject } from '@mui/material'
import { omit } from 'lodash'

type IPositionZero = 'position' | 'top' | 'bottom' | 'right' | 'left'
type IToCenter = 'display' | 'justifyContent' | 'alignItems'

export const commonCss = {
  POSITION_ZERO_FIXED: (args?: { Omit?: IPositionZero[] }) => {
    const value: CSSObject = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
    if (args?.Omit) {
      const omited = omit(value, [...args.Omit])
      return omited
    }

    return value
  },
  POSITION_ZERO_ABSOLUTE: (args?: { Omit?: IPositionZero[] }) => {
    const value: CSSObject = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
    if (args?.Omit) {
      const omited = omit(value, [...args.Omit])
      return omited
    }
    return value
  },

  TO_CENTER: (args?: { Omit?: IToCenter[] }) => {
    const value: CSSObject = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    if (args?.Omit) {
      const omited = omit(value, [...args.Omit])
      return omited
    }
    return value
  },

  DONT_TOUCH_THE_LETTERS: () => {
    const value: CSSObject = {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      WebkitTouchCallout: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
    }
    return value
  },
}
