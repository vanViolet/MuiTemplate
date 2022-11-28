import { IButton, IPaper } from 'Components/Gluttony'
import { borderRadius } from 'config'
import { ColorCollection } from 'Utilities/Color'

export const CrudActionTemplate = (args?: { Button?: IButton[] }): IPaper[] => {
  return [
    {
      DIRECTION: 'row',
      style: (theme) => ({
        padding: '0.7rem',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        background: theme.palette.mode === 'dark' ? ColorCollection.bg.dark[1] : ColorCollection.bg.light[0],
        borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0 `,
      }),
      Button: args?.Button,
    },
  ] as IPaper[]
}
