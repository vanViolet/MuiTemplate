import { CSSObject } from '@emotion/react'
import {
  Autocomplete,
  AutocompleteProps,
  Avatar,
  AvatarProps,
  Badge,
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
  Fab,
  FabProps,
  FormControlLabel,
  FormControlLabelProps,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemProps,
  ListItemText,
  ListProps,
  Paper,
  PaperProps,
  Radio,
  RadioProps,
  Stack,
  StackProps,
  Switch,
  SwitchProps,
  SxProps,
  TextField,
  TextFieldProps,
  Theme,
  Tooltip,
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import { DataGrid, DataGridProps, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import React from 'react'

interface CommonTypes {
  WhateverIwantAsChild?: React.ReactNode | JSX.Element | JSX.Element[] | undefined | undefined
}

interface IGluttony {
  FoodForGluttony?: IFoodForGluttony[] | undefined
}

export interface IFoodForGluttony extends CommonTypes {
  StyleForGluttonyParentRoot?: SxProps<Theme> | undefined

  /** Layout Interface */
  GridContainer?: () => IGridContainer[] | IGridContainer[] | undefined
  Box?: () => IBox[] | IBox[] | undefined | undefined
  Container?: () => IContainer[] | IContainer[] | undefined
  Stack?: () => IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: () => IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: () => ITypography[] | ITypography[] | undefined
  Divider?: () => IDivider[] | IDivider[] | undefined
  Chip?: () => IChip[] | IChip[] | undefined
  Avatar?: () => IAvatar[] | IAvatar[] | undefined
  Badge?: () => IBadge[] | IBadge[] | undefined
  Table?: () => ITable[] | ITable[] | undefined
  Tooltip?: () => ITooltip[] | ITooltip[] | undefined
  List?: () => IList[] | IList[] | undefined

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[] | IAutocomplete<T>[] | undefined
  Button?: () => IButton[] | IButton[] | undefined
  IconButton?: () => IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: () => IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: () => ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: () => IRadioButton[] | IRadioButton[] | undefined
  Switch?: () => ISwitch[] | ISwitch[] | undefined
  TextField?: () => ITextField[] | ITextField[] | undefined
  FloatingActionButton?: () => IFloatingActionButton[] | IFloatingActionButton[] | undefined
}

export interface IGridContainer extends CommonTypes {
  PropsForThisGridContainer?: Omit<GridProps, 'item' | 'container'>
  OrderThisGridContainerTo?: number | undefined
  GridItem?: () => IGridItem[] | undefined
}

export interface IGridItem extends CommonTypes {
  PropsForThisGridItem?: Omit<GridProps, 'item' | 'container'>

  /** Layout Interface */
  Box?: () =>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | undefined
    | undefined
  Container?: () => IContainer[] | IContainer[] | undefined
  Stack?: () => IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: () => IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: () => ITypography[] | ITypography[] | undefined
  Divider?: () => IDivider[] | IDivider[] | undefined
  Chip?: () => IChip[] | IChip[] | undefined
  Avatar?: () => IAvatar[] | IAvatar[] | undefined

  List?: () => IList[] | IList[] | undefined

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[] | IAutocomplete<T>[] | undefined
  Button?: () => IButton[] | IButton[] | undefined
  IconButton?: () => IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: () => IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: () => ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: () => IRadioButton[] | IRadioButton[] | undefined
  Switch?: () => ISwitch[] | ISwitch[] | undefined
  TextField?: () => ITextField[] | ITextField[] | undefined
  FloatingActionButton?: () => IFloatingActionButton[] | IFloatingActionButton[] | undefined
}

// Layout ============================================================================== Layout Interface

export type IBoxNotNested = Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'> | undefined | undefined

export interface IBox extends CommonTypes {
  PropsForThisBox?: BoxProps
  OrderThisBoxTo?: number | undefined
  Box?: () =>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | undefined
    | undefined
  Container?: () => IContainer[] | IContainer[] | undefined
  Stack?: () => IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: () => IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: () => ITypography[] | ITypography[] | undefined
  Divider?: () => IDivider[] | IDivider[] | undefined
  Chip?: () => IChip[] | IChip[] | undefined
  Avatar?: () => IAvatar[] | IAvatar[] | undefined
  List?: () => IList[] | IList[] | undefined

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[] | IAutocomplete<T>[] | undefined
  Button?: () => IButton[] | IButton[] | undefined
  IconButton?: () => IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: () => IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: () => ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: () => IRadioButton[] | IRadioButton[] | undefined
  Switch?: () => ISwitch[] | ISwitch[] | undefined
  TextField?: () => ITextField[] | ITextField[] | undefined
  FloatingActionButton?: () => IFloatingActionButton[] | IFloatingActionButton[] | undefined
}
export interface IContainer extends CommonTypes {
  PropsForThisContainer?: ContainerProps
  OrderThisContainerTo?: number | undefined
}
export interface IStack extends CommonTypes {
  PropsForThisStack?: StackProps
  OrderThisStackTo?: number | undefined
}

// Surface ============================================================================== Surface Interface
export interface IPaper extends CommonTypes {
  PropsForThisPaper?: PaperProps
  OrderThisPaperTo?: number | undefined
  Box?: () =>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | Array<Pick<IBox, 'PropsForThisBox' | 'WhateverIwantAsChild' | 'OrderThisBoxTo'>>
    | undefined
    | undefined
  Container?: () => IContainer[] | IContainer[] | undefined
  Stack?: () => IStack[] | IStack[] | undefined

  /** Surfaces Interface */
  Paper?: () => IPaper[] | IPaper[] | undefined

  /** Data Display Interface */
  Typography?: () => ITypography[] | ITypography[] | undefined
  Divider?: () => IDivider[] | IDivider[] | undefined
  Chip?: () => IChip[] | IChip[] | undefined
  Avatar?: () => IAvatar[] | IAvatar[] | undefined
  List?: () => IList[] | IList[] | undefined

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[] | IAutocomplete<T>[] | undefined
  Button?: () => IButton[] | IButton[] | undefined
  IconButton?: () => IIconButton[] | IIconButton[] | undefined
  ButtonGroup?: () => IButtonGroup[] | IButtonGroup[] | undefined
  Checkbox?: () => ICheckbox[] | ICheckbox[] | undefined
  RadioButton?: () => IRadioButton[] | IRadioButton[] | undefined
  Switch?: () => ISwitch[] | ISwitch[] | undefined
  TextField?: () => ITextField[] | ITextField[] | undefined
  FloatingActionButton?: () => IFloatingActionButton[] | IFloatingActionButton[] | undefined
}

// Data Display ================================================================== Data Display Interface
export interface ITypography extends CommonTypes {
  PropsForThisTypography?: TypographyProps
  OrderThisTypographyTo?: number | undefined
}
export interface IDivider extends CommonTypes {
  PropsForThisDivider?: DividerProps
  OrderThisDividerTo?: number | undefined
}
export interface IChip extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisChip?: ChipProps
  OrderThisChipTo?: number | undefined
}

export interface IAvatar extends CommonTypes {
  PropsForThisAvatar?: AvatarProps
  OrderThisAvatarTo?: number | undefined
}
export interface IBadge extends CommonTypes {
  PropsForThisBadge?: BadgeProps
  OrderThisBadgeTo?: number | undefined
}

export interface ITable extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisTable?: DataGridProps
  OrderThisTableTo?: number | undefined
  COLUMNS?: GridColDef[]
  ROWS?: GridRowsProp
}

export interface ITooltip extends CommonTypes {
  PropsForThisTooltip?: TooltipProps
  OrderThisTooltipTo?: number | undefined
  title?: string
}

//  List
export interface IList extends CommonTypes {
  PropsForThisList?: ListProps
  OrderThisListTo?: number | undefined
  ListItemButton?: () => IListItemButton[] | undefined
  ListItemAvatar?: () => IListItemAvatar[] | undefined
}
export interface IListItemButton extends CommonTypes {
  PropsForThisListItemButton?: ListItemProps
  ListIcon?: React.ReactNode | JSX.Element | undefined
  ListText?: React.ReactNode | JSX.Element | undefined
}
export interface IListItemAvatar extends CommonTypes {
  PropsForThisListAvatar?: ListItemProps
  Avatar?: React.ReactNode | JSX.Element | undefined
  ListText?: React.ReactNode | JSX.Element | undefined
}

// Inputs ============================================================================== Inputs Interface
export interface IAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> {
  PropsForThisAutocomplete?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
  OrderThisAutoCompleteTo?: number | undefined
  option: ReadonlyArray<T>
  label?: string
}

export interface IButton extends CommonTypes {
  PropsForThisButton?: ButtonProps
  OrderThisButtonTo?: number | undefined
}

export interface IIconButton extends CommonTypes {
  PropsForThisIconButton?: IconButtonProps
  OrderThisIconButtonTo?: number | undefined
}

export interface IButtonGroup extends CommonTypes {
  PropsForThisButtonGroup?: ButtonGroupProps
  OrderThisButtonGroupTo?: number | undefined
  Button?: () => IButton[] | undefined
}

export interface ICheckbox extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisCheckbox?: CheckboxProps
  OrderThisCheckboxTo?: number | undefined
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface IRadioButton extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisRadioButton?: RadioProps
  OrderThisRadioButtonTo?: number | undefined
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ISwitch extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisSwitch?: SwitchProps
  OrderThisSwitchTo?: number | undefined
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ITextField extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  PropsForThisTextField?: TextFieldProps
  OrderThisTextFieldTo?: number | undefined
}

export interface IFloatingActionButton extends CommonTypes {
  Property?: FabProps
}

// Gluttony ===================================================================== Export Gluttony Component
export const Gluttony = ({ FoodForGluttony }: IGluttony) => {
  return (
    <>
      {FoodForGluttony?.map((row, key) => (
        // Mapping ======================================================= ParentRoot As Devourobject
        <Box key={key} sx={[{ display: 'flex', flexDirection: 'column' }, row.StyleForGluttonyParentRoot as CSSObject]}>
          {row.WhateverIwantAsChild}

          {/**  ( Root Parent ============================================================================> Grid )
         *
         *
         *
         *
         *













        */}
          {row?.GridContainer?.()?.map((row, key) => (
            // Mapping ==================================================== Grid Container
            <Grid container key={key} style={{ order: row.OrderThisGridContainerTo }} {...row.PropsForThisGridContainer}>
              {row.WhateverIwantAsChild}

              {row?.GridItem?.()?.map((row, key) => (
                // Mapping ==================================================== Grid Item
                <Grid item key={key} style={{ display: 'flex', flexDirection: 'column' }} {...row.PropsForThisGridItem}>
                  {row.WhateverIwantAsChild}

                  {row?.Box?.()?.map((row, key) => (
                    <Box key={key} style={{ order: row.OrderThisBoxTo }} {...row.PropsForThisBox}>
                      {row.WhateverIwantAsChild}
                    </Box>
                  ))}

                  {row?.Container?.()?.map((row, key) => (
                    <Container key={key} style={{ order: row.OrderThisContainerTo }} {...row.PropsForThisContainer}>
                      {row.WhateverIwantAsChild}
                    </Container>
                  ))}

                  {row?.Stack?.()?.map((row, key) => (
                    <Stack key={key} style={{ order: row.OrderThisStackTo }} {...row.PropsForThisStack}>
                      {row.WhateverIwantAsChild}
                    </Stack>
                  ))}

                  {row?.Paper?.()?.map((row, key) => (
                    <Paper key={key} style={{ order: row.OrderThisPaperTo }} {...row.PropsForThisPaper}>
                      {row.WhateverIwantAsChild}
                    </Paper>
                  ))}

                  {row?.Typography?.()?.map((row, key) => (
                    <Typography key={key} style={{ order: row.OrderThisTypographyTo }} {...row.PropsForThisTypography}>
                      {row.WhateverIwantAsChild}
                    </Typography>
                  ))}

                  {row?.Divider?.()?.map((row, key) => (
                    <Divider key={key} style={{ order: row.OrderThisDividerTo }} {...row.PropsForThisDivider}>
                      {row.WhateverIwantAsChild}
                    </Divider>
                  ))}

                  {row?.Chip?.()?.map((row, key) => (
                    <Chip key={key} style={{ order: row.OrderThisChipTo }} {...row.PropsForThisChip} />
                  ))}

                  {row?.Avatar?.()?.map((row, key) => (
                    <Avatar key={key} style={{ order: row.OrderThisAvatarTo }} {...row.PropsForThisAvatar}>
                      {row.WhateverIwantAsChild}
                    </Avatar>
                  ))}

                  {/**  RootParent  =============================================== List*/}
                  {row?.List?.()?.map((row, key) => (
                    <List key={key} style={{ order: row.OrderThisListTo }} {...row.PropsForThisList}>
                      {row.WhateverIwantAsChild}

                      {row.ListItemButton?.()?.map((row, key) => (
                        <ListItem key={key} {...row.PropsForThisListItemButton}>
                          {row.WhateverIwantAsChild}
                          <ListItemButton>
                            <ListItemIcon>{row.ListIcon}</ListItemIcon>
                            <ListItemText primary={row.ListText} />
                          </ListItemButton>
                        </ListItem>
                      ))}

                      {row.ListItemAvatar?.()?.map((row, key) => (
                        <ListItem key={key} {...row.PropsForThisListAvatar}>
                          {row.WhateverIwantAsChild}
                          <ListItemAvatar>
                            <Avatar>{row.Avatar}</Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={row.ListText} />
                        </ListItem>
                      ))}
                    </List>
                  ))}

                  {/**  Root Parent  =============================================== Inputs*/}
                  {row?.Autocomplete?.()?.map((row, key) => (
                    <Autocomplete
                      key={key}
                      disablePortal
                      style={{ order: row.OrderThisAutoCompleteTo }}
                      options={row.option}
                      renderInput={(params) => <TextField {...params} label={row.label} />}
                      {...row.PropsForThisAutocomplete}
                    />
                  ))}

                  {row?.Button?.()?.map((row, key) => (
                    <Button key={key} style={{ order: row.OrderThisButtonTo }} {...row.PropsForThisButton} />
                  ))}

                  {row?.IconButton?.()?.map((row, key) => (
                    <IconButton key={key} style={{ order: row.OrderThisIconButtonTo }} {...row.PropsForThisIconButton} />
                  ))}

                  {row?.ButtonGroup?.()?.map((row, key) => (
                    <ButtonGroup key={key} style={{ order: row.OrderThisButtonGroupTo }} {...row.PropsForThisButtonGroup}>
                      {row.Button?.()?.map((row, key) => (
                        <Button key={key} {...row.PropsForThisButton}>
                          {row.WhateverIwantAsChild}
                        </Button>
                      ))}
                    </ButtonGroup>
                  ))}

                  {row?.Checkbox?.()?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.OrderThisCheckboxTo }}
                      control={<Checkbox {...row.PropsForThisCheckbox} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.RadioButton?.()?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.OrderThisRadioButtonTo }}
                      control={<Radio {...row.PropsForThisRadioButton} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.Switch?.()?.map((row, key) => (
                    <FormControlLabel
                      key={key}
                      style={{ order: row.OrderThisSwitchTo }}
                      control={<Switch {...row.PropsForThisSwitch} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}

                  {row?.TextField?.()?.map((row, key) => (
                    <TextField key={key} style={{ order: row.OrderThisTextFieldTo }} {...row.PropsForThisTextField} />
                  ))}

                  {row?.FloatingActionButton?.()?.map((row, key) => (
                    <Fab key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Fab>
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
          {row?.Box?.()?.map((row, key) => (
            <Box key={key} style={{ order: row.OrderThisBoxTo, display: 'flex', flexDirection: 'column' }} {...row.PropsForThisBox}>
              {row.WhateverIwantAsChild}

              {row?.Box?.()?.map((row, key) => (
                <Box key={key} style={{ order: row.OrderThisBoxTo }} {...row.PropsForThisBox}>
                  {row.WhateverIwantAsChild}
                </Box>
              ))}

              {row?.Container?.()?.map((row, key) => (
                <Container key={key} style={{ order: row.OrderThisContainerTo }} {...row.PropsForThisContainer}>
                  {row.WhateverIwantAsChild}
                </Container>
              ))}

              {row?.Stack?.()?.map((row, key) => (
                <Stack key={key} style={{ order: row.OrderThisStackTo }} {...row.PropsForThisStack}>
                  {row.WhateverIwantAsChild}
                </Stack>
              ))}

              {row?.Paper?.()?.map((row, key) => (
                <Paper key={key} style={{ order: row.OrderThisPaperTo }} {...row.PropsForThisPaper}>
                  {row.WhateverIwantAsChild}
                </Paper>
              ))}

              {row?.Typography?.()?.map((row, key) => (
                <Typography key={key} style={{ order: row.OrderThisTypographyTo }} {...row.PropsForThisTypography}>
                  {row.WhateverIwantAsChild}
                </Typography>
              ))}

              {row?.Divider?.()?.map((row, key) => (
                <Divider key={key} style={{ order: row.OrderThisDividerTo }} {...row.PropsForThisDivider}>
                  {row.WhateverIwantAsChild}
                </Divider>
              ))}

              {row?.Chip?.()?.map((row, key) => (
                <Chip key={key} style={{ order: row.OrderThisChipTo }} {...row.PropsForThisChip} />
              ))}

              {row?.Avatar?.()?.map((row, key) => (
                <Avatar key={key} style={{ order: row.OrderThisAvatarTo }} {...row.PropsForThisAvatar}>
                  {row.WhateverIwantAsChild}
                </Avatar>
              ))}

              {/**  RootParent  =============================================== List*/}
              {row?.List?.()?.map((row, key) => (
                <List key={key} style={{ order: row.OrderThisListTo }} {...row.PropsForThisList}>
                  {row.WhateverIwantAsChild}

                  {row.ListItemButton?.()?.map((row, key) => (
                    <ListItem key={key} {...row.PropsForThisListItemButton}>
                      {row.WhateverIwantAsChild}
                      <ListItemButton>
                        <ListItemIcon>{row.ListIcon}</ListItemIcon>
                        <ListItemText primary={row.ListText} />
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {row.ListItemAvatar?.()?.map((row, key) => (
                    <ListItem key={key} {...row.PropsForThisListAvatar}>
                      {row.WhateverIwantAsChild}
                      <ListItemAvatar>
                        <Avatar>{row.Avatar}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.ListText} />
                    </ListItem>
                  ))}
                </List>
              ))}

              {/**  Root Parent  =============================================== Inputs*/}
              {row?.Autocomplete?.()?.map((row, key) => (
                <Autocomplete
                  key={key}
                  disablePortal
                  style={{ order: row.OrderThisAutoCompleteTo }}
                  options={row.option}
                  renderInput={(params) => <TextField {...params} label={row.label} />}
                  {...row.PropsForThisAutocomplete}
                />
              ))}

              {row?.Button?.()?.map((row, key) => (
                <Button key={key} style={{ order: row.OrderThisButtonTo }} {...row.PropsForThisButton} />
              ))}

              {row?.IconButton?.()?.map((row, key) => (
                <IconButton key={key} style={{ order: row.OrderThisIconButtonTo }} {...row.PropsForThisIconButton} />
              ))}

              {row?.ButtonGroup?.()?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.OrderThisButtonGroupTo }} {...row.PropsForThisButtonGroup}>
                  {row.Button?.()?.map((row, key) => (
                    <Button key={key} {...row.PropsForThisButton}>
                      {row.WhateverIwantAsChild}
                    </Button>
                  ))}
                </ButtonGroup>
              ))}

              {row?.Checkbox?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisCheckboxTo }}
                  control={<Checkbox {...row.PropsForThisCheckbox} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.RadioButton?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisRadioButtonTo }}
                  control={<Radio {...row.PropsForThisRadioButton} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.Switch?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisSwitchTo }}
                  control={<Switch {...row.PropsForThisSwitch} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.TextField?.()?.map((row, key) => (
                <TextField key={key} style={{ order: row.OrderThisTextFieldTo }} {...row.PropsForThisTextField} />
              ))}

              {row?.FloatingActionButton?.()?.map((row, key) => (
                <Fab key={key} {...row.Property}>
                  {row.WhateverIwantAsChild}
                </Fab>
              ))}
            </Box>
          ))}

          {/**  ( RootParent )
         *
         *
         *
         *
         *













        */}
          {row?.Container?.()?.map((row, key) => (
            <Container key={key} style={{ order: row.OrderThisContainerTo }} {...row.PropsForThisContainer}>
              {row.WhateverIwantAsChild}
            </Container>
          ))}
          {row?.Stack?.()?.map((row, key) => (
            <Stack key={key} style={{ order: row.OrderThisStackTo }} {...row.PropsForThisStack}>
              {row.WhateverIwantAsChild}
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

          {row?.Paper?.()?.map((row, key) => (
            <Paper key={key} style={{ order: row.OrderThisPaperTo, display: 'flex', flexDirection: 'column' }} {...row.PropsForThisPaper}>
              {row.WhateverIwantAsChild}

              {row?.Box?.()?.map((row, key) => (
                <Box key={key} style={{ order: row.OrderThisBoxTo }} {...row.PropsForThisBox}>
                  {row.WhateverIwantAsChild}
                </Box>
              ))}

              {row?.Container?.()?.map((row, key) => (
                <Container key={key} style={{ order: row.OrderThisContainerTo }} {...row.PropsForThisContainer}>
                  {row.WhateverIwantAsChild}
                </Container>
              ))}

              {row?.Stack?.()?.map((row, key) => (
                <Stack key={key} style={{ order: row.OrderThisStackTo }} {...row.PropsForThisStack}>
                  {row.WhateverIwantAsChild}
                </Stack>
              ))}

              {row?.Paper?.()?.map((row, key) => (
                <Paper key={key} style={{ order: row.OrderThisPaperTo }} {...row.PropsForThisPaper}>
                  {row.WhateverIwantAsChild}
                </Paper>
              ))}

              {row?.Typography?.()?.map((row, key) => (
                <Typography key={key} style={{ order: row.OrderThisTypographyTo }} {...row.PropsForThisTypography}>
                  {row.WhateverIwantAsChild}
                </Typography>
              ))}

              {row?.Divider?.()?.map((row, key) => (
                <Divider key={key} style={{ order: row.OrderThisDividerTo }} {...row.PropsForThisDivider}>
                  {row.WhateverIwantAsChild}
                </Divider>
              ))}

              {row?.Chip?.()?.map((row, key) => (
                <Chip key={key} style={{ order: row.OrderThisChipTo }} {...row.PropsForThisChip} />
              ))}

              {row?.Avatar?.()?.map((row, key) => (
                <Avatar key={key} style={{ order: row.OrderThisAvatarTo }} {...row.PropsForThisAvatar}>
                  {row.WhateverIwantAsChild}
                </Avatar>
              ))}

              {/**  RootParent  =============================================== List*/}
              {row?.List?.()?.map((row, key) => (
                <List key={key} style={{ order: row.OrderThisListTo }} {...row.PropsForThisList}>
                  {row.WhateverIwantAsChild}

                  {row.ListItemButton?.()?.map((row, key) => (
                    <ListItem key={key} {...row.PropsForThisListItemButton}>
                      {row.WhateverIwantAsChild}
                      <ListItemButton>
                        <ListItemIcon>{row.ListIcon}</ListItemIcon>
                        <ListItemText primary={row.ListText} />
                      </ListItemButton>
                    </ListItem>
                  ))}

                  {row.ListItemAvatar?.()?.map((row, key) => (
                    <ListItem key={key} {...row.PropsForThisListAvatar}>
                      {row.WhateverIwantAsChild}
                      <ListItemAvatar>
                        <Avatar>{row.Avatar}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={row.ListText} />
                    </ListItem>
                  ))}
                </List>
              ))}

              {/**  Root Parent  =============================================== Inputs*/}
              {row?.Autocomplete?.()?.map((row, key) => (
                <Autocomplete
                  key={key}
                  disablePortal
                  style={{ order: row.OrderThisAutoCompleteTo }}
                  options={row.option}
                  renderInput={(params) => <TextField {...params} label={row.label} />}
                  {...row.PropsForThisAutocomplete}
                />
              ))}

              {row?.Button?.()?.map((row, key) => (
                <Button key={key} style={{ order: row.OrderThisButtonTo }} {...row.PropsForThisButton} />
              ))}

              {row?.IconButton?.()?.map((row, key) => (
                <IconButton key={key} style={{ order: row.OrderThisIconButtonTo }} {...row.PropsForThisIconButton} />
              ))}

              {row?.ButtonGroup?.()?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.OrderThisButtonGroupTo }} {...row.PropsForThisButtonGroup}>
                  {row.Button?.()?.map((row, key) => (
                    <Button key={key} {...row.PropsForThisButton}>
                      {row.WhateverIwantAsChild}
                    </Button>
                  ))}
                </ButtonGroup>
              ))}

              {row?.Checkbox?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisCheckboxTo }}
                  control={<Checkbox {...row.PropsForThisCheckbox} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.RadioButton?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisRadioButtonTo }}
                  control={<Radio {...row.PropsForThisRadioButton} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.Switch?.()?.map((row, key) => (
                <FormControlLabel
                  key={key}
                  style={{ order: row.OrderThisSwitchTo }}
                  control={<Switch {...row.PropsForThisSwitch} />}
                  label={row.label}
                  {...row.FromControlLabelProperty}
                />
              ))}

              {row?.TextField?.()?.map((row, key) => (
                <TextField key={key} style={{ order: row.OrderThisTextFieldTo }} {...row.PropsForThisTextField} />
              ))}

              {row?.FloatingActionButton?.()?.map((row, key) => (
                <Fab key={key} {...row.Property}>
                  {row.WhateverIwantAsChild}
                </Fab>
              ))}
            </Paper>
          ))}

          {row?.Typography?.()?.map((row, key) => (
            <Typography key={key} style={{ order: row.OrderThisTypographyTo }} {...row.PropsForThisTypography}>
              {row.WhateverIwantAsChild}
            </Typography>
          ))}

          {row?.Divider?.()?.map((row, key) => (
            <Divider key={key} style={{ order: row.OrderThisDividerTo }} {...row.PropsForThisDivider}>
              {row.WhateverIwantAsChild}
            </Divider>
          ))}

          {row?.Chip?.()?.map((row, key) => (
            <Chip key={key} style={{ order: row.OrderThisChipTo }} {...row.PropsForThisChip} />
          ))}

          {row?.Avatar?.()?.map((row, key) => (
            <Avatar key={key} style={{ order: row.OrderThisAvatarTo }} {...row.PropsForThisAvatar}>
              {row.WhateverIwantAsChild}
            </Avatar>
          ))}

          {row?.Badge?.()?.map((row, key) => (
            <Badge key={key} style={{ order: row.OrderThisBadgeTo }} {...row.PropsForThisBadge}>
              {row.WhateverIwantAsChild}
            </Badge>
          ))}

          {row?.Table?.()?.map((row, key) => (
            <DataGrid
              key={key}
              columns={
                row.COLUMNS || [
                  {
                    field: 'col1',
                    headerName: 'This Is COLUMN 1',
                    width: 90,
                  },
                  {
                    field: 'col2',
                    headerName: 'This Is COLUMN 2',
                    width: 150,
                    editable: true,
                  },
                ]
              }
              rows={
                row.ROWS || [
                  { col1: 'This is Row 1 in Col 1', col2: 'This is Row 1 in Col 2' },
                  { col1: 'This is Row 2 in Col 1', col2: 'This is Row 2 in Col 2' },
                ]
              }
              style={{ order: row.OrderThisTableTo }}
              {...row.PropsForThisTable}
            />
          ))}

          {row?.Tooltip?.()?.map((row, key) => (
            <Tooltip key={key} title={row.title} style={{ order: row.OrderThisTooltipTo }} {...row.PropsForThisTooltip}>
              <Box>{row.WhateverIwantAsChild}</Box>
            </Tooltip>
          ))}

          {/**  RootParent  =============================================== List*/}
          {row?.List?.()?.map((row, key) => (
            <List key={key} style={{ order: row.OrderThisListTo }} {...row.PropsForThisList}>
              {row.WhateverIwantAsChild}

              {row.ListItemButton?.()?.map((row, key) => (
                <ListItem key={key} {...row.PropsForThisListItemButton}>
                  {row.WhateverIwantAsChild}
                  <ListItemButton>
                    <ListItemIcon>{row.ListIcon}</ListItemIcon>
                    <ListItemText primary={row.ListText} />
                  </ListItemButton>
                </ListItem>
              ))}

              {row.ListItemAvatar?.()?.map((row, key) => (
                <ListItem key={key} {...row.PropsForThisListAvatar}>
                  {row.WhateverIwantAsChild}
                  <ListItemAvatar>
                    <Avatar>{row.Avatar}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={row.ListText} />
                </ListItem>
              ))}
            </List>
          ))}

          {/**  Root Parent  =============================================== Inputs*/}
          {row?.Autocomplete?.()?.map((row, key) => (
            <Autocomplete
              key={key}
              disablePortal
              style={{ order: row.OrderThisAutoCompleteTo }}
              options={row.option}
              renderInput={(params) => <TextField {...params} label={row.label} />}
              {...row.PropsForThisAutocomplete}
            />
          ))}

          {row?.Button?.()?.map((row, key) => (
            <Button key={key} style={{ order: row.OrderThisButtonTo }} {...row.PropsForThisButton} />
          ))}

          {row?.IconButton?.()?.map((row, key) => (
            <IconButton key={key} style={{ order: row.OrderThisIconButtonTo }} {...row.PropsForThisIconButton} />
          ))}

          {row?.ButtonGroup?.()?.map((row, key) => (
            <ButtonGroup key={key} style={{ order: row.OrderThisButtonGroupTo }} {...row.PropsForThisButtonGroup}>
              {row.Button?.()?.map((row, key) => (
                <Button key={key} {...row.PropsForThisButton}>
                  {row.WhateverIwantAsChild}
                </Button>
              ))}
            </ButtonGroup>
          ))}

          {row?.Checkbox?.()?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.OrderThisCheckboxTo }}
              control={<Checkbox {...row.PropsForThisCheckbox} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.RadioButton?.()?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.OrderThisRadioButtonTo }}
              control={<Radio {...row.PropsForThisRadioButton} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.Switch?.()?.map((row, key) => (
            <FormControlLabel
              key={key}
              style={{ order: row.OrderThisSwitchTo }}
              control={<Switch {...row.PropsForThisSwitch} />}
              label={row.label}
              {...row.FromControlLabelProperty}
            />
          ))}

          {row?.TextField?.()?.map((row, key) => (
            <TextField key={key} style={{ order: row.OrderThisTextFieldTo }} {...row.PropsForThisTextField} />
          ))}

          {row?.FloatingActionButton?.()?.map((row, key) => (
            <Fab key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Fab>
          ))}
        </Box>
      ))}
    </>
  )
}
