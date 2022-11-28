import { InputAdornment } from '@mui/material'
import { IconLibrary } from 'Utilities/Icon'
import { IFoodForGluttony } from 'Components/Gluttony'

export const TextFieldTemplate = (args?: { type: 'searchInput' }) => {
  return {
    TextField: [
      {
        props: {
          size: 'small',
          InputProps: {
            startAdornment: <InputAdornment position="start">{IconLibrary('Search', 'ButtonSize')}</InputAdornment>,
          },
        },
      },
    ],
  } as IFoodForGluttony
}
