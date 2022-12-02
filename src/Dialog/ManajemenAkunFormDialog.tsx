import { CreateElements, IIngredient } from 'Components/CreateElements'
import { AppDialog } from 'Components/Dialog'
import { useFormik } from 'formik'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { convertToLabel } from 'Utilities/General'
import Validator from 'Utilities/Validator'

const levelJabatan = [
  { label: 'MANAGER MARKETING', value: 'MANAGER_MARKETING' },
  { label: 'SUPER ADMIN', value: 'SUPER_ADMIN' },
  { label: 'ADMIN', value: 'ADMIN' },
  { label: 'TELEMARKETING', value: 'TELEMARKETING' },
  { label: 'SALES', value: 'SALES' },
]
export const ManajemenAkunFormDialog = () => {
  const { errors, values, handleChange, handleBlur, touched, handleSubmit } = useFormik({
    initialValues: {
      nama: '' as string,
      email: '' as string,
      username: '' as string,
      password: '' as string,
      levelJabatan: 'MANAGER_MARKETING',
    },
    onSubmit: (v) => console.log(v),
    validationSchema: Validator.object({
      nama: Validator.string('Nama').required().min(4).Yup,
      username: Validator.string('Username').required().min(4).Yup,
      email: Validator.string('Email').required().email().Yup,
      password: Validator.string('Password').required().min(6).Yup,
    }),
  })

  function Ingredient(): IIngredient[] {
    return [
      {
        TextField: Object.keys(values).map((row) =>
          TextFieldTemplate({
            name: row,
            label: convertToLabel(row),
            icon:
              row === 'nama'
                ? 'UserOutlined'
                : row === 'username'
                ? 'CardOutlined'
                : row === 'email'
                ? 'EmailOutlined'
                : row === 'levelJabatan'
                ? 'Guard'
                : 'Key',
            type: row === 'password' ? 'PasswordInput' : row === 'levelJabatan' ? 'Autocomplete' : 'TextField',
            MenuItem: levelJabatan.map((row) => ({
              label: row.label,
              props: { value: row.value },
            })),
            props: { sx: { margin: '1rem 0' } },
            ...{ values, handleChange, handleBlur, errors, touched },
          })
        ),
      },
    ]
  }
  return (
    <AppDialog title="Tambah Akun" icon="Plus" dialogProps={{ maxWidth: 'xs' }} onSubmit={() => handleSubmit()}>
      <CreateElements Ingredient={Ingredient()} />
    </AppDialog>
  )
}
