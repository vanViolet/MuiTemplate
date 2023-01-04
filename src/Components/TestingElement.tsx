import { Button, ButtonProps } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const TestingElement = ({
  Array,
  Ingredient,
}: {
  Array: JSX.Element[] | undefined
  Ingredient?: [{ Button?: { label?: string; props?: ButtonProps } }]
}) => {
  Array?.push(mButton({ props: { variant: 'contained' } }))
  console.log(Ingredient)
  return (
    <Box>
      {Array?.map((row, key) => (
        <Box key={key}>{row}</Box>
      ))}
    </Box>
  )
}

export function mButton(args?: { props: ButtonProps }) {
  return <Button {...args?.props}>Hello</Button>
}
