import { CreateElements, IIngredient } from 'Components/CreateElements'
import { AppDialog } from 'Components/Dialog'
import { useFormik } from 'formik'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { convertToLabel } from 'Utilities/__General'
import Validator from 'Utilities/Validator'
import { IIconCollection } from 'Collections/IconCollection'
import { OLevelJabatan } from 'Common/Options'
import { GlobalTypes } from 'Common/Types'

interface IInitialValues extends Record<'nama' | 'username' | 'email' | 'password', string> {
  levelJabatan: GlobalTypes['ILevelJabatan']
}

export const ManajemenAkunFormDialog = () => {
  const {
    formik: { errors, values, handleChange, handleBlur, touched, handleSubmit },
    // dispatch,
    textFieldSchema: textFieldSchema,
    Ingredient,
  } = {
    // dispatch: useDispatch(),
    textFieldSchema: [
      { name: 'nama', icon: 'UserOutlined' },
      { name: 'username', icon: 'CardOutlined' },
      { name: 'email', icon: 'At' },
      { name: 'password', icon: 'Key', type: 'PasswordInput' },
      { name: 'levelJabatan', icon: 'Guard', type: 'Autocomplete' },
    ] as Array<{
      name: string
      icon: IIconCollection
      type: 'TextField' | 'NumberInput' | 'PasswordInput' | 'CurrencyInput' | 'Autocomplete'
    }>,
    formik: useFormik({
      validationSchema: Validator.object({
        nama: Validator.string('Nama').required().min(4).Yup,
        username: Validator.string('Username').required().min(4).Yup,
        email: Validator.string('Email').required().email().Yup,
        password: Validator.string('Password').required().min(6).Yup,
      } as IInitialValues),
      initialValues: {
        nama: '',
        email: '',
        username: '',
        password: '',
        levelJabatan: 'MANAGER_MARKETING',
      } as IInitialValues,
      onSubmit: () => {
        console.log(values)
      },
    }),
    Ingredient: (): IIngredient[] => {
      return [
        {
          TextField: textFieldSchema.map((row) =>
            TextFieldTemplate({
              name: row.name,
              label: convertToLabel(row.name),
              icon: row.icon,
              type: row.type,
              MenuItem: OLevelJabatan.map((row) => ({
                label: row,
                props: { value: row },
              })),
              props: { sx: { margin: '1rem 0' } },
              ...{ values, handleChange, handleBlur, errors, touched },
            })
          ),
        },
      ]
    },
  }
  console.log(values.email)
  return (
    <AppDialog title="Tambah Akun" icon="Plus" dialogProps={{ maxWidth: 'xs' }} onSubmit={() => handleSubmit()}>
      <CreateElements Ingredient={Ingredient()} />
    </AppDialog>
  )
}
