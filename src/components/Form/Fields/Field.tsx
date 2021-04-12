import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { Control, Controller, FieldError } from 'react-hook-form';

interface Field {
  name: string;
  label: string;
  required: boolean;
  error: FieldError | undefined;
  control: Control<Record<string, any>> | undefined;
}

const Field: FC<Field> = ({ name, label, required, error, control }) => (
  <Controller
    name={name}
    as={
      <TextField
        variant='outlined'
        margin='normal'
        helperText={error && error}
        required={required}
        fullWidth
        id={name}
        label={label}
        name={name}
        autoFocus
      />
    }
    control={control}
    defaultValue=''
    rules={{
      ...(required && { required: 'Required' })
    }}
  />
);

export default Field;
