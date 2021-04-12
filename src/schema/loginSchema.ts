import { FormSchema } from '../types/form';

const loginSchema: FormSchema = {
  fields: [
    { type: 'text', name: 'email', label: 'Email Address', required: true },
    { type: 'text', name: 'password', label: 'Password', required: true }
  ]
};

export { loginSchema };
