import { ButtonType, FieldType, FormSchema } from '../interfaces/form-schema';

const loginSchema: FormSchema = {
  fields: [
    {
      type: FieldType.TEXT,
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
      type: ButtonType.SUBMIT
    }
  ]
};

export { loginSchema };
