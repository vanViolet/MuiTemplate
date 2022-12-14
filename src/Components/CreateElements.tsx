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
import { IconCollection, IIconCollection } from 'Collections/IconCollection'
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
  Ingredient?: IIngredient[] | undefined | undefined[]
}

export interface IIngredient extends Omit<CommonTypes, 'order'> {
  styleForParentBox?: SxProps<Theme> | undefined
  propsForParentBox?: BoxProps
  DIRECTION?: 'row' | 'column'

  /** Layout Interface */
  GridContainer?: IGridContainer[] | IGridContainer[] | undefined
  Box?: IBox[] | IBox[] | undefined | undefined | undefined[]
  Container?: IContainer[] | IContainer[] | undefined | undefined[]
  Stack?: IStack[] | IStack[] | undefined | undefined[]

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined | undefined[]

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined
  Divider?: IDivider[] | IDivider[] | undefined | undefined[]
  Chip?: IChip[] | IChip[] | undefined | undefined[]
  Avatar?: IAvatar[] | IAvatar[] | undefined | undefined[]
  Badge?: IBadge[] | IBadge[] | undefined | undefined[]

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined
  Button?: IButton[] | IButton[] | undefined | undefined[]
  IconButton?: IIconButton[] | IIconButton[] | undefined | undefined[]
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined | undefined[]
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined | undefined[]
  RadioButton?: IRadioButton[] | undefined | undefined[]
  Switch?: ISwitch[] | undefined | undefined[]
  TextField?: ITextField[] | undefined | undefined[]

  /** New */
  Menu?: IMenu[] | undefined | undefined[]
  TableContainer?: ITableContainer[] | undefined | undefined[]
}

export interface IGridContainer extends CommonTypes {
  props?: Omit<GridProps, 'item' | 'container'>
  GridItem?: IGridItem[] | undefined | undefined[]
}

export interface IGridItem extends Omit<CommonTypes, 'order'> {
  props?: Omit<GridProps, 'item' | 'container'>

  /** Layout Interface */
  Box?: IBoxNotNested[] | undefined | undefined | undefined | undefined[]
  Container?: IContainer[] | IContainer[] | undefined
  Stack?: IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined | undefined[]
  Divider?: IDivider[] | IDivider[] | undefined | undefined[]
  Chip?: IChip[] | IChip[] | undefined | undefined[]
  Avatar?: IAvatar[] | IAvatar[] | undefined | undefined[]

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined | undefined[]
  Button?: IButton[] | IButton[] | undefined | undefined[]
  IconButton?: IIconButton[] | IIconButton[] | undefined | undefined[]
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined | undefined[]
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined | undefined[]
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined | undefined[]
  Switch?: ISwitch[] | ISwitch[] | undefined | undefined[]
  TextField?: ITextField[] | ITextField[] | undefined | undefined[]

  /** New */
  Menu?: IMenu[] | undefined | undefined[]
}

// Layout ============================================================================== Layout Interface

export type IBoxNotNested = Pick<IBox, 'props' | '__CHILD' | 'order' | 'style'> | undefined

export interface IBox extends CommonTypes {
  props?: BoxProps
  DIRECTION?: 'row' | 'column'
  Box?: IBoxNotNested[] | undefined | undefined[]
  Container?: IContainer[] | IContainer[] | undefined | undefined[]
  Stack?: IStack[] | IStack[] | undefined | undefined[]

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined | undefined[]

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined | undefined[]
  Divider?: IDivider[] | IDivider[] | undefined | undefined[]
  Chip?: IChip[] | IChip[] | undefined | undefined[]
  Avatar?: IAvatar[] | IAvatar[] | undefined | undefined[]

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined | undefined[]
  Button?: IButton[] | IButton[] | undefined | undefined[]
  IconButton?: IIconButton[] | IIconButton[] | undefined | undefined[]
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined | undefined[]
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined | undefined[]
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined | undefined[]
  Switch?: ISwitch[] | ISwitch[] | undefined | undefined[]
  TextField?: ITextField[] | ITextField[] | undefined | undefined[]

  /** New */
  Menu?: IMenu[] | undefined | undefined[]
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
  Box?: IBoxNotNested[] | undefined | undefined[]
  Container?: IContainer[] | IContainer[] | undefined | undefined[]
  Stack?: IStack[] | IStack[] | undefined | undefined[]

  /** Surfaces Interface */
  Paper?: IPaper[] | IPaper[] | undefined | undefined[]

  /** Data Display Interface */
  Typography?: ITypography[] | ITypography[] | undefined | undefined[]
  Divider?: IDivider[] | IDivider[] | undefined | undefined[]
  Chip?: IChip[] | IChip[] | undefined | undefined[]
  Avatar?: IAvatar[] | IAvatar[] | undefined | undefined[]

  /** Inputs Interface */
  Autocomplete?: IAutocomplete<any>[] | IAutocomplete<any>[] | undefined | undefined[]
  Button?: IButton[] | undefined | undefined[]
  IconButton?: IIconButton[] | IIconButton[] | undefined | undefined[]
  ButtonGroup?: IButtonGroup[] | IButtonGroup[] | undefined | undefined[]
  Checkbox?: ICheckbox[] | ICheckbox[] | undefined | undefined[]
  RadioButton?: IRadioButton[] | IRadioButton[] | undefined | undefined[]
  Switch?: ISwitch[] | ISwitch[] | undefined | undefined[]
  TextField?: ITextField[] | ITextField[] | undefined | undefined[]

  /** New */
  Menu?: IMenu[] | undefined | undefined[]
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
  props?: ConvertToOptional<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>>
  option: ReadonlyArray<T>
  label?: string
  icon?: IIconCollection | undefined
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
  MenuItem?: IMenuItem[] | undefined
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
  props?: ConvertToOptional<MenuItemProps>
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
  Box?: IBoxNotNested[] | undefined | undefined
}

// Gluttony ===================================================================== Export Gluttony Component
export const CreateElements = ({ Ingredient: Ingredient }: ICreateElements) => {
  return (
    <>
      {Ingredient?.map((row, key) =>
        row === undefined ? undefined : (
          // Mapping ======================================================= ParentRoot As Devourobject
          <Box
            key={key}
            style={{ display: 'flex', flexDirection: row.DIRECTION || 'column' }}
            sx={row.styleForParentBox}
            {...row.propsForParentBox}
          >
            {row.__CHILD}

            {/**  ( Root Parent ============================================================================> Grid )

           */}
            {row?.GridContainer?.map((row, key) =>
              row === undefined ? undefined : (
                // Mapping ==================================================== Grid Container
                <Grid container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}

                  {row?.GridItem?.map((row, key) =>
                    row === undefined ? undefined : (
                      // Mapping ==================================================== Grid Item
                      <Grid item key={key} style={{ display: 'flex', flexDirection: 'column' }} sx={row.style} {...row.props}>
                        {row.__CHILD}

                        {row?.Box?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Box>
                          )
                        )}

                        {row?.Container?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Container>
                          )
                        )}

                        {row?.Stack?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Stack>
                          )
                        )}

                        {row?.Paper?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Paper>
                          )
                        )}

                        {row?.Typography?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Typography>
                          )
                        )}

                        {row?.Divider?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Divider>
                          )
                        )}

                        {row?.Chip?.map((row, key) =>
                          row === undefined ? undefined : <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                        )}

                        {row?.Avatar?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Avatar>
                          )
                        )}

                        {/**  Root Parent  =============================================== Inputs*/}
                        {row?.Autocomplete?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Autocomplete
                              key={key}
                              disablePortal
                              style={{ order: row.order }}
                              sx={row.style}
                              options={row.option}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label={row.label}
                                  InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        {IconCollection(row.icon ?? undefined, 'ButtonSize')}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              )}
                              {...row.props}
                            />
                          )
                        )}

                        {row?.Button?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Button>
                          )
                        )}

                        {row?.IconButton?.map((row, key) =>
                          row === undefined ? undefined : (
                            <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                          )
                        )}

                        {row?.ButtonGroup?.map((row, key) =>
                          row === undefined ? undefined : (
                            <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.Button?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <Button key={key} sx={row.style} {...row.props}>
                                    {row.__CHILD}
                                  </Button>
                                )
                              )}
                            </ButtonGroup>
                          )
                        )}

                        {row?.Checkbox?.map((row, key) =>
                          row === undefined ? undefined : (
                            <FormControlLabel
                              key={key}
                              style={{ order: row.order }}
                              sx={row.style}
                              control={<Checkbox {...row.props} />}
                              label={row.label}
                              {...row.FromControlLabelProperty}
                            />
                          )
                        )}

                        {row?.RadioButton?.map((row, key) =>
                          row === undefined ? undefined : (
                            <FormControlLabel
                              key={key}
                              style={{ order: row.order }}
                              sx={row.style}
                              control={<Radio {...row.props} />}
                              label={row.label}
                              {...row.FromControlLabelProperty}
                            />
                          )
                        )}

                        {row?.Switch?.map((row, key) =>
                          row === undefined ? undefined : (
                            <FormControlLabel
                              key={key}
                              style={{ order: row.order }}
                              sx={row.style}
                              control={<Switch {...row.props} />}
                              label={row.label}
                              {...row.FromControlLabelProperty}
                            />
                          )
                        )}

                        {row?.TextField?.map((row: ITextField | undefined, key) =>
                          row === undefined ? undefined : (
                            <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row?.MenuItem?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                    <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                                    {row.label}
                                  </MenuItem>
                                )
                              )}
                            </TextField>
                          )
                        )}

                        {row?.Menu?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Menu
                              key={key}
                              open={row.open}
                              anchorEl={row.anchorEl}
                              onClose={() => row?.onClose?.()}
                              style={{ order: row.order }}
                              sx={row.style}
                              {...row.props}
                            >
                              {row?.Typography?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                    {row.__CHILD}
                                  </Typography>
                                )
                              )}

                              {row?.Divider?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                    {row.__CHILD}
                                  </Divider>
                                )
                              )}

                              {row?.MenuItem?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                    <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                                    {row.label}
                                  </MenuItem>
                                )
                              )}
                              {row.__CHILD}
                            </Menu>
                          )
                        )}
                      </Grid>
                    )
                  )}
                </Grid>
              )
            )}

            {/** The Parent Gluttony ========================================= Depends ON Mapping( RootParent )*/}

            {/**  ( Root Parent ============================================================================> Box )
             *
             *
             *
             *
             *
             */}
            {row?.Box?.map((row, key) =>
              row === undefined ? undefined : (
                <Box
                  key={key}
                  style={{ order: row.order, display: 'flex', flexDirection: row.DIRECTION || 'column' }}
                  sx={row.style}
                  {...row.props}
                >
                  {row.__CHILD}

                  {row?.Box?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Box>
                    )
                  )}

                  {row?.Container?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Container>
                    )
                  )}

                  {row?.Stack?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Stack>
                    )
                  )}

                  {row?.Paper?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Paper>
                    )
                  )}

                  {row?.Typography?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Typography>
                    )
                  )}

                  {row?.Divider?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Divider>
                    )
                  )}

                  {row?.Chip?.map((row, key) =>
                    row === undefined ? undefined : <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  )}

                  {row?.Avatar?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Avatar>
                    )
                  )}

                  {/**  Root Parent  =============================================== Inputs*/}
                  {row?.Autocomplete?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Autocomplete
                        key={key}
                        disablePortal
                        style={{ order: row.order }}
                        sx={row.style}
                        options={row.option}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputLabelProps={{
                              ...params.InputLabelProps,
                              sx: { fontWeight: 700, fontSize: '1rem', marginTop: '-0.3rem' },
                            }}
                            label={row.label}
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">{IconCollection(row.icon ?? undefined, 'ButtonSize')}</InputAdornment>
                              ),
                            }}
                          />
                        )}
                        {...row.props}
                      />
                    )
                  )}

                  {row?.Button?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Button>
                    )
                  )}

                  {row?.IconButton?.map((row, key) =>
                    row === undefined ? undefined : <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  )}

                  {row?.ButtonGroup?.map((row, key) =>
                    row === undefined ? undefined : (
                      <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row?.Button?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Button key={key} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Button>
                          )
                        )}
                      </ButtonGroup>
                    )
                  )}

                  {row?.Checkbox?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Checkbox {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.RadioButton?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Radio {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.Switch?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Switch {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.TextField?.map((row: ITextField | undefined, key) =>
                    row === undefined ? undefined : (
                      <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row?.MenuItem?.map((row, key) =>
                          row === undefined ? undefined : (
                            <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                              {row.label}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    )
                  )}

                  {row?.Menu?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Menu
                        key={key}
                        open={row.open}
                        anchorEl={row.anchorEl}
                        onClose={() => row?.onClose?.()}
                        style={{ order: row.order }}
                        sx={row.style}
                        {...row.props}
                      >
                        {row?.Typography?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Typography>
                          )
                        )}

                        {row?.Divider?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Divider>
                          )
                        )}

                        {row?.MenuItem?.map((row, key) =>
                          row === undefined ? undefined : (
                            <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                              {row.label}
                            </MenuItem>
                          )
                        )}
                        {row.__CHILD}
                      </Menu>
                    )
                  )}
                </Box>
              )
            )}

            {/**  ( RootParent )
             *
             *
             *
             *
             */}
            {row?.Container?.map((row, key) =>
              row === undefined ? undefined : (
                <Container key={key} style={{ order: row.order }} {...row.props}>
                  {row.__CHILD}
                </Container>
              )
            )}
            {row?.Stack?.map((row, key) =>
              row === undefined ? undefined : (
                <Stack key={key} style={{ order: row.order }} {...row.props}>
                  {row.__CHILD}
                </Stack>
              )
            )}

            {/** The Parent Gluttony ========================================= Depends ON Mapping( RootParent )*/}

            {/**  ( Root Parent ============================================================================> Box )
             *
             *
             *
             *
             *
             */}

            {row?.Paper?.map((row, key) =>
              row === undefined ? undefined : (
                <Paper
                  key={key}
                  style={{ order: row.order, display: 'flex', flexDirection: row.DIRECTION || 'column' }}
                  sx={row.style}
                  {...row.props}
                >
                  {row.__CHILD}

                  {row?.Box?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Box>
                    )
                  )}

                  {row?.Container?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Container>
                    )
                  )}

                  {row?.Stack?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Stack>
                    )
                  )}

                  {row?.Paper?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Paper>
                    )
                  )}

                  {row?.Typography?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Typography>
                    )
                  )}

                  {row?.Divider?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Divider>
                    )
                  )}

                  {row?.Chip?.map((row, key) =>
                    row === undefined ? undefined : <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  )}

                  {row?.Avatar?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Avatar>
                    )
                  )}

                  {/**  Root Parent  =============================================== Inputs*/}
                  {row?.Autocomplete?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Autocomplete
                        key={key}
                        disablePortal
                        style={{ order: row.order }}
                        sx={row.style}
                        options={row.option}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputLabelProps={{
                              ...params.InputLabelProps,
                              sx: { fontWeight: 700, fontSize: '1rem', marginTop: '-0.3rem' },
                            }}
                            label={row.label}
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">{IconCollection(row.icon ?? undefined, 'ButtonSize')}</InputAdornment>
                              ),
                            }}
                          />
                        )}
                        {...row.props}
                      />
                    )
                  )}

                  {row?.Button?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Button>
                    )
                  )}

                  {row?.IconButton?.map((row, key) =>
                    row === undefined ? undefined : <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  )}

                  {row?.ButtonGroup?.map((row, key) =>
                    row === undefined ? undefined : (
                      <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row?.Button?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Button key={key} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Button>
                          )
                        )}
                      </ButtonGroup>
                    )
                  )}

                  {row?.Checkbox?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Checkbox {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.RadioButton?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Radio {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.Switch?.map((row, key) =>
                    row === undefined ? undefined : (
                      <FormControlLabel
                        key={key}
                        style={{ order: row.order }}
                        sx={row.style}
                        control={<Switch {...row.props} />}
                        label={row.label}
                        {...row.FromControlLabelProperty}
                      />
                    )
                  )}

                  {row?.TextField?.map((row: ITextField | undefined, key) =>
                    row === undefined ? undefined : (
                      <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row?.MenuItem?.map((row, key) =>
                          row === undefined ? undefined : (
                            <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                              {row.label}
                            </MenuItem>
                          )
                        )}
                      </TextField>
                    )
                  )}

                  {row?.Menu?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Menu
                        key={key}
                        open={row.open}
                        anchorEl={row.anchorEl}
                        onClose={() => row?.onClose?.()}
                        style={{ order: row.order }}
                        sx={row.style}
                        {...row.props}
                      >
                        {row?.Typography?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Typography>
                          )
                        )}

                        {row?.Divider?.map((row, key) =>
                          row === undefined ? undefined : (
                            <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              {row.__CHILD}
                            </Divider>
                          )
                        )}

                        {row?.MenuItem?.map((row, key) =>
                          row === undefined ? undefined : (
                            <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                              <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                              {row.label}
                            </MenuItem>
                          )
                        )}
                        {row.__CHILD}
                      </Menu>
                    )
                  )}
                </Paper>
              )
            )}

            {row?.Typography?.map((row, key) =>
              row === undefined ? undefined : (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Typography>
              )
            )}

            {row?.Divider?.map((row, key) =>
              row === undefined ? undefined : (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Divider>
              )
            )}

            {row?.Chip?.map((row, key) =>
              row === undefined ? undefined : <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
            )}

            {row?.Avatar?.map((row, key) =>
              row === undefined ? undefined : (
                <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Avatar>
              )
            )}

            {/**  Root Parent  =============================================== Inputs*/}
            {row?.Autocomplete?.map((row, key) =>
              row === undefined ? undefined : (
                <Autocomplete
                  key={key}
                  disablePortal
                  style={{ order: row.order }}
                  sx={row.style}
                  options={row.option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputLabelProps={{
                        ...params.InputLabelProps,
                        sx: { fontWeight: 700, fontSize: '1rem', marginTop: '-0.3rem' },
                      }}
                      label={row.label}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start">{IconCollection(row.icon ?? undefined, 'ButtonSize')}</InputAdornment>
                        ),
                      }}
                    />
                  )}
                  {...row.props}
                />
              )
            )}

            {row?.Button?.map((row, key) =>
              row === undefined ? undefined : (
                <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.__CHILD}
                </Button>
              )
            )}

            {row?.IconButton?.map((row, key) =>
              row === undefined ? undefined : <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
            )}

            {row?.ButtonGroup?.map((row, key) =>
              row === undefined ? undefined : (
                <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.Button?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Button key={key} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Button>
                    )
                  )}
                </ButtonGroup>
              )
            )}

            {row?.Checkbox?.map((row, key) =>
              row === undefined ? undefined : (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Checkbox {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              )
            )}

            {row?.RadioButton?.map((row, key) =>
              row === undefined ? undefined : (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Radio {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              )
            )}

            {row?.Switch?.map((row, key) =>
              row === undefined ? undefined : (
                <FormControlLabel
                  key={key}
                  style={{ order: row.order }}
                  sx={row.style}
                  control={<Switch {...row.props} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              )
            )}

            {row?.TextField?.map((row: ITextField | undefined, key) =>
              row === undefined ? undefined : (
                <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row?.MenuItem?.map((row, key) =>
                    row === undefined ? undefined : (
                      <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                        {row.label}
                      </MenuItem>
                    )
                  )}
                </TextField>
              )
            )}

            {row?.Menu?.map((row, key) =>
              row === undefined ? undefined : (
                <Menu
                  key={key}
                  open={row.open}
                  anchorEl={row.anchorEl}
                  onClose={() => row?.onClose?.()}
                  style={{ order: row.order }}
                  sx={row.style}
                  {...row.props}
                >
                  {row?.Typography?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Typography>
                    )
                  )}

                  {row?.Divider?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        {row.__CHILD}
                      </Divider>
                    )
                  )}

                  {row?.MenuItem?.map((row, key) =>
                    row === undefined ? undefined : (
                      <MenuItem key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                        <span style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>{row.rightIcon}</span>
                        {row.label}
                      </MenuItem>
                    )
                  )}
                  {row.__CHILD}
                </Menu>
              )
            )}

            {row?.TableContainer?.map((row, key) =>
              row === undefined ? undefined : (
                <TableContainer key={key} component={Paper} sx={row.style} {...row.props}>
                  {row?.Table?.map((row, key) =>
                    row === undefined ? undefined : (
                      <Table key={key} sx={row.style} {...row.props}>
                        {row?.TableHead?.map((row, key) =>
                          row === undefined ? undefined : (
                            <TableHead key={key} sx={row.style} {...row.props}>
                              {row?.TableRow?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <TableRow key={key} sx={row.style} {...row.props}>
                                    {row?.TableCell?.map((row, key) =>
                                      row === undefined ? undefined : (
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

                                          {row?.Box?.map((row, key) =>
                                            row === undefined ? undefined : (
                                              <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                                {row.__CHILD}
                                              </Box>
                                            )
                                          )}
                                        </TableCell>
                                      )
                                    )}
                                  </TableRow>
                                )
                              )}
                            </TableHead>
                          )
                        )}

                        {row?.TableBody?.map((row, key) =>
                          row === undefined ? undefined : (
                            <TableBody key={key} sx={row.style} {...row.props}>
                              {row?.TableRow?.map((row, key) =>
                                row === undefined ? undefined : (
                                  <TableRow key={key} sx={row.style} {...row.props}>
                                    {row?.TableCell?.map((row, key) =>
                                      row === undefined ? undefined : (
                                        <TableCell
                                          key={key}
                                          style={{
                                            fontFamily:
                                              "Poppins,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                                            padding: '1.5rem 1rem',
                                          }}
                                          sx={row.style}
                                          {...row.props}
                                        >
                                          {row.label}
                                          {row?.Box?.map((row, key) =>
                                            row === undefined ? undefined : (
                                              <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                                                {row.__CHILD}
                                              </Box>
                                            )
                                          )}
                                        </TableCell>
                                      )
                                    )}
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          )
                        )}
                      </Table>
                    )
                  )}
                </TableContainer>
              )
            )}
          </Box>
        )
      )}
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
