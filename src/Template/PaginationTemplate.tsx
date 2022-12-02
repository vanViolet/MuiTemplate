import { Pagination } from '@mui/material'
import { IIngredient } from 'Components/CreateElements'
import { borderRadius, shadow } from 'config'
import { ColorCollection } from 'Utilities/ColorCollection'
import { MobileView } from 'Utilities/MediaQuery'

export const PaginationTemplate = (): IIngredient => {
  return {
    Box: [
      {
        order: 3,
        DIRECTION: 'row',
        style: (theme) => ({
          position: 'relative',
          padding: '0.7rem',
          justifyContent: 'center',
          background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[2] : ColorCollection.bg.light[0],
          borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
          boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
          width: '100%',
        }),
        Box: [
          {
            __CHILD: (
              <Pagination
                sx={{
                  '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white', borderRadius: '0.8rem' },
                  '& .MuiPaginationItem-root[aria-current]': { backgroundColor: 'white', color: ColorCollection.text.active },

                  '& li:first-of-type': {
                    position: 'absolute',
                    left: 10,
                    [MobileView()]: {
                      display: 'none',
                    },
                  },
                  '& li:last-child': {
                    position: 'absolute',
                    right: 10,
                    [MobileView()]: {
                      display: 'none',
                    },
                  },
                }}
                count={100}
                variant="outlined"
                shape="rounded"
              />
            ),
          },
        ],
      },
    ],
  }
}
