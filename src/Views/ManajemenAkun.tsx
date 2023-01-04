import { CreateElements, IButton, ITableCell } from 'Components/CreateElements'
import { useEffect, useState } from 'react'
import { TitleTemplate } from 'Template/TitleTemplate'
import { TableTemplate } from 'Template/TableTemplate'
import { PaginationTemplate } from 'Template/PaginationTemplate'
import { css } from 'Assets/style'
import { CStatus } from 'Common/Chip'
import { ILevelJabatan, IManajemenAkun } from 'Common/Types'
import { convertToLabel, removeUnderscores } from 'Utilities/__General'
import { ManajemenAkunFormDialog } from 'Dialog/ManajemenAkunFormDialog'
import { ButtonCollection } from 'Collections/ButtonCollection'
import { OLevelJabatan } from 'Common/Options'
import { useManajemenAkun } from 'Services/Api'

export const ManajemenAkunPage = () => {
  const [{ params, data, selected }, setState] = useState<{
    params: {
      id: string | undefined
      search: string | undefined
      filter: ILevelJabatan | undefined
      status: 1 | 0 | boolean | undefined
      limit: number | undefined
      page: number | undefined
      sortDirection: 'asc' | 'desc'
      sortField: string | undefined
      unit: any
    }
    data: IManajemenAkun[] | null
    selected: IManajemenAkun | null
  }>({
    params: {
      id: undefined,
      search: undefined,
      filter: undefined,
      status: undefined,
      limit: undefined,
      page: undefined,
      sortDirection: 'asc',
      sortField: undefined,
      unit: undefined,
    },
    data: null,
    selected: null,
  })
  const { filter, id, limit, page, search, status, unit } = params
  const { currentData, isLoading } = useManajemenAkun.get({ id, search, filter, limit, page, status, unit })

  useEffect(() => {
    setState((v) => ({ ...v, params: { ...v.params }, data: currentData?.data?.data }))
  }, [params, isLoading, currentData])

  const {
    CrudAction,
    TableSchema,
  }: {
    CrudAction: () => IButton[]
    TableSchema: () => Array<'no' | 'nama' | 'username' | 'email' | 'levelJabatan' | 'unit' | 'status'>
  } = {
    CrudAction: () => [
      { ...ButtonCollection.ADD({ whichDialog: <ManajemenAkunFormDialog /> }) },
      { ...ButtonCollection.UPDATE({ whichDialog: <ManajemenAkunFormDialog /> }) },
      { ...ButtonCollection.DELETE({ whichDialog: <ManajemenAkunFormDialog /> }) },
    ],
    TableSchema: () => ['no', 'nama', 'username', 'email', 'levelJabatan', 'unit', 'status'],
  }

  return (
    <CreateElements
      Ingredient={[
        {
          DIRECTION: 'row',
          styleForParentBox: () => ({ justifyContent: 'space-between', flexWrap: 'wrap' }),
          Paper: [
            {
              ...TitleTemplate({
                label: 'Manajemen Akun',
                icon: 'Users',
                withSearchInput: true,
                setSearch: (value) => setState((v) => ({ ...v, params: { ...v.params, search: value } })),
              }),
            },
            { DIRECTION: 'row', style: (theme) => ({ ...css.CRUD_ACTION(theme) }), Button: CrudAction() },
            {
              DIRECTION: 'row',
              style: (theme) => ({ ...css.FILTER_ACTION_LEFT(theme) }),
              Autocomplete: [
                {
                  style: () => ({ margin: '0.5rem' }),
                  option: ['ACTIVE', 'TIDAK AKTIVE'],
                  label: 'Status',
                  icon: 'Status',
                  props: {
                    onChange: (e, o) => {
                      setState((v) => ({ ...v, params: { ...v.params, status: o === null ? undefined : o === 'ACTIVE' ? 1 : 0 } }))
                    },
                    fullWidth: true,
                  },
                },
              ],
            },
            {
              DIRECTION: 'row',
              style: (theme) => ({ ...css.FILTER_ACTION_RIGHT(theme) }),
              Autocomplete: [
                {
                  style: () => ({ margin: '0.5rem', marginTop: '1rem' }),
                  option: OLevelJabatan,
                  label: 'Level Jabatan',
                  icon: 'GuardOutlined',
                  props: {
                    getOptionLabel: (o) => removeUnderscores(o),
                    onChange: (e, o) => setState((v) => ({ ...v, params: { ...v.params, filter: o === null ? undefined : o } })),
                    fullWidth: true,
                  },
                },
                {
                  style: () => ({ margin: '0.5rem', marginTop: '1rem' }),
                  option: ['UNIT_A', 'UNIT_B', 'UNIT_C', 'UNIT_D'],
                  label: 'Unit',
                  icon: 'Unit',
                  props: {
                    getOptionLabel: (o) => removeUnderscores(o),
                    onChange: (e, o) => setState((v) => ({ ...v, params: { ...v.params, filter: o === null ? undefined : o } })),
                    fullWidth: true,
                  },
                },
              ],
            },
          ],
          TableContainer: [
            {
              ...TableTemplate({
                isLoading,
                data,
                TableHeadRow: [
                  {
                    TableCell: TableSchema().map((row) => ({
                      label: convertToLabel(row),
                    })),
                  },
                ],
                TableBodyRow: data?.map((row, key) => ({
                  isActive: row === selected,
                  setSelected: () => {
                    setState((v) => ({ ...v, selected: row }))
                  },
                  TableCell: TableSchema().map(
                    (r) =>
                      ({
                        label: r === 'no' ? key + 1 : r === 'status' ? CStatus(row['status']) : row[r] || '-',
                      } as ITableCell)
                  ),
                })),
              }),
            },
          ],
          Box: [{ ...PaginationTemplate() }],
        },
      ]}
    />
  )
}

export default ManajemenAkunPage
