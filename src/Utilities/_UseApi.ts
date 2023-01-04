import { Theme } from '@mui/material'
import axios, { AxiosRequestConfig } from 'axios'
import Swal from 'sweetalert2'

export async function errorMessageSwal(args?: { error: any; theme: Theme }) {
  Swal.fire({
    title: args?.error,

    icon: 'warning',
    background: args?.theme.palette.mode === 'dark' ? '#27272a' : 'white',
    color: args?.theme.palette.mode === 'dark' ? 'white' : 'rgba(0,0,0,0.7)',
  })
}

export async function successMessageSwal(args?: { title: string; theme: Theme }) {
  Swal.fire({
    title: args?.title,
    icon: 'success',
    background: args?.theme.palette.mode === 'dark' ? '#27272a' : 'white',
    color: args?.theme.palette.mode === 'dark' ? 'white' : 'rgba(0,0,0,0.7)',
  })
}

const API = axios.create({
  headers: {
    // authorization: `Bearer ${store.getState().auth.auth?.Authorization}`,
  },
})

const { manajemenAkun, auth } = {
  auth: {
    login: 'api/login',
  },
  manajemenAkun: {
    url: 'api/manajemen-akun',
  },
}

export const { GET, POST } = {
  GET: async <Params>(args: {
    setState: (
      value: React.SetStateAction<{
        params: Params
        data: any | null
        selected: any | null
        isLoading: boolean
      }>
    ) => void
    url: 'MANAJEMEN_AKUN'
    params?: any
    others?: AxiosRequestConfig
  }) => {
    function url(): string {
      if (args.url === 'MANAJEMEN_AKUN') return manajemenAkun.url
      else return ''
    }
    args.setState((v) => ({ ...v, selected: null, isLoading: true }))
    const resp = await API.get(url(), { params: args?.params, ...args?.others }).then((res) => res.data)
    args.setState((v) => ({ ...v, data: resp.data.data, isLoading: false }))
  },
  POST: <DATA>(args: { url: 'LOGIN' | 'MANAJEMEN_AKUN'; data: DATA; others?: AxiosRequestConfig }) => {
    function url(): string {
      if (args.url === 'LOGIN') return auth.login
      if (args.url === 'MANAJEMEN_AKUN') return manajemenAkun.url
      else return ''
    }

    return API.post(url(), args.data, { ...args.others })
  },
}

export default API
