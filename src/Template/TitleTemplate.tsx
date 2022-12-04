import { CSSObject } from '@emotion/react'
import { InputAdornment } from '@mui/material'
import { css } from 'Assets/style'
import { IPaper } from 'Components/CreateElements'
import { borderRadius } from 'config'
import React, { useState } from 'react'
import { IconCollection, IIconCollection } from 'Collections/IconCollection'
import { MobileView } from 'Utilities/MediaQuery'
import { useSearchParams } from 'react-router-dom'
import { setUrlQuery } from 'Utilities/__General'

export function TitleTemplate(args?: {
  label?: React.ReactNode | undefined
  icon?: IIconCollection
  withSearchInput?: boolean | undefined
  setSearch?: (value: string) => void
}) {
  const [value, setValue] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()
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
          __CHILD: IconCollection(args?.icon ? (args.icon as IIconCollection) : 'Hamburger', 'HeroSize'),
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
                  startAdornment: <InputAdornment position="start">{IconCollection('Search', 'ButtonSize')}</InputAdornment>,
                  sx: (theme) => ({
                    backgroundColor: theme.palette.mode === 'dark' ? '' : 'white',
                    borderRadius: borderRadius.md,
                  }),
                  onChange: (e) => setValue(e.target.value),

                  onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                      args?.setSearch?.(value)
                      setSearchParams(setUrlQuery('search', value ? value : null))
                    }
                  },
                },
              },
            },
          ],
    },
  ] as IPaper[]
}
