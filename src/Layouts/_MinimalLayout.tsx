import { Backdrop, CircularProgress } from '@mui/material'
import { useAppSelector } from 'Contexts/_store'
import { Outlet } from 'react-router-dom'

export const MinimalLayout = () => {
  const loadingOverlay = useAppSelector((state) => state.custom.loadingOverlay)
  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingOverlay}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Outlet />
    </>
  )
}
