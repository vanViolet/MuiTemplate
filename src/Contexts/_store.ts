import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { GlobalAPI } from 'Services/Api'
import { authReducer } from './authReducer'
import { customReducer } from './customizationReducer'
import { modeReducer } from './modeReducer'

export interface IDispatch {
  type: string
}

export const store = configureStore({
  reducer: {
    custom: customReducer.reducer,
    auth: authReducer.reducer,
    mode: modeReducer.reducer,
    [GlobalAPI.reducerPath]: GlobalAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(GlobalAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
