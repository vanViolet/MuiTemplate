import { CreateElements, IButton, IIngredient } from 'Components/CreateElements'
import { FunctionComponent, useState } from 'react'
import { DummyData, IDummyData } from '__DummyData'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'Contexts/_store'
import { TitleTemplate } from 'Template/TitleTemplate'
import { TableTemplate } from 'Template/TableTemplate'
import { SortTableTemplate } from 'Template/SortTableTemplate'
import { PaginationTemplate } from 'Template/PaginationTemplate'
import { ButtonCollection } from 'Utilities/ButtonCollection'
import { css } from 'Assets/style'
import { ManajemenAkunFormDialog } from 'Dialog/ManajemenAkunFormDialog'
import { commonCss } from 'Assets/commonCss'
import { convertToLabel } from 'Utilities/General'

export const ManajemenAkunPage = () => {
  const tools = {
    dispatch: useDispatch() as AppDispatch,
  }

  const [state, setState] = useState({
    params: {
      query: undefined as string | undefined,
      sortDirection: 'asc' as 'asc' | 'desc',
      sortField: undefined as string | undefined,
    },
    data: DummyData as IDummyData[] | null,
    selected: null as IDummyData | null,
    isLoading: false as boolean,
  })

  const CrudAction: IButton[] = [{ ...ButtonCollection.ADD({ whichDialog: <ManajemenAkunFormDialog />, disabled: !state.selected }) }]

  const OBJECT_DATA = [{ key: 'no' }, { key: 'nama' }, { key: 'username' }, { key: 'email' }, { key: 'levelJabatan' }]

  function Ingredient(): IIngredient[] {
    return [
      {
        styleForParentBox: () => ({ alignItems: 'flex-end' }),
        Paper: [
          ...TitleTemplate({ label: 'Manajemen Akun', icon: 'Users', withSearchInput: true }),
          { DIRECTION: 'row', style: (theme) => ({ ...css.CRUD_ACTION(theme) }), Button: CrudAction },
        ],
        TableContainer: [
          ...TableTemplate({
            data: state.data,
            isLoading: state.isLoading,
            TableHeadRow: [
              {
                TableCell: OBJECT_DATA.map((row) => ({
                  ...SortTableTemplate({
                    disabledSortable: row.key === 'no',
                    name: row.key,
                    label: convertToLabel(row.key),
                    sortDirection: state.params.sortDirection,
                    sortField: state.params.sortField,
                    onClick: () =>
                      setState((v) => ({
                        ...v,
                        params: {
                          ...state.params,
                          sortDirection: state.params.sortDirection === 'asc' ? 'desc' : 'asc',
                          sortField: row.key,
                        },
                      })),
                  }),
                })),
              },
            ],
            TableBodyRow: state.data?.map((row, key) => ({
              isActive: row === state.selected,
              setSelected: () => {
                setState((v) => ({ ...v, selected: row as IDummyData }))
              },
              TableCell: [
                {
                  label: key + 1,
                },
                { label: row.nama },
                {
                  label: row.username,
                  style: () => ({
                    ...commonCss.DONT_TOUCH_THE_LETTERS(),
                  }),
                },
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

export default ManajemenAkunPage as FunctionComponent
