import { Suspense } from 'react'
import { FallbackSkeleton } from './FallbackSkeleton'

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<FallbackSkeleton />}>
      <Component {...props} />
    </Suspense>
  )

export default Loadable
