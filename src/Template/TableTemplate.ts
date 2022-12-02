import { ITableCell, ITableContainer, ITableRow } from 'Components/CreateElements'
import { ColorCollection } from 'Utilities/ColorCollection'
import { LottieCollection } from 'Utilities/LottieCollection'

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
}): ITableContainer[] => {
  return [
    {
      style: () => ({
        maxHeight: 'calc(100vh - 280px)',
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
            : !args?.data
            ? [
                {
                  TableRow: [
                    {
                      TableCell: [
                        {
                          props: { colSpan: 99 },
                          label: LottieCollection.EMPTY_CAT({
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
                  TableRow: args?.TableBodyRow?.map((row, key) => ({
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
    },
  ]
}
