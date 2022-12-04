import { commonCss } from 'Assets/commonCss'
import { CreateElements, IBoxNotNested, IIngredient } from 'Components/CreateElements'
import { useFormik } from 'formik'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { ButtonCollection } from 'Collections/ButtonCollection'
import { ColorCollection } from 'Collections/ColorCollection'
import { convertToLabel } from 'Utilities/__General'
import { LottieCollection } from 'Collections/LottieCollection'
import Validator from 'Utilities/Validator'

export const LoginPage = () => {
  type ITextInLoginCard = 'Monitoring' | 'Login'
  const __textInLoginCard = [
    { index: 'Monitoring' as ITextInLoginCard },
    { index: 'System' as ITextInLoginCard },
    { index: 'Login' as ITextInLoginCard },
  ]
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Validator.object({
      username: Validator.string('Username').required().Yup,
      password: Validator.string('Password').required().Yup,
    }),
    onSubmit: (v) => console.log(v),
  })

  function Ingredient(): IIngredient[] {
    return [
      {
        DIRECTION: 'row',
        styleForParentBox: () => ({
          background: ColorCollection.bg.light[0],
          ...commonCss.POSITION_ZERO_FIXED(),
          display: 'flex',
          justifyContent: 'flex-start',
        }),
        Box: [
          {
            __CHILD: LottieCollection.CUSTOMER_CRM({
              BoxStyle: () => ({ marginTop: '3rem', marginLeft: '10rem' }),
              LottieStyle: { position: 'absolute', top: '-1rem', right: '30rem', left: '0', width: 680 },
            }),
          },
          {
            style: () => ({
              ...commonCss.POSITION_ZERO_ABSOLUTE({ Omit: ['left'] }),
              backgroundColor: 'white',
              width: '30rem',
              padding: '2rem',
              boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
            }),
            Box: __textInLoginCard.map(
              (row) =>
                ({
                  style: () => ({
                    ...commonCss.TO_CENTER(),
                    fontSize: row.index === 'Monitoring' ? '3rem' : '2rem',
                    fontWeight: 700,
                    color: '#0284c7',
                    paddingBottom: row.index === ('Login' as ITextInLoginCard) ? '1rem' : '',
                    marginBottom: row.index === ('Login' as ITextInLoginCard) ? '1rem' : '',
                    borderBottom: row.index === ('Login' as ITextInLoginCard) ? '1px solid #0284c7' : '',
                    letterSpacing: row.index === ('Monitoring' as ITextInLoginCard) ? '0.15rem' : '',
                    marginTop: row.index === ('Login' as ITextInLoginCard) ? '4rem' : '',
                  }),
                  __CHILD: row.index,
                  order: 1,
                } as IBoxNotNested)
            ),
            TextField: Object.keys(values).map((row) =>
              TextFieldTemplate({
                order: 2,
                name: row,
                label: convertToLabel(row),
                icon: row === 'username' ? 'Card' : 'KeyFill',
                style: () => ({ margin: '1rem 0rem' }),
                ...{ values, handleBlur, handleChange, errors, touched },
              })
            ),
            Button: [{ ...ButtonCollection.UPDATE({ props: { size: 'large', startIcon: undefined } }), order: 3, __CHILD: 'LOGIN' }],
          },
        ],
      },
    ]
  }
  return <CreateElements Ingredient={Ingredient()} />
}
