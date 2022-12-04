import { CreateElements, IButton, IIngredient, IMenuItem } from 'Components/CreateElements'
import { FunctionComponent, useState } from 'react'
import { DummyData, IDummyData } from '__DummyData'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'Contexts/_store'
import { TitleTemplate } from 'Template/TitleTemplate'
import { TableTemplate } from 'Template/TableTemplate'
import { SortTableTemplate } from 'Template/SortTableTemplate'
import { PaginationTemplate } from 'Template/PaginationTemplate'
import { ButtonCollection } from 'Collections/ButtonCollection'
import { css } from 'Assets/style'
import { ManajemenAkunFormDialog } from 'Dialog/ManajemenAkunFormDialog'
import { commonCss } from 'Assets/commonCss'
import { convertToLabel } from 'Utilities/__General'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { useElementSize } from 'Utilities/_UseResizeObserver'
import { MobileCrudTemplate } from 'Template/MobileCrudTemplate'
import { SpeedDial, SpeedDialAction } from '@mui/material'

export const ManajemenAkunPage = () => {
  const { dispatch, resizeListener } = {
    dispatch: useDispatch() as AppDispatch,
    resizeListener: useElementSize(),
  }

  const [state, setState] = useState({
    anchor: null as HTMLElement | null | undefined,
    params: {
      query: undefined as string | undefined,
      sortDirection: 'asc' as 'asc' | 'desc',
      sortField: undefined as string | undefined,
    },
    data: DummyData as IDummyData[] | null,
    selected: null as IDummyData | null,
    isLoading: false as boolean,
  })

  const CrudAction: IButton[] = [
    { ...ButtonCollection.ADD({ doNotAppearWhen: true, whichDialog: <ManajemenAkunFormDialog />, disabled: !state.selected }) },
    { ...ButtonCollection.ADD({ doNotAppearWhen: false, whichDialog: <ManajemenAkunFormDialog />, disabled: !state.selected }) },
  ]

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
            setSearch: (value) => setState((v) => ({ ...v, params: { ...state.params, query: value } })),
          }),
          {
            DIRECTION: 'row',
            style: (theme) => ({ ...css.FILTER_ACTION(theme) }),
            TextField: [
              {
                ...TextFieldTemplate({
                  name: 'asd',
                  label: 'Filter',
                  props: { size: 'small' },
                  style: { marginLeft: '1rem', marginTop: '1rem' },
                  icon: 'Filter',
                }),
              },
            ],
          },
          {
            DIRECTION: 'row',
            style: (theme) => ({ ...css.CRUD_ACTION(theme) }),
            Button:
              resizeListener.width <= 550
                ? [
                    {
                      __CHILD: 'Options',
                      props: {
                        variant: 'contained',
                        color: 'success',
                        onClick: (e) => setState((v) => ({ ...v, params: { ...state.params }, anchor: e.currentTarget, isLoading: true })),
                      },
                    },
                  ]
                : CrudAction,
            props: { ref: resizeListener.ref },
          },
          ...MobileCrudTemplate({
            anchorEl: state.anchor,
            onClose: () => setState((v) => ({ ...v, anchor: null })),
            MenuItems: CrudAction.map((row) => {
              if (Object.keys(row).length < 1) {
                return undefined
              }
              return { label: row.__CHILD, rightIcon: row.props?.startIcon, props: { onClick: () => row.props?.onClick?.(true as any) } }
            }) as IMenuItem[] | undefined,
          }),
        ],
        TableContainer: [
          ...TableTemplate({
            isLoading: state.isLoading,
            data: state.data,
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

  return (
    <>
      <CreateElements Ingredient={Ingredient()} />
      <SpeedDial ariaLabel="" sx={{ position: 'absolute', bottom: 50, right: 50 }} icon={'TESTING'}>
        <SpeedDialAction
          onClick={() => setState((v) => ({ ...v, isLoading: !state.isLoading }))}
          icon={'Loading'}
          tooltipTitle={'Loading'}
          title="Is Loading"
        />
        <SpeedDialAction
          onClick={() => setState((v) => ({ ...v, data: state.data?.length ? [] : DummyData }))}
          icon={'EmptyData'}
          tooltipTitle={'Loading'}
          title="Is Loading"
        />
      </SpeedDial>
    </>
  )
}

export default ManajemenAkunPage as FunctionComponent
