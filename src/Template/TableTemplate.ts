import { useSearchParams } from 'react-router-dom'
import { ITableCell, ITableContainer, ITableRow } from 'Components/CreateElements'
import { ColorCollection } from 'Collections/ColorCollection'
import { LottieCollection } from 'Collections/LottieCollection'

interface ITableBodyRow {
  TableCell?: ITableCell[]
  isActive?: boolean
  setSelected?: () => void
}
export const TableTemplate = <T>(args: {
  isLoading: boolean
  data?: T[] | null
  TableHeadRow?: ITableRow[]
  TableBodyRow?: ITableBodyRow[]
}): ITableContainer => {
  const [searchParams] = useSearchParams()
  return {
    style: () => ({
      maxHeight: 'calc(100vh - 290px)',
      borderRadius: 0,
    }),
    Table: [
      {
        props: {
          stickyHeader: true,
          size: 'medium',
          padding: 'normal',
        },
        TableHead: [
          {
            TableRow: args?.TableHeadRow,
          },
        ],
        TableBody: args.isLoading
          ? [
              {
                TableRow: [
                  {
                    TableCell: [
                      {
                        props: { colSpan: 99 },
                        label: LottieCollection.LOADING_SQUARE({
                          BoxStyle: () => ({
                            display: 'flex',
                            flexDirection: 'column',
                            WebkitJustifyContent: 'center',
                            alignItems: 'center',
                          }),
                          LottieStyle: { width: 100 },
                        }),
                      },
                    ],
                  },
                ],
              },
            ]
          : !args?.data?.length
          ? [
              {
                TableRow: [
                  {
                    TableCell: [
                      {
                        props: { colSpan: 99 },
                        label: searchParams.get('search')
                          ? LottieCollection.EMPTY_SEARCH({
                              BoxStyle: (theme) => ({
                                display: 'flex',
                                flexDirection: 'column',
                                WebkitJustifyContent: 'center',
                                alignItems: 'center',
                                filter: theme.palette.mode === 'dark' ? 'grayscale(100%)' : '',
                              }),
                              LottieStyle: { width: 200, marginTop: '-2.5rem' },
                              label: `Data dengan kata kunci " ${searchParams.get('search')} " tidak ditemukan `,
                            })
                          : LottieCollection.EMPTY_CAT({
                              BoxStyle: () => ({
                                display: 'flex',
                                flexDirection: 'column',
                                WebkitJustifyContent: 'center',
                                alignItems: 'center',
                              }),
                              LottieStyle: { width: 200, marginTop: '-2.5rem' },
                              label: 'Belum ada data . . .',
                            }),
                      },
                    ],
                  },
                ],
              },
            ]
          : [
              {
                TableRow: args?.TableBodyRow?.map((row) => ({
                  style: () => ({
                    '&:last-child td, &:last-child th': { border: 0 },
                    backgroundColor: row?.isActive ? ColorCollection.bg.active : '',
                    '&:hover': {
                      backgroundColor: !row?.isActive ? ColorCollection.bg.hoverWhite : '',
                    },
                  }),
                  props: {
                    onClick: () => {
                      row?.setSelected?.()
                    },
                  },

                  TableCell: row?.TableCell,
                })),
              },
            ],
      },
    ],
  }
}
