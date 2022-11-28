import { Pagination } from '@mui/material'
import { IconLibrary } from 'Utilities/Icon'
import { LottieLibrary } from 'Utilities/Lottie'
import { CreateElements, IIngredient } from 'Components/Gluttony'
import { borderRadius, shadow } from 'config'
import { FunctionComponent, useState } from 'react'
import { MobileView } from 'Utilities/MediaQuery'
import { IDummyData } from '__DummyData'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'Contexts/_store'
import { TitleTemplate } from 'Template/TitleTemplate'
import { CrudActionTemplate } from 'Template/CrudActionTemplate'
import { ButtonCollection } from 'Template/ButtonCollection'
import { ColorCollection } from 'Utilities/Color'

export const ManajemenAkunPage = () => {
  const tools = {
    dispatch: useDispatch() as AppDispatch,
  }

  const [state, setState] = useState({
    data: null as IDummyData[] | null,
    selected: null as IDummyData | null,
    isLoading: false as boolean,

    params: {
      query: undefined as string | undefined,
      sortDirection: 'asc' as 'asc' | 'desc',
      sortField: undefined as string | undefined,
    },
  })

  function Ingredient(): IIngredient[] {
    return [
      {
        Paper: [
          ...TitleTemplate({ label: 'Manajemen Akun', icon: 'Users', withSearchInput: true }),
          ...CrudActionTemplate({
            Button: [ButtonCollection.ADD({}), ButtonCollection.UPDATE({}), ButtonCollection.DELETE({})],
          }),
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
                            style: { padding: 0 },
                            Box: [
                              {
                                style: () => ({
                                  height: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '1rem',
                                  justifyContent: 'space-between',
                                  '&:hover': {
                                    background: ColorCollection.bg.hover,
                                    cursor: 'pointer',
                                  },
                                }),
                                props: {
                                  onClick: () => {
                                    setState((v) => ({
                                      ...v,
                                      params: { ...state.params, sortDirection: state.params.sortDirection === 'asc' ? 'desc' : 'asc' },
                                    }))
                                    console.log(state.params.sortDirection)
                                  },
                                },
                                __CHILD: <>Nama {IconLibrary(state.params.sortDirection === 'asc' ? 'AzSort' : 'ZaSort', 'MenuSize')}</>,
                              },
                            ],
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
                TableBody: state.isLoading
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
                  : !state.data
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
                        TableRow: state.data?.map((row, key) => ({
                          style: () => ({
                            '&:last-child td, &:last-child th': { border: 0 },
                            backgroundColor: row === state.selected ? ColorCollection.bg.active : '',
                          }),
                          props: {
                            onClick: () => {
                              setState((v) => ({ ...v, selected: row }))
                            },
                          },
                          TableCell: [
                            {
                              label: key + 1,
                            },
                            {
                              label: row.nama,
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
              background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[2] : ColorCollection.bg.light[0],
              borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
              boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
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
      },
    ]
  }

  return <CreateElements Ingredient={Ingredient()} />
}

export default ManajemenAkunPage as FunctionComponent
