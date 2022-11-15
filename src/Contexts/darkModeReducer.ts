// Define a type for the slice state

import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  Theme: 'dark' | 'light'
}

export const darkModeControl = () => {
  if (localStorage.getItem('THEME') === 'dark') return 'dark'
  else return 'light'
}

const initialState: IInitialState = {
  Theme: darkModeControl(),
}

export const darkModeReducer = createSlice({
  name: 'Theme',

  initialState,
  reducers: {
    setTheme: (state) => {
      state.Theme = state.Theme === 'dark' ? 'light' : 'dark'
    },

    toLight: (state) => {
      state.Theme = 'light'
    },

    toDark: (state) => {
      state.Theme = 'dark'
    },
  },
})

export const { setTheme, toLight } = darkModeReducer.actions

export default darkModeReducer.reducer
