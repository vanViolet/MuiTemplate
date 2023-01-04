import { commonCss } from 'Assets/commonCss'
import { CreateElements, IBoxNotNested, IIngredient } from 'Components/CreateElements'
import { useFormik } from 'formik'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { ButtonCollection } from 'Collections/ButtonCollection'
import { ColorCollection } from 'Collections/ColorCollection'
import { convertToLabel } from 'Utilities/__General'
import { LottieCollection } from 'Collections/LottieCollection'
import Validator from 'Utilities/Validator'
import { errorMessageSwal, POST, successMessageSwal } from 'Utilities/_UseApi'
import { useAppDispatch, useAppSelector } from 'Contexts/_store'
import { loadingOverlay } from 'Contexts/customizationReducer'
import { useTheme } from '@mui/material'
import { getUser } from 'Contexts/authReducer'
import { Navigate, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { dispatch, theme, user, navigate } = {
    dispatch: useAppDispatch(),
    theme: useTheme(),
    user: useAppSelector((state) => state.auth.auth),
    navigate: useNavigate(),
  }
  const {
    FORMIK: { values, errors, handleBlur, handleChange, touched, handleSubmit },
    HeaderText,
  } = {
    HeaderText: (): Array<'System' | 'Marketing' | 'Login'> => ['System', 'Marketing', 'Login'],
    FORMIK: useFormik({
      initialValues: {
        username: '',
        password: '',
      } as Record<'username' | 'password', string>,
      validationSchema: Validator.object({
        username: Validator.string('Username').required().Yup,
        password: Validator.string('Password').required().Yup,
      }),
      onSubmit: async () => {
        dispatch(loadingOverlay(true))
        try {
          const resp = await POST({ url: 'LOGIN', data: { username: values.username, password: values.password } })
          localStorage.setItem('token', resp.data.Authorization)
          dispatch(getUser(resp.data.Authorization))
          dispatch(loadingOverlay(false))
          successMessageSwal({ title: 'Login berhasil', theme })
          navigate('/')
        } catch (error: any) {
          dispatch(loadingOverlay(false))
          errorMessageSwal({ error: error.response.data.error, theme })
        }
      },
    }),
  }

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
            Box: HeaderText().map(
              (row) =>
                ({
                  style: () => ({
                    ...commonCss.TO_CENTER(),
                    fontSize: row === 'System' ? '3rem' : '2rem',
                    fontWeight: 700,
                    color: '#0284c7',
                    paddingBottom: row === 'Login' ? '1rem' : '',
                    marginBottom: row === 'Login' ? '1rem' : '',
                    borderBottom: row === 'Login' ? '1px solid #0284c7' : '',
                    letterSpacing: row === 'System' ? '0.15rem' : '',
                    marginTop: row === 'Login' ? '4rem' : '',
                  }),
                  __CHILD: row,
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
                type: row === 'password' ? 'PasswordInput' : 'TextField',
                ...{ values, handleBlur, handleChange, errors, touched },
              })
            ),
            Button: [
              {
                ...ButtonCollection.CUSTOM({
                  props: { size: 'large', startIcon: undefined, type: 'submit' },
                }),
                order: 3,
                __CHILD: 'LOGIN',
              },
            ],
          },
        ],
      },
    ]
  }

  if (user) {
    return <Navigate to="/" />
  }
  return (
    <form onSubmit={handleSubmit}>
      <CreateElements Ingredient={Ingredient()} />
    </form>
  )
}
