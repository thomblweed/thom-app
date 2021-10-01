enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password'
}

enum ButtonType {
  SUBMIT = 'submit'
}

interface FormField {
  type: FieldType;
  name: string;
  label: string;
  required: boolean;
}

interface FormButton {
  type: ButtonType;
  label: string;
  id: string;
}

interface FormSchema {
  fields: FormField[];
  buttons?: FormButton[];
}

export { FormSchema, FormField, FieldType, ButtonType };
