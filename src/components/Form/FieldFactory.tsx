import React, { ReactElement } from 'react';

import { FormField, FieldType } from './form-schema';
import TextField from './Fields/TextField';

interface FieldFactoryProps {
  field: FormField;
  disabled: boolean;
}

const FieldFactory = ({
  field,
  disabled
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
        />
      );
    default:
      return null;
  }
};

export { FieldFactory, FieldFactoryProps };
