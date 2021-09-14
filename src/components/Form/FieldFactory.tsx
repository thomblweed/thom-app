import React, { LegacyRef, ReactElement } from 'react';

import { FormField, FieldType } from './form-schema';
import TextField from './Fields/TextField';

interface FieldFactoryProps {
  field: FormField;
  disabled: boolean;
  register: LegacyRef<HTMLInputElement> | undefined;
}

const FieldFactory = ({
  field,
  disabled,
  register
}: FieldFactoryProps): ReactElement | null => {
  switch (field.type) {
    case FieldType.TEXT:
    case FieldType.PASSWORD:
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

export { FieldFactory, FieldFactoryProps };
