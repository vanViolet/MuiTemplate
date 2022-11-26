import {
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
import { MdAdminPanelSettings, MdEmail, MdShoppingCart } from 'react-icons/md'
import { CgUserlane } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { TbListDetails } from 'react-icons/tb'
import { HiCubeTransparent } from 'react-icons/hi'
import { RiProductHuntLine } from 'react-icons/ri'
import { IoDocumentText } from 'react-icons/io5'
import { HiBellAlert } from 'react-icons/hi2'

type IIcon =
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

type ISize = 'ButtonSize' | 'HeroSize' | 'MenuSize'

export const icon = (icon: IIcon, size: ISize, color?: string | undefined) => {
  if (icon === 'Plus') return <FaPlusSquare size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Edit') return <FaEdit size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Trash') return <FaTrashAlt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserOutlined') return <AiOutlineUser size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Email') return <BsAt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Key') return <AiOutlineKey size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'KeyFill') return <BsFillKeyFill size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Role') return <GrUserSettings size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Filter') return <BsFilterLeft size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Sun') return <FaSun size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Moon') return <GiMoonBats size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Dashboard') return <AiFillDashboard size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Users') return <FaUsers size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserCircle') return <FaUserCircle size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ShoppingChart') return <MdShoppingCart size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Hamburger') return <FaHamburger size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Setting') return <CgUserlane size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'LogOut') return <FiLogOut size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'At') return <FaAt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ChevronDown') return <BsChevronDoubleDown size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Reload') return <AiOutlineReload size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ClipboardData') return <BsClipboardData size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Detail') return <TbListDetails size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Guard') return <MdAdminPanelSettings size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'UserEdit') return <FaUserEdit size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ClipboardFill') return <FaClipboard size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'EmailFill') return <MdEmail size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'CubeTransparent') return <HiCubeTransparent size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Produk') return <GrProductHunt size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Card') return <BsCreditCard2BackFill size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Signature') return <FaFileSignature size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Back') return <AiOutlineRollback size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ClipboardOutlinedX') return <BsClipboardX size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'SquareOutlined')
    return <BsBoundingBoxCircles size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'ProdukOutlined') return <RiProductHuntLine size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'CardOutlined') return <BsCreditCard size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'FileOutlinedX') return <AiOutlineFileExcel size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'History') return <FaHistory size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Search') return <AiOutlineSearch size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Bell') return <HiBellAlert size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'DocumentText') return <IoDocumentText size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
  if (icon === 'Toggle') return <GiHamburgerMenu size={size === 'HeroSize' ? 30 : size === 'MenuSize' ? 25 : 20} color={color} />
}
