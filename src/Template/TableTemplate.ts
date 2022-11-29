import { ITableCell, ITableContainer, ITableRow } from 'Components/CreateElements'
import { ColorCollection } from 'Utilities/Color'
import { LottieLibrary } from 'Utilities/Lottie'

interface ITableBodyRow {
  TableCell?: ITableCell[]
  isActive?: boolean
  setSelected?: () => void
}
export const TableTemplate = <T>(args?: {
  isLoading?: boolean | undefined
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
          },
          TableHead: [
            {
              TableRow: args?.TableHeadRow,
            },
          ],
          TableBody: args?.isLoading
            ? [
                {
                  TableRow: [
                    {
                      TableCell: [
                        {
                          props: { colSpan: 99 },
                          label: LottieLibrary.LOADING_SQUARE({
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
                          label: LottieLibrary.EMPTY_CAT({
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
