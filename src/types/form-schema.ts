enum FieldType {
  TEXT = 'text'
}

enum ButtonType {
  SUBMIT = 'submit'
}

type FormFields = {
  type: FieldType;
  name: string;
  label: string;
  required: boolean;
}[];

type FormButtons = {
  type: ButtonType;
  label: string;
}[];

interface FormSchema {
  fields: FormFields;
  buttons?: FormButtons;
}

export { FormSchema, FieldType, ButtonType };
