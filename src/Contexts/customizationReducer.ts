import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './_store'

export interface CounterState {
  sidebarToggle: boolean
  loadingOverlay: boolean
  openStack: any
  modalIsOpen: boolean
}

const initialState: CounterState = {
  sidebarToggle: true,
  loadingOverlay: false,
  openStack: [],
  modalIsOpen: false,
}

export const customReducer = createSlice({
  name: 'custom',

  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle
    },
    sidebarToggleToFalse: (state) => {
      state.sidebarToggle = false
    },
    sidebarToggleToTrue: (state) => {
      state.sidebarToggle = true
    },

    loadingOverlay: (state, action: PayloadAction<boolean>) => {
      state.loadingOverlay = action.payload
    },

    openStack: (state, action: PayloadAction<JSX.Element | JSX.Element[] | undefined>) => {
      state.openStack.push(action.payload)
    },
    closeStack: (state) => {
      state.openStack.pop()
    },
    modalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload
    },
  },
})

export const { sidebarToggle, sidebarToggleToFalse, sidebarToggleToTrue, loadingOverlay, openStack, closeStack, modalIsOpen } =
  customReducer.actions

export const selectCount = (state: RootState) => state.custom.sidebarToggle

export default customReducer.reducer
