import { IconCollection } from 'Collections/IconCollection'

export interface IMenuItems {
  label?: React.ReactNode | string | undefined
  children?: IMenuChildren[]
}

export interface IMenuChildren {
  label?: React.ReactNode | string | undefined
  icon?: React.ReactNode | string | undefined
  path?: string
  grandChild?: IMenuGrandChild[]
}

export interface IMenuGrandChild {
  label?: React.ReactNode | string | undefined
  icon?: React.ReactNode | string | undefined
  path?: string
}

export const MenuItems: IMenuItems[] = [
  {
    label: '',
    children: [
      {
        label: 'Dashboard',
        icon: IconCollection('Dashboard', 'MenuSize'),
        path: '/',
      },
    ],
  },
  {
    label: 'Master',
    children: [
      {
        label: 'Manajemen Akun',
        icon: IconCollection('Users', 'MenuSize'),
        path: '/manajemen-akun',
      },

      //Seed Dont Delete This Comment
    ],
  },
]
