import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IManajemenAkunParams } from 'Common/Types'
import { RootState } from 'Contexts/_store'

export const GlobalAPI = createApi({
  reducerPath: 'GlobalAPI',
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.auth?.Authorization
      headers.set('Authorization', `Bearer ${token}`)
    },
  }),
  endpoints: (builder) => ({
    ManajemenAkunGet: builder.query({
      query: ({ filter, id, limit, page, search, status, unit }: IManajemenAkunParams) => {
        return {
          url: 'api/manajemen-akun',
          params: { filter, id, limit, page, search, status, unit } as IManajemenAkunParams,
          method: 'GET',
        }
      },
    }),
  }),
})

const { ManajemenAkunGet } = GlobalAPI.endpoints

export const { useManajemenAkun } = {
  useManajemenAkun: {
    get: ({ filter, id, limit, page, search, status, unit }: IManajemenAkunParams) =>
      ManajemenAkunGet.useQuery({ filter, id, limit, page, search, status, unit }),
  },
}
