import React, { ReactElement } from 'react';
import { Ref } from 'react-hook-form';

import { FormField, FieldType } from '../../interfaces/form-schema';
import TextField from './Fields/TextField';

interface FieldFactoryProps {
  field: FormField;
  disabled: boolean;
  register: (ref: Ref) => void;
}

const FieldFactory = ({
  field,
  disabled,
  register
}: FieldFactoryProps): ReactElement | null => {
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
