type FormFields = {
  type: string;
  name: string;
  label: string;
  required: boolean;
}[];

interface FormSchema {
  fields: FormFields;
}

export { FormSchema };
