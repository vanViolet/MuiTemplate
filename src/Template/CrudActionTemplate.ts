import { IButton, IPaper } from 'Components/CreateElements'
import { borderRadius } from 'config'
import { ColorCollection } from 'Utilities/Color'

export const CrudActionTemplate = (args?: { Button?: IButton[] | undefined }): IPaper[] => {
  return [
    {
      DIRECTION: 'row',
      style: (theme) => ({
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        paddingRight: '1rem',
        background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
        borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0 `,
      }),
      Button: args?.Button,
    },
  ] as IPaper[]
}
