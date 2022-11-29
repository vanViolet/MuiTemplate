import React from 'react'
import { ColorCollection } from 'Utilities/Color'
import { IconLibrary } from 'Utilities/Icon'

export const SortTableTemplate = (args?: {
  name?: string
  label?: React.ReactNode
  onClick?: () => void
  sortField?: string
  sortDirection?: 'asc' | 'desc'
}) => {
  return {
    style: { padding: 0, margin: 0 },
    props: {
      onClick: () => args?.onClick?.(),
    },
    Box: [
      {
        style: () => ({
          display: 'flex',
          alignItems: 'center',
          height: '4rem',
          padding: '0 1rem',
          justifyContent: 'space-between',
          '&:hover': {
            background: ColorCollection.bg.hover,
            cursor: 'pointer',
          },
          '&::before': {
            content: `"${args?.label}"`,
          },
        }),
        __CHILD: IconLibrary(args?.name === args?.sortField ? 'NotSort' : args?.sortDirection === 'asc' ? 'AzSort' : 'ZaSort', 'MenuSize'),
      },
    ],
  }
}
