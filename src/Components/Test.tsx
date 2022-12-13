import { Box, BoxProps, SxProps, TypographyProps } from '@mui/material'

interface ICreateElements {
  MyBox:
    | [
        | {
            props: BoxProps
            sx: SxProps
            label: string
          }
        | undefined
      ]
    | undefined

  MyText:
    | [
        | {
            props: TypographyProps
            sx: SxProps
            label: string
          }
        | undefined
      ]
    | undefined
}

export const CreateElements = ({ MyBox, MyText }: ICreateElements) => {
  return (
    <Box>
      {MyBox &&
        MyBox.map(
          (row, key) =>
            typeof row !== 'undefined' && (
              <Box key={key} {...row.props}>
                {row.label}
              </Box>
            )
        )}

      {MyText &&
        MyText.map(
          (row, key) =>
            typeof row !== 'undefined' && (
              <Box key={key} {...row.props}>
                {row.label}
              </Box>
            )
        )}
    </Box>
  )
}

export const MyComponent = () => {
  return (
    <CreateElements
      MyBox={[
        {
          label: 'van',
          props: { margin: 10 },
          sx: { padding: 10 },
        },
      ]}
      MyText={[
        {
          label: 'violet',
          props: { margin: 10 },
          sx: { padding: 10 },
        },
      ]}
    />
  )
}
