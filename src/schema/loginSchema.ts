import {
  ButtonType,
  FieldType,
  FormSchema
} from '~/components/Form/form-schema';

const loginSchema: FormSchema = {
  fields: [
    {
      type: FieldType.EMAIL,
      name: 'email',
      label: 'Email Address',
      required: true
    },
    {
      type: FieldType.PASSWORD,
      name: 'password',
      label: 'Password',
      required: true
    }
  ],
  buttons: [
    {
      label: 'Login',
      type: ButtonType.SUBMIT,
      id: 'login-button'
    }
  ]
};

export { loginSchema };
