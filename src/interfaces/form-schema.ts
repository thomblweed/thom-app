enum FieldType {
  TEXT = 'text',
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
}

interface FormSchema {
  fields: FormField[];
  buttons?: FormButton[];
}

export { FormSchema, FormField, FieldType, ButtonType };
