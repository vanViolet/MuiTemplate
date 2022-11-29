import { CSSObject } from '@emotion/react'
import { InputAdornment } from '@mui/material'
import { css } from 'Assets/style'
import { IPaper } from 'Components/CreateElements'
import { borderRadius } from 'config'
import React from 'react'
import { IconLibrary, IIconLibrary } from 'Utilities/Icon'
import { MobileView } from 'Utilities/MediaQuery'

export function TitleTemplate(args?: { label?: React.ReactNode | undefined; icon?: IIconLibrary; withSearchInput?: boolean | undefined }) {
  return [
    {
      DIRECTION: 'row',
      style: (theme) => ({
        ...(css.TITLE_TEMPLATE(theme) as CSSObject),
      }),
      Box: [
        {
          style: () => ({
            marginRight: '1rem',
            marginTop: '0.25rem',
          }),
          __CHILD: IconLibrary(args?.icon ? (args.icon as IIconLibrary) : 'Hamburger', 'HeroSize'),
        },
        {
          style: () => ({
            fontWeight: 700,
            marginRight: '1rem',
            flexGrow: 1,
            [MobileView()]: {
              flexGrow: 0,
            },
          }),
          __CHILD: args?.label,
        },
      ],
      TextField: !args?.withSearchInput
        ? undefined
        : [
            {
              style: () => ({
                fontWeight: 700,
              }),

              props: {
                size: 'small',
                placeholder: 'Search',
                InputProps: {
                  startAdornment: <InputAdornment position="start">{IconLibrary('Search', 'ButtonSize')}</InputAdornment>,
                  sx: (theme) => ({
                    backgroundColor: theme.palette.mode === 'dark' ? '' : 'white',
                    borderRadius: borderRadius.md,
                  }),
                },
              },
            },
          ],
    },
  ] as IPaper[]
}
