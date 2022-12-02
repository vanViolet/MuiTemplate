import { Box, Skeleton } from '@mui/material'
import { borderRadius } from 'config'
import { FunctionComponent } from 'react'
import { ColorCollection } from 'Utilities/ColorCollection'

export const DashboardPage = () => {
  return (
    <Box>
      <Skeleton
        width="100%"
        height="6rem"
        animation="pulse"
        sx={(theme) => ({
          borderRadius: borderRadius.md,
          margin: 0,
          padding: 0,
          marginTop: '-1rem',
          background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
        })}
      />
      <Box sx={{ display: 'flex', marginTop: '-7rem' }}>
        <Skeleton
          width="20%"
          height="30rem"
          animation="pulse"
          sx={(theme) => ({
            borderRadius: borderRadius.md,
            margin: 0,
            padding: 0,

            background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.active,
          })}
        />
        <Skeleton
          width="80%"
          height="30rem"
          animation="pulse"
          sx={(theme) => ({
            borderRadius: borderRadius.md,
            margin: 0,
            padding: 0,

            marginLeft: '1rem',

            background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.active,
          })}
        />
      </Box>
      <Box sx={{ display: 'flex', marginTop: '-7rem' }}>
        <Skeleton
          width="50%"
          height="10rem"
          animation="pulse"
          sx={(theme) => ({
            borderRadius: borderRadius.md,
            margin: 0,
            padding: 0,

            background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.active,
          })}
        />
        <Skeleton
          width="50%"
          height="10rem"
          animation="pulse"
          sx={(theme) => ({
            borderRadius: borderRadius.md,
            margin: 0,
            padding: 0,

            marginLeft: '1rem',

            background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.active,
          })}
        />
      </Box>
      <Skeleton
        width="100%"
        height="6rem"
        animation="pulse"
        sx={(theme) => ({
          borderRadius: borderRadius.md,
          margin: 0,
          padding: 0,
          marginTop: '-2.5rem',
          background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
        })}
      />
    </Box>
  )
}

export default DashboardPage as FunctionComponent
