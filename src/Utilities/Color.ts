// export type IColorLibrary =
// | 'header-light'
// | 'header-dark'
// | 'header-text-light'
// | 'header-text-dark'
// | 'hover-header-background-light'
// | 'hover-header-background-dark'
// | 'hover-header-text-light'
// | 'hover-header-text-dark' /** */
// | 'sidebar-light'
// | 'sidebar-dark'
// | 'main-header-paper-outlet-light'
// | 'main-header-paper-outlet-dark'
// | 'success'
// | 'info'
// | 'danger'
// 'warning'
// | 'hover-success'
// | 'hover-info'
// | 'hover-danger'
// | 'hover-warning'
// | 'hover-text-light'
// | 'hover-text-dark'
// | 'hover-bg-light'
// | 'hover-bg-dark'
// | 'active-text-light'
// | 'active-text-dark'
// | 'active-bg-light'
// | 'active-bg-dark'

// export const ColorLibrary = (color: IColorLibrary) => {
//   // if (color === 'header-light') return 'linear-gradient(155deg, rgba(0,112,189,1) 0%,rgba(29,183,205,1) 30%, rgba(29,183,235,1) 100%)'
//   // if (color === 'header-dark') return 'rgba(39,39,42,0)'

//   // if (color === 'header-text-light') return 'white'
//   // if (color === 'header-text-dark') return '#c1c2c5'

//   // if (color === 'hover-header-background-light') return 'rgba(255,255,255,0.2)'
//   // if (color === 'hover-header-background-dark') return 'rgba(255,255,255,0.2)'

//   // if (color === 'hover-header-text-light') return 'white'
//   // if (color === 'hover-header-text-dark') return 'white'

//   // if (color === 'sidebar-light') return '#dae8ff'
//   // if (color === 'sidebar-dark') return 'rgba(39,39,42,1)'

//   // if (color === 'main-header-paper-outlet-light') return 'rgba(11,67,99,1)'
//   // if (color === 'main-header-paper-outlet-dark') return '#32343a'

//   // if (color === 'hover-text-light') return '#0284c7'
//   // if (color === 'hover-text-dark') return '#0284c7'

//   // if (color === 'hover-bg-light') return 'rgba(30,144,255,0.1)'
//   // if (color === 'hover-bg-dark') return 'rgba(30,144,255,0.1)'

//   // if (color === 'active-text-light') return '#0284c7'
//   // if (color === 'active-text-dark') return '#0284c7'

//   // if (color === 'active-bg-light') return 'rgba(30,144,255,0.2)'
//   // if (color === 'active-bg-dark') return 'rgba(30,144,255,0.1)'

//   /**
//    * Button Color Variant
//    */
//   if (color === 'success') return '#4d7c0f'
//   if (color === 'danger') return '#b91c1c'
//   if (color === 'info') return '#0284c7'
//   if (color === 'warning') return '#d97706'
//   if (color === 'hover-success') return '#365314'
//   if (color === 'hover-danger') return '#7f1d1d'
//   if (color === 'hover-info') return '#075985'
//   if (color === 'hover-warning') return '#92400e'
// }

export const ColorCollection = {
  bg: {
    dark: ['rgba(39,39,42,0)', 'rgba(30,30,30,1)', 'rgba(18,18,18,1)'],
    light: ['linear-gradient(155deg, rgba(0,112,189,1) 0%,rgba(29,183,205,1) 30%, rgba(29,183,235,1) 100%)'],
    hover: 'rgba(30,144,255,0.1)',
    hoverWhite: 'rgba(255,255,255,0.2)',
    active: 'rgba(30,144,255,0.2)',
  },
  text: {
    active: 'rgba(2,132,199,1)',
    hover: 'rgba(2,132,199,0.8)',
  },
}
