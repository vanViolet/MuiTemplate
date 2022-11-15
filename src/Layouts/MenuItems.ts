import { ICON } from 'Libraries/Icon'

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
        icon: ICON('Dashboard', 'MenuSize'),
        path: '/dashboard',
      },
    ],
  },
  {
    label: 'Document Type',
    children: [
      {
        label: 'Izin Edar',
        icon: ICON('ClipboardFill', 'MenuSize'),
        path: '/izin-edar',
      },
      {
        label: 'Suket Spare Part',
        icon: ICON('CubeTransparent', 'MenuSize'),
        path: '/suket-spare-part',
      },
      {
        label: 'Suket PI dan RUO',
        icon: ICON('Produk', 'MenuSize'),
        path: '/suket-pi-dan-ruo',
      },
      {
        label: 'Izin RFID',
        icon: ICON('Card', 'MenuSize'),
        path: '/izin-rfid',
      },
      {
        label: 'Vendor Agreement',
        icon: ICON('Signature', 'MenuSize'),
        path: '/vendor-agreement',
      },
      //Seed Dont Delete This Comment
    ],
  },

  {
    label: 'Obsolete',
    children: [
      {
        label: 'Obsolete',
        icon: ICON('Trash', 'MenuSize'),
        grandChild: [
          {
            label: 'Izin Edar',
            icon: ICON('ClipboardOutlinedX', 'MenuSize'),
            path: 'obsolete/izin-edar',
          },
          {
            label: 'Suket Spare Part',
            icon: ICON('SquareOutlined', 'MenuSize'),
            path: 'obsolete/suket-spare-part',
          },
          {
            label: 'Suket PI dan RUO',
            icon: ICON('ProdukOutlined', 'MenuSize'),
            path: 'obsolete/suket-pi-dan-ruo',
          },
          {
            label: 'Izin RFID',
            icon: ICON('CardOutlined', 'MenuSize'),
            path: 'obsolete/izin-rfid',
          },
          {
            label: 'Vendor Agreement',
            icon: ICON('FileOutlinedX', 'MenuSize'),
            path: 'obsolete/vendor-agreement',
          },
        ],
      },

      //Seed Dont Delete This Comment
    ],
  },
  {
    label: 'Master',
    children: [
      {
        label: 'Periode Notifikasi',
        icon: ICON('Bell', 'MenuSize'),
        path: '/periode-notifikasi',
      },
      {
        label: 'Template',
        icon: ICON('DocumentText', 'MenuSize'),
        path: '/template',
      },
      {
        label: 'Department PIC',
        icon: ICON('EmailFill', 'MenuSize'),
        path: '/department-pic',
      },

      {
        label: 'Level User',
        icon: ICON('Guard', 'HeroSize'),
        path: '/level-user',
      },
      {
        label: 'Manajemen Akun',
        icon: ICON('Users', 'MenuSize'),
        path: '/manajemen-akun',
      },
    ],
  },
]
