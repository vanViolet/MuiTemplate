import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player'
import { Box, BoxProps, SxProps, Theme } from '@mui/material'
import wave from 'Assets/Lotties/wave.json'
import catEmpty from 'Assets/Lotties/cat-empty.json'
import searchEmpty from 'Assets/Lotties/empty2.json'
import loadingPaperPlane from 'Assets/Lotties/loading-plane.json'
import loadingAwesome from 'Assets/Lotties/loading-awesome.json'
import orbit from 'Assets/Lotties/orbit.json'
import crm from 'Assets/Lotties/crm.json'
import React from 'react'

export const LottieCollection = {
  WAVE: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={wave} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
      </Box>
    )
  },
  ORBIT: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={orbit} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
      </Box>
    )
  },
  EMPTY_CAT: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
    label?: React.ReactNode | undefined
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={catEmpty} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
        <Box sx={{ width: 'fit-content', marginTop: '-2rem' }}>{args?.label}</Box>
      </Box>
    )
  },

  EMPTY_SEARCH: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
    label?: React.ReactNode | undefined
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={searchEmpty} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
        <Box sx={{ width: 'fit-content', marginTop: '-2rem' }}>{args?.label}</Box>
      </Box>
    )
  },

  LOADING_PAPERPLANE: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
    label?: React.ReactNode | undefined
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={loadingPaperPlane} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
        <Box sx={{ width: 'fit-content', marginTop: '-2rem' }}>{args?.label}</Box>
      </Box>
    )
  },

  LOADING_SQUARE: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
    label?: React.ReactNode | undefined
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={loadingAwesome} style={args?.LottieStyle} speed={2} {...args?.LottieProps}></Player>
        {/* <Box sx={{ width: 'fit-content', marginTop: '-2rem' }}>{args?.label}</Box> */}
      </Box>
    )
  },

  CUSTOMER_CRM: (args?: {
    BoxStyle?: SxProps<Theme> | undefined
    BoxProps?: BoxProps
    LottieStyle?: React.CSSProperties
    LottieProps?: IPlayerProps
    label?: React.ReactNode | undefined
  }) => {
    return (
      <Box sx={args?.BoxStyle} {...args?.BoxProps}>
        <Player autoplay loop src={crm} style={args?.LottieStyle} speed={1} {...args?.LottieProps}></Player>
        {/* <Box sx={{ width: 'fit-content', marginTop: '-2rem' }}>{args?.label}</Box> */}
      </Box>
    )
  },
}
