export type ILevelJabatan = 'SUPER_ADMIN' | 'MANAGER_MARKETING' | 'ADMIN' | 'SALES' | 'TELEMARKETING' | 'NON_TELEMARKETING'

export interface IManajemenAkun {
  id: string
  nama: string
  email: string
  username: string
  levelJabatan: ILevelJabatan
  unit: string | null
  status: boolean
  created_at: Date
  updated_at: Date
}

export interface IManajemenAkunParams {
  id?: string | undefined
  search?: string | undefined
  filter?: ILevelJabatan | undefined
  unit?: any
  status?: boolean | undefined | 1 | 0
  limit?: number | undefined
  page?: number | undefined
}

export interface IManajemenAkunCreate {
  nama: string
  email: string
  username: string
  levelJabatan: ILevelJabatan
  unit: string | null
}

export interface IManajemenAkunUpdate extends IManajemenAkunCreate {
  id: string
  status: boolean | 1 | 0
}
