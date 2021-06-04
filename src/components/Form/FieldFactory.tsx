import React from 'react';
import { Ref } from 'react-hook-form';

import { FormField, FieldType } from '../../types/form-schema';
import TextField from './Fields/TextField';

const FieldFactory = (
  field: FormField,
  disabled: boolean,
  register: (ref: Ref) => void
): JSX.Element | null => {
  switch (field.type) {
    case FieldType.TEXT:
      return (
        <TextField
          name={field.name}
          label={field.label}
          type={field.type}
          disabled={disabled}
          register={register}
        />
      );
    default:
      return null;
  }
};

export { FieldFactory };
