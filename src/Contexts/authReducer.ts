import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILevelJabatan } from 'Common/Types'
import { parseJwt } from 'Utilities/__General'
// import { UserPayload } from 'Utilities/GeneratedApi'

// Define a type for the slice state

interface UserPayload {
  id: string
  nama: string
  email: string
  username: string
  levelJabatan: ILevelJabatan
  unit?: string | null | undefined
  status: 1 | 0 | boolean
  created_at: Date
  updated_at: Date
}
export interface IAuthReducer {
  Authorization: string
  user: UserPayload
}

interface IInitialState {
  auth: IAuthReducer | null
}

export const authControl = (): IAuthReducer | null => {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    const splitted = token.split(' ')[1]
    const decoded = parseJwt(splitted) as UserPayload
    return { Authorization: splitted, user: { ...decoded } }
  } catch (error) {
    return null
  }
}

const initialState: IInitialState = {
  auth: authControl(),
}

export const authReducer = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    getUser: (state, token: PayloadAction<string>) => {
      if (!token.payload) {
        state.auth = null
        console.log('asdf')
      }
      const splitted = token.payload.split(' ')[1]

      const decoded = parseJwt(splitted) as UserPayload
      state.auth = { Authorization: splitted, user: { ...decoded } }
    },
  },
})

export const { getUser } = authReducer.actions

export default authReducer.reducer
