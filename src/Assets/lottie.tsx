import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player'
import { Box, BoxProps, SxProps, Theme } from '@mui/material'
import wave from 'Assets/Lotties/wave.json'
import React from 'react'

export const lottie = {
  WAVE: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player id="wave" autoplay loop src={wave} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
      </Box>
    )
  },
}
