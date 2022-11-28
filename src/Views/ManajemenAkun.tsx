import { InputAdornment, Pagination } from '@mui/material'
import { IconLibrary } from 'Utilities/Icon'
import { LottieLibrary } from 'Utilities/Lottie'
import { Gluttony, IFoodForGluttony } from 'Components/Gluttony'
import { borderRadius } from 'config'
import { useAppDispatch } from 'Contexts/_store'
import { FunctionComponent, useState } from 'react'
import { MobileView } from 'Utilities/MediaQuery'
import { DummyData, IDummyData } from '__DummyData'
import { ColorLibrary } from 'Utilities/Color'

export const ManajemenAkunPage = () => {
  const dispatch = useAppDispatch()
  const [selected, setSelected] = useState<object | null>(null)
  const [data, setData] = useState<IDummyData[] | null>(DummyData)
  const [isLoading, setIsloading] = useState(false)

  function food(): IFoodForGluttony[] {
    return [
      {
        Paper: [
          {
            DIRECTION: 'row',
            style: (theme) => ({
              padding: '0.7rem',
              marginBottom: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              background: theme.palette.mode === 'dark' ? '' : ColorLibrary('header-light'),
              color: theme.palette.mode === 'dark' ? '' : 'white',
              boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 2px 5px rgba(0,0,0,0.3)',
              borderRadius: borderRadius.md,
              [MobileView()]: {
                justifyContent: 'center',
              },
            }),
            Box: [
              {
                style: () => ({
                  marginRight: '1rem',
                  marginTop: '0.25rem',
                }),
                __CHILD: IconLibrary('Users', 'HeroSize'),
              },
              {
                style: () => ({
                  fontWeight: 700,
                  flexGrow: 1,
                  [MobileView()]: {
                    flexGrow: 0,
                  },
                }),
                __CHILD: 'Manajemen Akun',
              },
            ],
            TextField: [
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
          {
            DIRECTION: 'row',
            style: (theme) => ({
              padding: '0.7rem',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
              background: theme.palette.mode === 'dark' ? '' : ColorLibrary('header-light'),
              borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0 `,
            }),
            Button: [
              {
                style: (theme) => ({
                  fontWeight: 700,
                  margin: '0 0.5rem',
                  boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 2px 5px rgba(0,0,0,0.5)',
                }),
                props: {
                  size: 'small',
                  color: 'success',
                  variant: 'contained',
                  startIcon: IconLibrary('Plus', 'ButtonSize'),
                },
                __CHILD: 'ADD',
              },
              {
                style: (theme) => ({
                  fontWeight: 700,
                  margin: '0 0.5rem',
                  boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 2px 5px rgba(0,0,0,0.5)',
                }),
                props: {
                  color: 'info',
                  variant: 'contained',
                  size: 'small',
                  startIcon: IconLibrary('Edit', 'ButtonSize'),
                },
                __CHILD: 'UPDATE',
              },
              {
                style: (theme) => ({
                  fontWeight: 700,
                  margin: '0 0.5rem',
                  boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 2px 5px rgba(0,0,0,0.5)',
                  color: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.87)' : '',
                }),
                props: {
                  color: 'error',
                  variant: 'contained',
                  size: 'small',
                  startIcon: IconLibrary('Trash', 'ButtonSize'),
                },
                __CHILD: 'Delete',
              },
            ],
          },
        ],
        TableContainer: [
          {
            style: () => ({
              maxHeight: 'calc(100vh - 270px)',
              borderRadius: 0,
            }),
            Table: [
              {
                props: {
                  stickyHeader: true,
                },
                TableHead: [
                  {
                    TableRow: [
                      {
                        TableCell: [
                          {
                            label: 'No',
                          },
                          {
                            label: 'Nama',
                            props: {
                              align: 'center',
                            },
                          },
                          {
                            label: 'Username',
                            props: {
                              align: 'center',
                            },
                          },
                          {
                            label: 'Email',
                            props: {
                              align: 'center',
                            },
                          },
                          {
                            label: 'Level Jabatan',
                            props: {
                              align: 'center',
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
                TableBody: !isLoading
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
                  : !data
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
                        TableRow: data?.map((row, key) => ({
                          style: () => ({
                            '&:last-child td, &:last-child th': { border: 0 },
                            backgroundColor: row === selected ? ColorLibrary('active-bg-light') : '',
                          }),
                          props: {
                            onClick: () => {
                              setSelected(row)
                            },
                          },
                          TableCell: [
                            {
                              label: key + 1,
                            },
                            {
                              label: row.nama,
                              props: {
                                align: 'center',
                              },
                            },
                            {
                              label: row.username,

                              props: {
                                align: 'center',
                              },
                            },
                            {
                              label: row.email,
                              props: {
                                align: 'center',
                              },
                            },
                            {
                              label: row.levelJabatan,
                              props: {
                                align: 'center',
                              },
                            },
                          ],
                        })),
                      },
                    ],
              },
            ],
          },
        ],
        Box: [
          {
            order: 3,
            DIRECTION: 'row',
            style: (theme) => ({
              position: 'relative',
              padding: '0.7rem',
              justifyContent: 'center',
              background: theme.palette.mode === 'dark' ? '#121212' : ColorLibrary('header-light'),
              borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
              boxShadow: theme.palette.mode === 'dark' ? '0 2px 5px rgba(0,0,0,1)' : '0 2px 5px rgba(0,0,0,0.5)',
            }),
            Box: [
              {
                __CHILD: (
                  <Pagination
                    sx={{
                      '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white', borderRadius: '0.8rem' },
                      '& .MuiPaginationItem-root[aria-current]': { backgroundColor: 'white', color: ColorLibrary('active-text-light') },

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
      },
    ]
  }

  return <Gluttony FoodForGluttony={food()} />
}

export default ManajemenAkunPage as FunctionComponent
