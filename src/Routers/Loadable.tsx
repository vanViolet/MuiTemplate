import React, { Suspense, Fragment } from 'react'
import { FallbackSkeleton } from './FallbackSkeleton'

// project imports

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<FallbackSkeleton />}>
      <Fragment>
        <Component {...props} />
      </Fragment>
    </Suspense>
  )

export default Loadable
