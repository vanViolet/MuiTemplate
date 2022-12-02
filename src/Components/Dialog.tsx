import { Box, Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle } from '@mui/material'
import { borderRadius, shadow } from 'config'
import { closeStack } from 'Contexts/customizationReducer'
import { useAppDispatch } from 'Contexts/_store'
import React from 'react'
import { ColorCollection } from 'Utilities/ColorCollection'
import { IconCollection, IIconCollection } from 'Utilities/IconCollection'

interface IAppDialog {
  title?: React.ReactNode | undefined
  icon?: IIconCollection
  dialogProps?: Omit<DialogProps, 'open'>
  action?: JSX.Element | JSX.Element[] | undefined
  children?: JSX.Element | JSX.Element[]
  onSubmit?: () => void
}

export const AppDialog = ({ title, icon, dialogProps, action, children, onSubmit }: IAppDialog) => {
  const dispatch = useAppDispatch()
  return (
    <Dialog
      sx={(theme) => ({
        '& .MuiPaper-root': {
          transitionDuration: '1000ms',
          borderRadius: borderRadius.md,
          '@keyframes darkModeEffect': {
            '0%': {
              background: 'rgba(0,0,0,1)',
              backdropFilter: 'blur(100px)',
              height: 0,
            },
            '100%': {
              background: 'rgba(0,0,0,0)',
              backdropFilter: 'blur(15px)',
              height: 500,
            },
          },
          '@keyframes lightModeEffect': {
            '0%': {
              height: 0,
            },
            '100%': {
              height: 500,
            },
          },
          animation: theme.palette.mode === 'dark' ? `darkModeEffect ` : `lightModeEffect`,
          animationDuration: '300ms',
          animationFillMode: 'forwards',
          boxShadow: theme.palette.mode === 'dark' ? shadow.dark.sm : shadow.light.sm,
        },
        colorScheme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      })}
      open={true}
      fullWidth
      maxWidth="md"
      onClose={() => dispatch(closeStack())}
      {...dialogProps}
    >
      <DialogTitle
        sx={(theme) => ({
          '& .MuiPaper-root': {
            background: 'none',
          },
          background: theme.palette.mode === 'dark' ? 'rgba(40,40,40,0.5)' : ColorCollection.bg.light[0],
          color: 'white',
          fontWeight: 700,
          borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
          padding: '0.7rem 1rem',
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginTop: '0.5rem', marginRight: '1rem' }}>{icon && IconCollection(icon, 'HeroSize')}</Box>
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          <Box
            sx={{
              transitionDuration: '300ms',
              marginTop: '0.7rem',
              '&:hover': {
                transform: 'scale(1.3)',
                cursor: 'pointer',
              },
            }}
            onClick={() => dispatch(closeStack())}
          >
            {IconCollection('Close', 35)}
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ padding: '1rem' }}>
        {children}
      </DialogContent>
      <DialogActions
        sx={(theme) => ({
          background: theme.palette.mode === 'dark' ? 'rgba(40,40,40,0.5)' : ColorCollection.bg.light[0],
          // justifyContent: 'center',
          paddingRight: '1rem',
        })}
      >
        <Button onClick={() => onSubmit?.()} variant="contained" color="success" sx={{ padding: '0.3rem 1.5rem' }} type="submit">
          SUBMIT
        </Button>
      </DialogActions>
    </Dialog>
  )
}
