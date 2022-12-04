import { IIngredient, IMenuItem } from 'Components/CreateElements'

export const MobileCrudTemplate = (args?: {
  anchorEl?: null | HTMLElement
  onClose?: () => void
  MenuItems?: IMenuItem[] | Array<undefined>
}): IIngredient[] => {
  return [
    {
      Menu: [
        {
          open: Boolean(args?.anchorEl),
          anchorEl: args?.anchorEl,
          onClose() {
            args?.onClose?.()
          },

          style: () => ({ marginTop: '0.4rem' }),
          MenuItem: args?.MenuItems === undefined ? undefined : args?.MenuItems,
        },
      ],
    },
  ] as IIngredient[]
}
