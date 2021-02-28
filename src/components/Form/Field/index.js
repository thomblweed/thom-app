import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

const Field = ({ name, label, required, error, control }) => (
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
