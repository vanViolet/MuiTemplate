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
  TooltipProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import { DataGridProps, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import React from 'react'

export type ConvertToOptional<A> = {
  [P in keyof A]?: A[P]
}

interface CommonTypes {
  WhateverIwantAsChild?: React.ReactNode | JSX.Element | JSX.Element[] | undefined | undefined
  order?: number | undefined
  style?: SxProps<Theme> | undefined
}

interface IGluttony {
  FoodForGluttony?: IFoodForGluttony[] | undefined
}

export interface IFoodForGluttony extends Omit<CommonTypes, 'order'> {
  StyleForGluttonyParentRoot?: SxProps<Theme> | undefined

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
}

// Layout ============================================================================== Layout Interface

export type IBoxNotNested = Pick<IBox, 'props' | 'WhateverIwantAsChild' | 'order' | 'style'>

export interface IBox extends CommonTypes {
  props?: BoxProps
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
}

// Data Display ================================================================== Data Display Interface
export interface ITypography extends CommonTypes {
  props?: TypographyProps
}
export interface IDivider extends CommonTypes {
  props?: DividerProps
}
export interface IChip extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: ChipProps
}

export interface IAvatar extends CommonTypes {
  props?: AvatarProps
}
export interface IBadge extends CommonTypes {
  props?: BadgeProps
}

export interface ITable extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: DataGridProps
  COLUMNS?: GridColDef[]
  ROWS?: GridRowsProp
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
> extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
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

export interface ICheckbox extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: CheckboxProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface IRadioButton extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: RadioProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ISwitch extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: SwitchProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

export interface ITextField extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  props?: TextFieldProps
}

// Gluttony ===================================================================== Export Gluttony Component
export const Gluttony = ({ FoodForGluttony }: IGluttony) => {
  return (
    <>
      {FoodForGluttony?.map((row, key) => (
        // Mapping ======================================================= ParentRoot As Devourobject
        <Box key={key} style={{ display: 'flex', flexDirection: 'column' }} sx={row.StyleForGluttonyParentRoot}>
          {row.WhateverIwantAsChild}

          {/**  ( Root Parent ============================================================================> Grid )

           */}
          {row?.GridContainer?.map((row, key) => (
            // Mapping ==================================================== Grid Container
            <Grid container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}

              {row?.GridItem?.map((row, key) => (
                // Mapping ==================================================== Grid Item
                <Grid item key={key} style={{ display: 'flex', flexDirection: 'column' }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}

                  {row?.Box?.map((row, key) => (
                    <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Box>
                  ))}

                  {row?.Container?.map((row, key) => (
                    <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Container>
                  ))}

                  {row?.Stack?.map((row, key) => (
                    <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Stack>
                  ))}

                  {row?.Paper?.map((row, key) => (
                    <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Paper>
                  ))}

                  {row?.Typography?.map((row, key) => (
                    <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Typography>
                  ))}

                  {row?.Divider?.map((row, key) => (
                    <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
                    </Divider>
                  ))}

                  {row?.Chip?.map((row, key) => (
                    <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  ))}

                  {row?.Avatar?.map((row, key) => (
                    <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
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

                  {row?.Button?.map((row, key) => (
                    <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  ))}

                  {row?.IconButton?.map((row, key) => (
                    <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
                  ))}

                  {row?.ButtonGroup?.map((row, key) => (
                    <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                      {row.Button?.map((row, key) => (
                        <Button key={key} sx={row.style} {...row.props}>
                          {row.WhateverIwantAsChild}
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
                    <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
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
            <Box key={key} style={{ order: row.order, display: 'flex', flexDirection: 'column' }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}

              {row?.Box?.map((row, key) => (
                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Box>
              ))}

              {row?.Container?.map((row, key) => (
                <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Container>
              ))}

              {row?.Stack?.map((row, key) => (
                <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Stack>
              ))}

              {row?.Paper?.map((row, key) => (
                <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Paper>
              ))}

              {row?.Typography?.map((row, key) => (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Typography>
              ))}

              {row?.Divider?.map((row, key) => (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Divider>
              ))}

              {row?.Chip?.map((row, key) => (
                <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.Avatar?.map((row, key) => (
                <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
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

              {row?.Button?.map((row, key) => (
                <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.IconButton?.map((row, key) => (
                <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.ButtonGroup?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.Button?.map((row, key) => (
                    <Button key={key} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
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
                <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
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
              {row.WhateverIwantAsChild}
            </Container>
          ))}
          {row?.Stack?.map((row, key) => (
            <Stack key={key} style={{ order: row.order }} {...row.props}>
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

          {row?.Paper?.map((row, key) => (
            <Paper key={key} style={{ order: row.order, display: 'flex', flexDirection: 'column' }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}

              {row?.Box?.map((row, key) => (
                <Box key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Box>
              ))}

              {row?.Container?.map((row, key) => (
                <Container key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Container>
              ))}

              {row?.Stack?.map((row, key) => (
                <Stack key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Stack>
              ))}

              {row?.Paper?.map((row, key) => (
                <Paper key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Paper>
              ))}

              {row?.Typography?.map((row, key) => (
                <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Typography>
              ))}

              {row?.Divider?.map((row, key) => (
                <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
                </Divider>
              ))}

              {row?.Chip?.map((row, key) => (
                <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.Avatar?.map((row, key) => (
                <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
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

              {row?.Button?.map((row, key) => (
                <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.IconButton?.map((row, key) => (
                <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}

              {row?.ButtonGroup?.map((row, key) => (
                <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
                  {row.Button?.map((row, key) => (
                    <Button key={key} sx={row.style} {...row.props}>
                      {row.WhateverIwantAsChild}
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
                <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
              ))}
            </Paper>
          ))}

          {row?.Typography?.map((row, key) => (
            <Typography key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}
            </Typography>
          ))}

          {row?.Divider?.map((row, key) => (
            <Divider key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}
            </Divider>
          ))}

          {row?.Chip?.map((row, key) => (
            <Chip key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
          ))}

          {row?.Avatar?.map((row, key) => (
            <Avatar key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.WhateverIwantAsChild}
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

          {row?.Button?.map((row, key) => (
            <Button key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
          ))}

          {row?.IconButton?.map((row, key) => (
            <IconButton key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
          ))}

          {row?.ButtonGroup?.map((row, key) => (
            <ButtonGroup key={key} style={{ order: row.order }} sx={row.style} {...row.props}>
              {row.Button?.map((row, key) => (
                <Button key={key} sx={row.style} {...row.props}>
                  {row.WhateverIwantAsChild}
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
            <TextField key={key} style={{ order: row.order }} sx={row.style} {...row.props} />
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
  // Menu: ConvertToOptional<MenuProps>
  // MenuItem: MenuItemProps
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
