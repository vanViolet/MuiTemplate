import {
  AiFillCloseCircle,
  AiFillDashboard,
  AiOutlineFileExcel,
  AiOutlineKey,
  AiOutlineReload,
  AiOutlineRollback,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai'
import {
  BsAt,
  BsBoundingBoxCircles,
  BsChevronDoubleDown,
  BsClipboardData,
  BsClipboardX,
  BsCreditCard,
  BsCreditCard2BackFill,
  BsFillKeyFill,
  BsFilterLeft,
  BsSortAlphaDownAlt,
  BsSortAlphaUp,
} from 'react-icons/bs'
import {
  FaAt,
  FaEdit,
  FaHamburger,
  FaPlusSquare,
  FaSun,
  FaTrashAlt,
  FaUsers,
  FaUserCircle,
  FaUserEdit,
  FaClipboard,
  FaFileSignature,
  FaHistory,
} from 'react-icons/fa'
import { GiHamburgerMenu, GiMoonBats } from 'react-icons/gi'
import { GrProductHunt, GrUserSettings } from 'react-icons/gr'
import { MdAdminPanelSettings, MdEmail, MdOutlineVisibility, MdOutlineVisibilityOff, MdShoppingCart } from 'react-icons/md'
import { CgUserlane } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { TbListDetails } from 'react-icons/tb'
import { HiCubeTransparent, HiOutlineMail } from 'react-icons/hi'
import { RiProductHuntLine } from 'react-icons/ri'
import { IoDocumentText } from 'react-icons/io5'
import { HiBellAlert } from 'react-icons/hi2'
import { BiSort } from 'react-icons/bi'
import { iconSize } from 'config'

export type IIconCollection =
  | 'Plus'
  | 'Edit'
  | 'Trash'
  | 'UserOutlined'
  | 'Email'
  | 'Key'
  | 'KeyFill'
  | 'Role'
  | 'Filter'
  | 'Sun'
  | 'Moon'
  | 'Dashboard'
  | 'Users'
  | 'UserCircle'
  | 'ShoppingChart'
  | 'Hamburger'
  | 'Setting'
  | 'LogOut'
  | 'At'
  | 'ChevronDown'
  | 'Reload'
  | 'ClipboardData'
  | 'Detail'
  | 'Guard'
  | 'UserEdit'
  | 'ClipboardFill'
  | 'EmailFill'
  | 'EmailOutlined'
  | 'CubeTransparent'
  | 'Produk'
  | 'Card'
  | 'Signature'
  | 'Back'
  | 'ClipboardOutlinedX'
  | 'SquareOutlined'
  | 'ProdukOutlined'
  | 'CardOutlined'
  | 'FileOutlinedX'
  | 'History'
  | 'Search'
  | 'Bell'
  | 'DocumentText'
  | 'Toggle'
  | 'AzSort'
  | 'ZaSort'
  | 'NotSort'
  | 'Close'
  | 'VisibilityOn'
  | 'VisibilityOff'
  | undefined

type ISize = 'ButtonSize' | 'HeroSize' | 'MenuSize' | number

export const IconCollection = (icon: IIconCollection, size: ISize, color?: string | undefined) => {
  if (icon === undefined) return undefined
  if (icon === 'Plus')
    return (
      <FaPlusSquare
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Edit')
    return (
      <FaEdit
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Trash')
    return (
      <FaTrashAlt
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'UserOutlined')
    return (
      <AiOutlineUser
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Email')
    return (
      <BsAt
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Key')
    return (
      <AiOutlineKey
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'KeyFill')
    return (
      <BsFillKeyFill
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Role')
    return (
      <GrUserSettings
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Filter')
    return (
      <BsFilterLeft
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Sun')
    return (
      <FaSun
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Moon')
    return (
      <GiMoonBats
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Dashboard')
    return (
      <AiFillDashboard
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Users')
    return (
      <FaUsers
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'UserCircle')
    return (
      <FaUserCircle
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ShoppingChart')
    return (
      <MdShoppingCart
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Hamburger')
    return (
      <FaHamburger
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Setting')
    return (
      <CgUserlane
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'LogOut')
    return (
      <FiLogOut
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'At')
    return (
      <FaAt
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ChevronDown')
    return (
      <BsChevronDoubleDown
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Reload')
    return (
      <AiOutlineReload
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ClipboardData')
    return (
      <BsClipboardData
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Detail')
    return (
      <TbListDetails
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Guard')
    return (
      <MdAdminPanelSettings
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'UserEdit')
    return (
      <FaUserEdit
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ClipboardFill')
    return (
      <FaClipboard
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'EmailFill')
    return (
      <MdEmail
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'EmailOutlined')
    return (
      <HiOutlineMail
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'CubeTransparent')
    return (
      <HiCubeTransparent
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Produk')
    return (
      <GrProductHunt
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Card')
    return (
      <BsCreditCard2BackFill
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Signature')
    return (
      <FaFileSignature
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Back')
    return (
      <AiOutlineRollback
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ClipboardOutlinedX')
    return (
      <BsClipboardX
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'SquareOutlined')
    return (
      <BsBoundingBoxCircles
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ProdukOutlined')
    return (
      <RiProductHuntLine
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'CardOutlined')
    return (
      <BsCreditCard
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'FileOutlinedX')
    return (
      <AiOutlineFileExcel
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'History')
    return (
      <FaHistory
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Search')
    return (
      <AiOutlineSearch
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Bell')
    return (
      <HiBellAlert
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'DocumentText')
    return (
      <IoDocumentText
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Toggle')
    return (
      <GiHamburgerMenu
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'AzSort')
    return (
      <BsSortAlphaUp
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'ZaSort')
    return (
      <BsSortAlphaDownAlt
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'NotSort')
    return (
      <BiSort
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
  if (icon === 'Close')
    return (
      <AiFillCloseCircle
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )

  if (icon === 'VisibilityOn')
    return (
      <MdOutlineVisibility
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )

  if (icon === 'VisibilityOff')
    return (
      <MdOutlineVisibilityOff
        size={
          typeof size === 'number'
            ? size
            : size === 'HeroSize'
            ? iconSize.HeroSize
            : size === 'MenuSize'
            ? iconSize.MenuSize
            : iconSize.ButtonSize
        }
        color={color}
      />
    )
}
