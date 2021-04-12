type LoginFields = {
  type: string;
  name: string;
  label: string;
  required: boolean;
}[];

interface LoginSchema {
  fields: LoginFields;
}

const loginSchema: LoginSchema = {
  fields: [
    { type: 'text', name: 'email', label: 'Email Address', required: true },
    { type: 'text', name: 'password', label: 'Password', required: true }
  ]
};
