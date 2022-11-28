import { CircularProgress } from '@mui/material'
import { Suspense } from 'react'

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  )

export default Loadable
