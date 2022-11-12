import {
  Autocomplete,
  AutocompleteProps,
  Avatar,
  AvatarProps,
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
  Stack,
  StackProps,
  SxProps,
  TextField,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material'
import React from 'react'

interface CommonTypes {
  WhateverIwantAsChild?: React.ReactNode | JSX.Element | JSX.Element[] | undefined
}

interface IGluttony {
  DevourArraysObject?: IDevourObject[]
}

interface IDevourObject extends CommonTypes {
  StylingParentRootForThisObject?: SxProps<Theme> | undefined
  /** Layout Interface */
  GridContainer?: () => IGridContainer[]
  Box?: () => IBox[]
  Container?: () => IContainer[]
  Stack?: () => IStack[]

  /** Surfaces Interface */
  Paper?: () => IPaper[]

  /** Data Display Interface */
  Typography?: () => ITypography[]
  Divider?: () => IDivider[]
  Chip?: () => IChip[]
  Avatar?: () => IAvatar[]
  List?: () => IList[]

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[]
  Button?: () => IButton[]
  IconButton?: () => IIconButton[]
  ButtonGroup?: () => IButtonGroup[]
  Checkbox?: () => ICheckbox[]
}

export interface IGridContainer extends CommonTypes {
  Property?: Omit<GridProps, 'item' | 'container'>
  GridItem?: () => IGridItem[]
}

export interface IGridItem extends CommonTypes {
  Property?: Omit<GridProps, 'item' | 'container'>

  /** Layout Interface */
  Box?: () => IBox[]
  Container?: () => IContainer[]
  Stack?: () => IStack[]

  /** Surfaces Interface */
  Paper?: () => IPaper[]

  /** Data Display Interface */
  Typography?: () => ITypography[]
  Divider?: () => IDivider[]
  Chip?: () => IChip[]
  Avatar?: () => IAvatar[]
  List?: () => IList[]

  /** Inputs Interface */
  Autocomplete?: <T>() => IAutocomplete<T>[]
  Button?: () => IButton[]
  IconButton?: () => IIconButton[]
  ButtonGroup?: () => IButtonGroup[]
  Checkbox?: () => ICheckbox[]
}

// Layout ============================================================================== Layout Interface
export interface IBox extends CommonTypes {
  Property?: BoxProps
}
export interface IContainer extends CommonTypes {
  Property?: ContainerProps
}
export interface IStack extends CommonTypes {
  Property?: StackProps
}

// Surface ============================================================================== Surface Interface
export interface IPaper extends CommonTypes {
  Property?: PaperProps
}

// Data Display ================================================================== Data Display Interface
export interface ITypography extends CommonTypes {
  Property?: TypographyProps
}
export interface IDivider extends CommonTypes {
  Property?: DividerProps
}
export interface IChip extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  Property?: ChipProps
}
export interface IAvatar extends CommonTypes {
  Property?: AvatarProps
}
//  List
export interface IList extends CommonTypes {
  Property?: ListProps
  ListItemButton?: () => IListItemButton[]
  ListItemAvatar?: () => IListItemAvatar[]
}
export interface IListItemButton extends CommonTypes {
  Property?: ListItemProps
  ListIcon?: React.ReactNode | JSX.Element | undefined
  ListText?: React.ReactNode | JSX.Element | undefined
}
export interface IListItemAvatar extends CommonTypes {
  Property?: ListItemProps
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
  Property?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo, ChipComponent>
  option: ReadonlyArray<T>
  label?: string
}

export interface IButton extends CommonTypes {
  Property?: ButtonProps
}

export interface IIconButton extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  Property?: IconButtonProps
}

export interface IButtonGroup extends CommonTypes {
  Property?: ButtonGroupProps
  Button?: () => IButton[]
}

export interface ICheckbox extends Omit<CommonTypes, 'WhateverIwantAsChild'> {
  Property?: CheckboxProps
  FromControlLabelProperty?: FormControlLabelProps
  label?: React.ReactNode | undefined
}

// Gluttony ===================================================================== Export Gluttony Component
export const Gluttony = ({ DevourArraysObject }: IGluttony) => {
  return (
    <>
      {DevourArraysObject?.map((row, key) => (
        // Mapping ======================================================= ParentRoot As Devourobject
        <Box key={key} sx={row.StylingParentRootForThisObject}>
          {row.WhateverIwantAsChild}
          {row?.GridContainer?.().map((row, key) => (
            // Mapping ==================================================== Grid Container
            <Grid key={key} container {...row.Property}>
              {row.WhateverIwantAsChild}

              {row?.GridItem?.().map((row, key) => (
                // Mapping ==================================================== Grid Item
                <Grid key={key} item {...row.Property}>
                  {row.WhateverIwantAsChild}

                  {row?.Box?.().map((row, key) => (
                    <Box key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Box>
                  ))}

                  {row?.Container?.().map((row, key) => (
                    <Container key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Container>
                  ))}

                  {row?.Stack?.().map((row, key) => (
                    <Stack key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Stack>
                  ))}

                  {row?.Paper?.().map((row, key) => (
                    <Paper key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Paper>
                  ))}

                  {row?.Paper?.().map((row, key) => (
                    <Paper key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Paper>
                  ))}

                  {row?.Typography?.().map((row, key) => (
                    <Typography key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Typography>
                  ))}

                  {row?.Divider?.().map((row, key) => (
                    <Divider key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Divider>
                  ))}

                  {row?.Chip?.().map((row, key) => (
                    <Chip key={key} {...row.Property} />
                  ))}

                  {row?.Avatar?.().map((row, key) => (
                    <Avatar key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Avatar>
                  ))}

                  {/**  List  =============================================== Depends ON Grid Item*/}
                  {row?.List?.().map((row, key) => (
                    <List key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}

                      {row.ListItemButton?.().map((row, key) => (
                        <ListItem key={key} {...row.Property}>
                          {row.WhateverIwantAsChild}
                          <ListItemButton>
                            <ListItemIcon>{row.ListIcon}</ListItemIcon>
                            <ListItemText primary={row.ListText} />
                          </ListItemButton>
                        </ListItem>
                      ))}

                      {row.ListItemAvatar?.().map((row, key) => (
                        <ListItem key={key} {...row.Property}>
                          {row.WhateverIwantAsChild}
                          <ListItemAvatar>
                            <Avatar>{row.Avatar}</Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={row.ListText} />
                        </ListItem>
                      ))}
                    </List>
                  ))}

                  {row?.Autocomplete?.().map((row, key) => (
                    <Autocomplete
                      key={key}
                      disablePortal
                      options={row.option}
                      renderInput={(params) => <TextField {...params} label={row.label} />}
                      {...row.Property}
                    />
                  ))}

                  {row?.Button?.().map((row, key) => (
                    <Button key={key} {...row.Property}>
                      {row.WhateverIwantAsChild}
                    </Button>
                  ))}

                  {row?.IconButton?.().map((row, key) => (
                    <IconButton key={key} {...row.Property} />
                  ))}

                  {row?.ButtonGroup?.().map((row, key) => (
                    <ButtonGroup key={key} {...row.Property}>
                      {row.Button?.().map((row, key) => (
                        <Button key={key} {...row.Property}>
                          {row.WhateverIwantAsChild}
                        </Button>
                      ))}
                    </ButtonGroup>
                  ))}

                  {row?.Checkbox?.().map((row, key) => (
                    <FormControlLabel
                      key={key}
                      control={<Checkbox {...row.Property} />}
                      label={row.label}
                      {...row.FromControlLabelProperty}
                    />
                  ))}
                </Grid>
              ))}
            </Grid>
          ))}

          {/** The Parent Gluttony ========================================= Depends ON Mapping( RootParent )*/}

          {row?.Box?.().map((row, key) => (
            <Box key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Box>
          ))}
          {row?.Container?.().map((row, key) => (
            <Container key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Container>
          ))}
          {row?.Stack?.().map((row, key) => (
            <Stack key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Stack>
          ))}
          {row?.Paper?.().map((row, key) => (
            <Paper key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Paper>
          ))}
          {row?.Typography?.().map((row, key) => (
            <Typography key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Typography>
          ))}

          {row?.Divider?.().map((row, key) => (
            <Divider key={key} {...row.Property}>
              {row.WhateverIwantAsChild}
            </Divider>
          ))}

          {/**  List  =============================================== Depends ON Mapping( RootParent )*/}
          {row?.List?.().map((row, key) => (
            <List key={key} {...row.Property}>
              {row.WhateverIwantAsChild}

              {row.ListItemButton?.().map((row, key) => (
                <ListItem key={key} {...row.Property}>
                  {row.WhateverIwantAsChild}
                  <ListItemButton>
                    <ListItemIcon>{row.ListIcon}</ListItemIcon>
                    <ListItemText primary={row.ListText} />
                  </ListItemButton>
                </ListItem>
              ))}

              {row.ListItemAvatar?.().map((row, key) => (
                <ListItem key={key} {...row.Property}>
                  {row.WhateverIwantAsChild}
                  <ListItemAvatar>
                    <Avatar>{row.Avatar}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={row.ListText} />
                </ListItem>
              ))}
            </List>
          ))}

          {/**  Inputs  =============================================== Depends ON Mapping( RootParent )*/}
          {row?.Autocomplete?.().map((row, key) => (
            <Autocomplete
              key={key}
              disablePortal
              options={row.option}
              renderInput={(params) => <TextField {...params} label={row.label} />}
              {...row.Property}
            />
          ))}

          {row?.Button?.().map((row, key) => (
            <Button key={key} {...row.Property} />
          ))}

          {row?.IconButton?.().map((row, key) => (
            <IconButton key={key} {...row.Property} />
          ))}

          {row?.Checkbox?.().map((row, key) => (
            <FormControlLabel key={key} control={<Checkbox {...row.Property} />} label={row.label} {...row.FromControlLabelProperty} />
          ))}
        </Box>
      ))}
    </>
  )
}
