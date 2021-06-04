enum FieldType {
  TEXT = 'text'
}

enum ButtonType {
  SUBMIT = 'submit'
}

type FormField = {
  type: FieldType;
  name: string;
  label: string;
  required: boolean;
};

type FormButton = {
  type: ButtonType;
  label: string;
};

interface FormSchema {
  fields: FormField[];
  buttons?: FormButton[];
}

export { FormSchema, FormField, FieldType, ButtonType };
