import { Chip } from '@mui/material'
import { borderRadius } from 'config'

export const { CStatus } = {
  CStatus: (row: 1 | 0 | boolean) => {
    if (row === 1) return <Chip label="ACTIVE" color="success" sx={{ borderRadius: borderRadius.sm }} />
    return <Chip label="TIDAK ACTIVE" color="error" sx={{ borderRadius: borderRadius.sm }} />
  },
}
