import { CreateElements, IButton, IIngredient, ITableCell } from 'Components/CreateElements'
import { FunctionComponent, useState } from 'react'
import { DummyData, IDummyData } from '__DummyData'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'Contexts/_store'
import { TitleTemplate } from 'Template/TitleTemplate'
import { CrudActionTemplate } from 'Template/CrudActionTemplate'
import { ButtonCollection } from 'Template/ButtonCollection'
import { TableTemplate } from 'Template/TableTemplate'
import { SortTableTemplate } from 'Template/SortTableTemplate'
import { PaginationTemplate } from 'Template/PaginationTemplate'

export const DashboardPage = () => {
  const tools = {
    dispatch: useDispatch() as AppDispatch,
  }

  const [state, setState] = useState({
    data: DummyData as IDummyData[] | null,
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
            Button: [
              ButtonCollection.ADD({ Authorization: true, props: { onClick: () => console.log('Hello') } }) as IButton,
              ButtonCollection.UPDATE({}),
              ButtonCollection.DELETE({}),
            ],
          }),
        ],

        TableContainer: [
          ...TableTemplate({
            data: state.data,
            isLoading: state.isLoading,
            TableHeadRow: [
              {
                TableCell: [
                  { label: 'No' },
                  SortTableTemplate({
                    name: 'nama',
                    label: 'Nama',
                    sortDirection: state.params.sortDirection,
                    sortField: undefined,
                    onClick: () =>
                      setState((v) => ({
                        ...v,
                        params: { ...state.params, sortDirection: state.params.sortDirection === 'asc' ? 'desc' : 'asc' },
                      })),
                  }) as ITableCell,
                  { label: 'Username' },
                  { label: 'Email' },
                  { label: 'LevelJabatan', props: { align: 'center' } },
                ],
              },
            ],
            TableBodyRow: state.data?.map((row, key) => ({
              isActive: row === state.selected,
              setSelected: () => {
                setState((v) => ({ ...v, selected: row as IDummyData }))
              },
              TableCell: [
                { label: key + 1 },
                { label: row.nama },
                { label: row.username },
                { label: row.email },
                { label: row.levelJabatan, props: { align: 'center' } },
              ],
            })),
          }),
        ],

        ...PaginationTemplate(),
      },
    ]
  }

  return <CreateElements Ingredient={Ingredient()} />
}

export default DashboardPage as FunctionComponent
