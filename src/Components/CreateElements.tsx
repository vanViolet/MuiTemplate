import {
  Autocomplete,
  AutocompleteProps,
  Avatar,
  AvatarProps,
  BadgeProps,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
  Checkbox,
  CheckboxProps,
  Chip,
  ChipProps,
  ChipTypeMap,
  Container,
  ContainerProps,
  Divider,
  DividerProps,
  FormControlLabel,
  FormControlLabelProps,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  InputAdornment,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  Paper,
  PaperProps,
  Radio,
  RadioProps,
  Stack,
  StackProps,
  Switch,
  SwitchProps,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableHeadProps,
  TableProps,
  TableRow,
  TableRowProps,
  TextField,
  TextFieldProps,
  Theme,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import { DataGridProps } from '@mui/x-data-grid'
import { borderRadius } from 'config'
import React from 'react'

export type ConvertToOptional<A> = {
  [P in keyof A]?: A[P]
}

interface CommonTypes {
  __CHILD?: React.ReactNode | JSX.Element | JSX.Element[] | undefined | undefined
  order?: number | undefined
  style?: SxProps<Theme> | undefined
}

interface ICreateElements {
  Ingredient?: IIngredient[] | undefined
}

export interface IIngredient extends Omit<CommonTypes, 'order'> {
  styleForParentBox?: SxProps<Theme> | undefined
  DIRECTION?: 'row' | 'column'

  /** Layout Interface */
  GridContainer?: IGridContainer[] | IGridContainer[] | undefined
  Box?: IBox[] | IBox[] | undefined | undefined
  Container?: IContainer[] | IContainer[] | undefined
  Stack?: IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined
  Chip?: IChip[] | IChip[] | undefined
  Avatar?: IAvatar[] | IAvatar[] | undefined
  Badge?: IBadge[] | IBadge[] | undefined

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined
  Button?: IButton[] | IButton[] | undefined
  IconButton?: IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined
  Switch?: ISwitch[] | ISwitch[] | undefined
  TextField?: ITextField[] | ITextField[] | undefined

  /** New */
  Menu?: IMenu[] | undefined
  TableContainer?: ITableContainer[] | undefined
}

export interface IGridContainer extends CommonTypes {
  props?: Omit<GridProps, 'item' | 'container'>
  GridItem?: IGridItem[] | undefined
}

export interface IGridItem extends Omit<CommonTypes, 'order'> {
  props?: Omit<GridProps, 'item' | 'container'>

  /** Layout Interface */
  Box?: IBoxNotNested[] | undefined | undefined
  Container?: IContainer[] | IContainer[] | undefined
  Stack?: IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined
  Chip?: IChip[] | IChip[] | undefined
  Avatar?: IAvatar[] | IAvatar[] | undefined

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined
  Button?: IButton[] | IButton[] | undefined
  IconButton?: IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined
  Switch?: ISwitch[] | ISwitch[] | undefined
  TextField?: ITextField[] | ITextField[] | undefined

  /** New */
  Menu?: IMenu[] | undefined
}

// Layout ============================================================================== Layout Interface

export type IBoxNotNested = Pick<IBox, 'props' | '__CHILD' | 'order' | 'style'>

export interface IBox extends CommonTypes {
  props?: BoxProps
  DIRECTION?: 'row' | 'column'
  Box?: IBoxNotNested[]
  Container?: IContainer[] | IContainer[] | undefined
  Stack?: IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined
  Chip?: IChip[] | IChip[] | undefined
  Avatar?: IAvatar[] | IAvatar[] | undefined

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined
  Button?: IButton[] | IButton[] | undefined
  IconButton?: IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined
  Switch?: ISwitch[] | ISwitch[] | undefined
  TextField?: ITextField[] | ITextField[] | undefined

  /** New */
  Menu?: IMenu[] | undefined
}
export interface IContainer extends CommonTypes {
  props?: ContainerProps
}
export interface IStack extends CommonTypes {
  props?: StackProps
}

// Surface ============================================================================== Surface Interface
export interface IPaper extends CommonTypes {
  props?: PaperProps
  DIRECTION?: 'row' | 'column'
  Box?: IBoxNotNested[]
  Container?: IContainer[] | IContainer[] | undefined
  Stack?: IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined
  Chip?: IChip[] | IChip[] | undefined
  Avatar?: IAvatar[] | IAvatar[] | undefined

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined
  Button?: IButton[] | undefined
  IconButton?: IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined
  Switch?: ISwitch[] | ISwitch[] | undefined
  TextField?: ITextField[] | ITextField[] | undefined

  /** New */
  Menu?: IMenu[] | undefined
}

// Data Display ================================================================== Data Display Interface
export interface ITypography extends CommonTypes {
  props?: TypographyProps
}
export interface IDivider extends CommonTypes {
  props?: DividerProps
}
export interface IChip extends Omit<CommonTypes, '__CHILD'> {
  props?: ChipProps
}

export interface IAvatar extends CommonTypes {
  props?: AvatarProps
}
export interface IBadge extends CommonTypes {
  props?: BadgeProps
}

export interface ITooltip extends CommonTypes {
  props?: TooltipProps
  title?: string
}

// Inputs ============================================================================== Inputs Interface
export interface IAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<CommonTypes, '__CHILD'> {
  props?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
  option: ReadonlyArray<T>
  label?: string
}

export interface IButton extends CommonTypes {
  props?: ButtonProps
}

export interface IIconButton extends CommonTypes {
  props?: IconButtonProps
}

export interface IButtonGroup extends CommonTypes {
  props?: ButtonGroupProps
  Button?: IButton[] | undefined
}

export interface ICheckbox extends Omit<CommonTypes, '__CHILD'> {
  props?: CheckboxProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface IRadioButton extends Omit<CommonTypes, '__CHILD'> {
  props?: RadioProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ISwitch extends Omit<CommonTypes, '__CHILD'> {
  props?: SwitchProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ITextField extends Omit<CommonTypes, '__CHILD'> {
  props?: TextFieldProps
  icon?: React.ReactNode | undefined
}

export interface IMenu extends CommonTypes {
  props?: MenuProps
  open: boolean
  anchorEl?: Element | ((element: Element) => Element) | null | undefined
  onClose?: () => void
  MenuItem?: IMenuItem[] | undefined
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined
}

export interface IMenuItem extends Omit<CommonTypes, '__CHILD'> {
  props?: MenuItemProps
  rightIcon?: React.ReactNode | undefined
  label?: React.ReactNode | undefined
}

export interface ITableContainer extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableContainerProps
  Table?: ITable[] | undefined
}

export interface ITable extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableProps
  TableHead?: ITableHead[] | undefined
  TableBody?: ITableBody[] | undefined
}

export interface ITableHead extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableHeadProps
  TableRow?: ITableRow[] | undefined
}

export interface ITableBody extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableHeadProps
  TableRow?: ITableRow[] | undefined
}

export interface ITableRow extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableRowProps
  TableCell?: ITableCell[] | undefined
}

export interface ITableCell extends Omit<CommonTypes, '__CHILD' | 'order'> {
  props?: TableCellProps
  label?: React.ReactNode | undefined
  Box?: IBoxNotNested[] | undefined
}

// Gluttony ===================================================================== Export Gluttony Component
export const CreateElements = ({ Ingredient: Ingredient }: ICreateElements) => {
  return (
    <>
      {Ingredient?.map((row, key) => (
        // Mapping ======================================================= ParentRoot As Devourobject
        <Box key={key} style={{ display: 'flex', flexDirection: row.DIRECTION || 'column' }} sx={row.styleForParentBox}>
          {row.__CHILD}

          {/**  ( Root Parent ============================================================================> Grid )

           */}
          {row?.GridContainer?.map((row, key) => (
            // Mapping ==================================================== Grid Container
            <Grid container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.__CHILD}

              {row?.GridItem?.map((row, key) => (
                // Mapping ==================================================== Grid Item
                <Grid item key={key} style={{ display: 'flex', flexDirection: 'column' }} sx={row.style} {...row.props}>
                  {row.__CHILD}

                  {row?.Box?.map((row, key) => (
                    <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Box>
                  ))}

                  {row?.Container?.map((row, key) => (
                    <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Container>
                  ))}

                  {row?.Stack?.map((row, key) => (
                    <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Stack>
                  ))}

                  {row?.Paper?.map((row, key) => (
                    <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Paper>
                  ))}

                  {row?.Typography?.map((row, key) => (
                    <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Typography>
                  ))}

                  {row?.Divider?.map((row, key) => (
                    <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Divider>
                  ))}

                  {row?.Chip?.map((row, key) => (
                    <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  ))}

                  {row?.Avatar?.map((row, key) => (
                    <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Avatar>
                  ))}

                  {/**  Root Parent  =============================================== Inputs*/}
                  {row?.Autocomplete?.map((row, key) => (
                    <Autocomplete
                      key={key}
                      disablePortal
                      style={{ order: row.order }}
                      sx={row.style}
                      options={row.option}
                      renderInput={(params) => <TextField {...params} label={row.label} />}
                      {...row.props}
                    />
                  ))}

                  {row?.Button?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Button>
                    )
                  )}

                  {row?.IconButton?.map((row, key) => (
                    <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  ))}

                  {row?.ButtonGroup?.map((row, key) => (
                    <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.Button?.map((row, key) => (
                        <Button key={key} sx={row.style} {...row.props}>
                          {row.__CHILD}
                        </Button>
                      ))}
                    </ButtonGroup>
                  ))}

                  {row?.Checkbox?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.order }}
                      sx={row.style}
                      control={<Checkbox {...row.props} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.RadioButton?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.order }}
                      sx={row.style}
                      control={<Radio {...row.props} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.Switch?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.order }}
                      sx={row.style}
                      control={<Switch {...row.props} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.TextField?.map((row, key) => (
                    <TextField
                      key={key}
                      style={{ order: row.order }}
                      sx={row.style}
                      InputProps={{ startAdornment: <InputAdornment position="start">{row.icon}</InputAdornment> }}
                      {...row.props}
                    />
                  ))}

                  {row?.Menu?.map((row, key) => (
                    <Menu
                      key={key}
                      open={row.open}
                      anchorEl={row.anchorEl}
                      onClose={() => row?.onClose?.()}
                      style={{ order: row.order }}
                      sx={row.style}
                      {...row.props}
                    >
                      {row?.Typography?.map((row, key) => (
                        <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                          {row.__CHILD}
                        </Typography>
                      ))}

                      {row?.Divider?.map((row, key) => (
                        <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                          {row.__CHILD}
                        </Divider>
                      ))}

                      {row?.MenuItem?.map((row, key) => (
                        <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                          <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                          {row.label}
                        </MenuItem>
                      ))}
                      {row.__CHILD}
                    </Menu>
                  ))}
                </Grid>
              ))}
            </Grid>
          ))}

          {/** The Parent Gluttony ========================================= Depends ON Mapping( RootParent )*/}

          {/**  ( Root Parent ============================================================================> Box )
           *
           *
           *
           *
           *
           */}
          {row?.Box?.map((row, key) => (
            <Box
              key={key}
              style={{ order: row.order, display: 'flex', flexDirection: row.DIRECTION || 'column' }}
              sx={row.style}
              {...row.props}
            >
              {row.__CHILD}

              {row?.Box?.map((row, key) => (
                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Box>
              ))}

              {row?.Container?.map((row, key) => (
                <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Container>
              ))}

              {row?.Stack?.map((row, key) => (
                <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Stack>
              ))}

              {row?.Paper?.map((row, key) => (
                <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Paper>
              ))}

              {row?.Typography?.map((row, key) => (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Typography>
              ))}

              {row?.Divider?.map((row, key) => (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Divider>
              ))}

              {row?.Chip?.map((row, key) => (
                <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.Avatar?.map((row, key) => (
                <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Avatar>
              ))}

              {/**  Root Parent  =============================================== Inputs*/}
              {row?.Autocomplete?.map((row, key) => (
                <Autocomplete
                  key={key}
                  disablePortal
                  style={{ order: row.order }}
                  sx={row.style}
                  options={row.option}
                  renderInput={(params) => <TextField {...params} label={row.label} />}
                  {...row.props}
                />
              ))}

              {row?.Button?.map((row, key) =>
                row === undefined ? undefined : (
                  <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                    {row.__CHILD}
                  </Button>
                )
              )}

              {row?.IconButton?.map((row, key) => (
                <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.ButtonGroup?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row?.Button?.map((row, key) => (
                    <Button key={key} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Button>
                  ))}
                </ButtonGroup>
              ))}

              {row?.Checkbox?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Checkbox {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.RadioButton?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Radio {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.Switch?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Switch {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.TextField?.map((row, key) => (
                <TextField
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  InputProps={{ startAdornment: <InputAdornment position="start">{row.icon}</InputAdornment> }}
                  {...row.props}
                />
              ))}

              {row?.Menu?.map((row, key) => (
                <Menu
                  key={key}
                  open={row.open}
                  anchorEl={row.anchorEl}
                  onClose={() => row?.onClose?.()}
                  style={{ order: row.order }}
                  sx={row.style}
                  {...row.props}
                >
                  {row?.Typography?.map((row, key) => (
                    <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Typography>
                  ))}

                  {row?.Divider?.map((row, key) => (
                    <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Divider>
                  ))}

                  {row?.MenuItem?.map((row, key) => (
                    <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                      {row.label}
                    </MenuItem>
                  ))}
                  {row.__CHILD}
                </Menu>
              ))}
            </Box>
          ))}

          {/**  ( RootParent )
           *
           *
           *
           *
           */}
          {row?.Container?.map((row, key) => (
            <Container key={key} style={{ order: row.order }} {...row.props}>
              {row.__CHILD}
            </Container>
          ))}
          {row?.Stack?.map((row, key) => (
            <Stack key={key} style={{ order: row.order }} {...row.props}>
              {row.__CHILD}
            </Stack>
          ))}

          {/** The Parent Gluttony ========================================= Depends ON Mapping( RootParent )*/}

          {/**  ( Root Parent ============================================================================> Box )
           *
           *
           *
           *
           *
           */}

          {row?.Paper?.map((row, key) => (
            <Paper
              key={key}
              style={{ order: row.order, display: 'flex', flexDirection: row.DIRECTION || 'column' }}
              sx={row.style}
              {...row.props}
            >
              {row.__CHILD}

              {row?.Box?.map((row, key) => (
                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Box>
              ))}

              {row?.Container?.map((row, key) => (
                <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Container>
              ))}

              {row?.Stack?.map((row, key) => (
                <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Stack>
              ))}

              {row?.Paper?.map((row, key) => (
                <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Paper>
              ))}

              {row?.Typography?.map((row, key) => (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Typography>
              ))}

              {row?.Divider?.map((row, key) => (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Divider>
              ))}

              {row?.Chip?.map((row, key) => (
                <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.Avatar?.map((row, key) => (
                <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Avatar>
              ))}

              {/**  Root Parent  =============================================== Inputs*/}
              {row?.Autocomplete?.map((row, key) => (
                <Autocomplete
                  key={key}
                  disablePortal
                  style={{ order: row.order }}
                  sx={row.style}
                  options={row.option}
                  renderInput={(params) => <TextField {...params} label={row.label} />}
                  {...row.props}
                />
              ))}

              {row?.Button?.map((row, key) =>
                row === undefined ? undefined : (
                  <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                    {row.__CHILD}
                  </Button>
                )
              )}

              {row?.IconButton?.map((row, key) => (
                <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.ButtonGroup?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row?.Button?.map((row, key) => (
                    <Button key={key} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Button>
                  ))}
                </ButtonGroup>
              ))}

              {row?.Checkbox?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Checkbox {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.RadioButton?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Radio {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.Switch?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Switch {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.TextField?.map((row, key) => (
                <TextField
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{row.icon}</InputAdornment>,
                    sx: () => ({
                      borderRadius: borderRadius.md,
                    }),
                  }}
                  {...row.props}
                />
              ))}

              {row?.Menu?.map((row, key) => (
                <Menu
                  key={key}
                  open={row.open}
                  anchorEl={row.anchorEl}
                  onClose={() => row?.onClose?.()}
                  style={{ order: row.order }}
                  sx={row.style}
                  {...row.props}
                >
                  {row?.Typography?.map((row, key) => (
                    <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Typography>
                  ))}

                  {row?.Divider?.map((row, key) => (
                    <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.__CHILD}
                    </Divider>
                  ))}

                  {row?.MenuItem?.map((row, key) => (
                    <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                      {row.label}
                    </MenuItem>
                  ))}
                  {row.__CHILD}
                </Menu>
              ))}
            </Paper>
          ))}

          {row?.Typography?.map((row, key) => (
            <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.__CHILD}
            </Typography>
          ))}

          {row?.Divider?.map((row, key) => (
            <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.__CHILD}
            </Divider>
          ))}

          {row?.Chip?.map((row, key) => (
            <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
          ))}

          {row?.Avatar?.map((row, key) => (
            <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.__CHILD}
            </Avatar>
          ))}

          {/**  Root Parent  =============================================== Inputs*/}
          {row?.Autocomplete?.map((row, key) => (
            <Autocomplete
              key={key}
              disablePortal
              style={{ order: row.order }}
              sx={row.style}
              options={row.option}
              renderInput={(params) => <TextField {...params} label={row.label} />}
              {...row.props}
            />
          ))}

          {row?.Button?.map((row, key) =>
            row === undefined ? undefined : (
              <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                {row.__CHILD}
              </Button>
            )
          )}

          {row?.IconButton?.map((row, key) => (
            <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
          ))}

          {row?.ButtonGroup?.map((row, key) => (
            <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.Button?.map((row, key) => (
                <Button key={key} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Button>
              ))}
            </ButtonGroup>
          ))}

          {row?.Checkbox?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.order }}
              sx={row.style}
              control={<Checkbox {...row.props} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.RadioButton?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.order }}
              sx={row.style}
              control={<Radio {...row.props} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.Switch?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.order }}
              sx={row.style}
              control={<Switch {...row.props} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.TextField?.map((row, key) => (
            <TextField
              key={key}
              style={{ order: row.order }}
              sx={row.style}
              InputProps={{ startAdornment: <InputAdornment position="start">{row.icon}</InputAdornment> }}
              {...row.props}
            />
          ))}

          {row?.Menu?.map((row, key) => (
            <Menu
              key={key}
              open={row.open}
              anchorEl={row.anchorEl}
              onClose={() => row?.onClose?.()}
              style={{ order: row.order }}
              sx={row.style}
              {...row.props}
            >
              {row?.Typography?.map((row, key) => (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Typography>
              ))}

              {row?.Divider?.map((row, key) => (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Divider>
              ))}

              {row?.MenuItem?.map((row, key) => (
                <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                  {row.label}
                </MenuItem>
              ))}
              {row.__CHILD}
            </Menu>
          ))}

          {row?.TableContainer?.map((row, key) => (
            <TableContainer key={key} component={Paper} sx={row.style} {...row.props}>
              {row?.Table?.map((row, key) => (
                <Table key={key} sx={row.style} {...row.props}>
                  {row?.TableHead?.map((row, key) => (
                    <TableHead key={key} sx={row.style} {...row.props}>
                      {row?.TableRow?.map((row, key) => (
                        <TableRow key={key} sx={row.style} {...row.props}>
                          {row?.TableCell?.map((row, key) => (
                            <TableCell
                              key={key}
                              style={{
                                fontWeight: 700,
                                fontFamily:
                                  "Poppins,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                                position: 'relative!important' as 'relative',
                              }}
                              sx={row.style}
                              {...row.props}
                            >
                              {row.label}

                              {row?.Box?.map((row, key) => (
                                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                  {row.__CHILD}
                                </Box>
                              ))}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableHead>
                  ))}

                  {row?.TableBody?.map((row, key) => (
                    <TableBody key={key} sx={row.style} {...row.props}>
                      {row?.TableRow?.map((row, key) => (
                        <TableRow key={key} sx={row.style} {...row.props}>
                          {row?.TableCell?.map((row, key) => (
                            <TableCell
                              key={key}
                              style={{
                                fontFamily:
                                  "Poppins,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                              }}
                              sx={row.style}
                              {...row.props}
                            >
                              {row.label}
                              {row?.Box?.map((row, key) => (
                                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                  {row.__CHILD}
                                </Box>
                              ))}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  ))}
                </Table>
              ))}
            </TableContainer>
          ))}
        </Box>
      ))}
    </>
  )
}

export interface MuiProps {
  // Inputs
  Autocomplete: ConvertToOptional<AutocompleteProps<'', boolean | undefined, boolean | undefined, boolean | undefined>>
  Button: ButtonProps
  ButtonGroup: ButtonGroupProps
  Checkbox: CheckboxProps
  // Fab: FabProps
  RadioGroup: RadioProps
  // Rating: RatingProps
  // Select: SelectProps
  // Slider: SliderProps
  Switch: SwitchProps
  TextField: TextFieldProps
  // ToggleButtonGroup: ToggleButtonGroupProps
  // ToggleButton: ToggleButtonProps

  // Data Display
  Avatar: AvatarProps
  Badge: BadgeProps
  Chip: ChipProps
  Divider: DividerProps
  // List: ListProps
  // ListItemButton: ListItemButtonProps
  // ListItemIcon: ListItemIconProps
  // ListItemText: ListItemTextProps
  // ListItemAvatar: ListItemAvatarProps
  // ListSubHeader: ListSubheaderProps
  Table: DataGridProps
  Tooltip: TooltipProps
  Typography: TypographyProps

  // Feedback
  // Alert: AlertProps
  // AlertTitle: AlertTitleProps
  // Backdrop: BackdropProps

  // Dialog: DialogProps
  // DialogTitle: DialogTitleProps
  // DialogContent: DialogContentProps
  // DialogContentText: DialogContentTextProps
  // DialogAction: DialogActionsProps
  // CircularProgress: CircularProgressProps
  // LinearProgress: LinearProgressProps
  // Skeleton: SkeletonProps
  // Snackbar: SnackbarProps
  // SnackbarContent: SnackbarContentProps

  // Surface
  // Accordion: ConvertToOptional<AccordionProps>
  // AccordionSummary: AccordionSummaryProps
  // AccordionDetails: AccordionDetailsProps
  // AccordionActions: AccordionActionsProps
  // Card: CardProps
  // CardActionArea: CardActionsProps
  // CardAction: CardActionsProps
  // CardContent: CardContentProps
  // CardHeader: CardHeaderProps
  // CardMedia: CardMediaProps
  Paper: PaperProps

  // Navigation
  // BottomNavigation: BottomNavigationProps
  // BottomNavigationAction: BottomNavigationActionProps
  // Breadcrumbs: BreadcrumbsProps
  // Drawer: DrawerProps
  // SwipeableDrawer: SwipeableDrawerProps
  // Link: LinkProps
  Menu: ConvertToOptional<MenuProps>
  MenuItem: MenuItemProps
  // Pagination: PaginationProps
  // PaginationItem: PaginationItemProps
  // SpeedDial: SpeedDialProps
  // SpeedDialAction: SpeedDialActionProps
  // SpeedDialIcon: SpeedDialIconProps
  // Stepper: StepperProps
  // Step: StepProps
  // StepLabel: StepLabelProps
  // StepButton: StepButtonProps
  // StepIcon: StepIconProps
  // StepContent: StepContentProps
  // StepConnector: StepConnectorProps
  // MobileStepper: MobileStepperProps
  // Tabs: TabsProps
  // Tab: TabProps

  // Layout
  Box: BoxProps
  Container: ContainerProps
  // Grid: Grid2Props
  Stack: StackProps
  // ImageList: ImageListProps
  // ImageListItem: ImageListItemProps
  // ImageListItemBar: ImageListItemBarProps

  // Utils
  // ClickAwayListener: ClickAwayListenerProps
  // Modal: ModalProps
  // TextareaAutosize: TextareaAutosizeProps
  // Collapse: CollapseProps
  // Fade: FadeProps
  // Grow: GrowProps
  // Slide: SlideProps
  // Zoom: ZoomProps

  // Date
  // LocalizationProvider: LocalizationProviderProps
  // DatePicker: MobileDatePickerProps<'', ''>
}
