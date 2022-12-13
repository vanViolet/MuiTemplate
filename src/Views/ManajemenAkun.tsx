import { CreateElements, IButton, IIngredient } from 'Components/CreateElements'
import { FunctionComponent, useEffect, useState } from 'react'
import { DummyData, IDummyData } from '__DummyData'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'Contexts/_store'
import { TitleTemplate } from 'Template/TitleTemplate'
import { TableTemplate } from 'Template/TableTemplate'
import { SortTableTemplate } from 'Template/SortTableTemplate'
import { PaginationTemplate } from 'Template/PaginationTemplate'
import { css } from 'Assets/style'
import { commonCss } from 'Assets/commonCss'
import { convertToLabel } from 'Utilities/__General'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import { ButtonCollection } from 'Collections/ButtonCollection'
import { ManajemenAkunFormDialog } from 'Dialog/ManajemenAkunFormDialog'

export const ManajemenAkunPage = () => {
  const {
    dispatch,
    // resizeListener: { ref, width },
  } = {
    dispatch: useDispatch() as AppDispatch,
    // resizeListener: useElementSize(),
  }
  const [{ params, data, selected, isLoading }, setState] = useState<{
    params: {
      query: string | undefined
      sortDirection: 'asc' | 'desc'
      sortField: string | undefined
    }
    data: IDummyData[] | null
    selected: IDummyData | null
    isLoading: boolean
  }>({
    params: {
      query: undefined,
      sortDirection: 'asc',
      sortField: undefined,
    },
    data: DummyData,
    selected: null,
    isLoading: false,
  })

  useEffect(() => {
    setState((v) => ({ ...v, params: { ...params }, data, isLoading, selected }))
  })

  const OBJECT_DATA = [{ key: 'no' }, { key: 'nama' }, { key: 'username' }, { key: 'email' }, { key: 'levelJabatan' }]

  function Ingredient(): IIngredient[] {
    return [
      {
        DIRECTION: 'row',
        styleForParentBox: () => ({ justifyContent: 'space-between', flexWrap: 'wrap' }),
        Paper: [
          ...TitleTemplate({
            label: 'Manajemen Akun',
            icon: 'Users',
            withSearchInput: true,
            setSearch: (value) => setState((v) => ({ ...v, params: { ...params, query: value } })),
          }),
          {
            DIRECTION: 'row',
            style: (theme) => ({ ...css.FILTER_ACTION(theme) }),
            TextField: [
              {
                ...TextFieldTemplate({
                  name: 'asd',
                  label: 'Filter',
                  props: { size: 'small', fullWidth: true },
                  style: { marginLeft: '1rem', marginTop: '1rem' },
                  icon: 'Filter',
                }),
              },
            ],
          },
          {
            style: (theme) => ({ ...css.CRUD_ACTION(theme) }),
            Button: [
              isLoading
                ? undefined
                : {
                    ...ButtonCollection.CUSTOM({ color: 'success', icon: 'Plus', label: 'ADD', whichDialog: <ManajemenAkunFormDialog /> }),
                  },
            ] as IButton[],
          },
        ],
        TableContainer: [
          {
            ...TableTemplate({
              isLoading,
              data,
              TableHeadRow: [
                {
                  TableCell: OBJECT_DATA.map((row) => ({
                    ...SortTableTemplate({
                      disabledSortable: row.key === 'no',
                      name: row.key,
                      label: convertToLabel(row.key),
                      sortDirection: params.sortDirection,
                      sortField: params.sortField,
                      onClick: () =>
                        setState((v) => ({
                          ...v,
                          params: {
                            ...params,
                            sortDirection: params.sortDirection === 'asc' ? 'desc' : 'asc',
                            sortField: row.key,
                          },
                        })),
                    }),
                  })),
                },
              ],
              TableBodyRow: data?.map((row, key) => ({
                isActive: row === selected,
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
          },
        ],
        Box: [{ ...PaginationTemplate() }],
      },
    ]
  }

  return (
    <>
      <CreateElements Ingredient={Ingredient()} />
      <SpeedDial ariaLabel="" sx={{ position: 'absolute', bottom: 50, right: 50 }} icon={'TESTING'}>
        <SpeedDialAction
          onClick={() => setState((v) => ({ ...v, isLoading: !isLoading }))}
          icon={'Loading'}
          tooltipTitle={'Loading'}
          title="Is Loading"
        />
        <SpeedDialAction
          onClick={() => setState((v) => ({ ...v, data: data?.length ? [] : DummyData }))}
          icon={'EmptyData'}
          tooltipTitle={'Loading'}
          title="Is Loading"
        />
      </SpeedDial>
    </>
  )
}

export default ManajemenAkunPage as FunctionComponent
