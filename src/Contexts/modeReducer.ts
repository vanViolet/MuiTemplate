// Define a type for the slice state

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  Theme: 'dark' | 'light'
  FontFamily: string
}

export const darkModeControl = () => {
  if (localStorage.getItem('THEME') === 'dark') return 'dark'
  else return 'light'
}

const initialState: IInitialState = {
  Theme: darkModeControl(),
  FontFamily:
    "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
}

export const modeReducer = createSlice({
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

    setFontFamily: (state, action: PayloadAction<string>) => {
      state.FontFamily = action.payload
    },
  },
})

export const { setTheme, toLight, toDark, setFontFamily } = modeReducer.actions

export default modeReducer.reducer
