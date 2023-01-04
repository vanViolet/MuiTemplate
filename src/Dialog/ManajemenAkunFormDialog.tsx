import { CreateElements, IAutocomplete, IIngredient, ITextField } from 'Components/CreateElements'
import { AppDialog } from 'Components/Dialog'
import { useFormik } from 'formik'
import { TextFieldTemplate } from 'Template/TextFieldTemplate'
import { convertToLabel, removeUnderscores } from 'Utilities/__General'
import Validator from 'Utilities/Validator'
import { OLevelJabatan } from 'Common/Options'
import { ILevelJabatan } from 'Common/Types'
import { IIconCollection } from 'Collections/IconCollection'
import { POST } from 'Utilities/_UseApi'

interface IInitialValues extends Record<'nama' | 'username' | 'email' | 'password' | 'unit', string> {
  levelJabatan: ILevelJabatan
  status: boolean | 1 | 0
}

export const ManajemenAkunFormDialog = () => {
  const { errors, values, handleChange, handleBlur, touched, handleSubmit, setFieldValue } = useFormik({
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
      unit: 'UNIT A',
      status: 1,
    } as IInitialValues,
    onSubmit: () => {
      POST({
        url: 'MANAJEMEN_AKUN',
        data: {
          nama: values.nama,
          email: values.email,
          levelJabatan: values.levelJabatan,
          password: values.password,
          unit: values.unit,
          username: values.username,
          status: values.status,
        } as IInitialValues,
      })
    },
  })
  const { textFieldSchema: textFieldSchema, Ingredient } = {
    textFieldSchema: (): Array<
      | {
          name: string
          icon?: IIconCollection
          type?: 'TextField' | 'NumberInput' | 'PasswordInput' | 'CurrencyInput' | 'Autocomplete'
        }
      | undefined
    > => {
      return [
        { name: 'nama', icon: 'UserOutlined' },
        { name: 'username', icon: 'CardOutlined' },
        { name: 'email', icon: 'At' },
        { name: 'password', icon: 'Key', type: 'PasswordInput' },
        { name: 'levelJabatan', icon: 'Guard', type: 'Autocomplete' },
      ]
    },
    Ingredient: (): IIngredient[] => {
      return [
        {
          TextField: textFieldSchema().map((row) =>
            row === undefined
              ? undefined
              : TextFieldTemplate({
                  name: row.name,
                  label: convertToLabel(row.name),
                  icon: row.icon,
                  type: row.type,
                  MenuItem: OLevelJabatan.map((row) => ({
                    label: removeUnderscores(row),
                    props: { value: row },
                  })),
                  props: { sx: { margin: '1rem 0' } },
                  ...{ values, handleChange, handleBlur, errors, touched },
                })
          ) as ITextField[] | undefined[],
          Autocomplete: [
            !['SALES', 'TELEMARKETING', 'NON_TELEMARKETING'].includes(values.levelJabatan)
              ? undefined
              : {
                  order: 2,
                  option: ['UNIT A', 'UNIT B', 'UNIT C', 'UNIT D'],
                  label: 'Unit',
                  style: { margin: '1rem 0' },
                  props: { onChange: (e, o) => setFieldValue('unit', o), value: values.unit, disableClearable: true as any },
                },
          ] as IAutocomplete<any>[],
          Switch: [{ order: 3, label: 'Status Aktif' }],
        },
      ]
    },
  }

  return (
    <AppDialog title="Tambah Akun" icon="Plus" dialogProps={{ maxWidth: 'xs' }} onSubmit={() => handleSubmit()}>
      <CreateElements Ingredient={Ingredient()} />
    </AppDialog>
  )
}
