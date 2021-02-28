import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

import { useStyles } from '../../hooks/useStyles';
import Field from './Field';

const Form = () => {
  const classes = useStyles();
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log('data :>> ', data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Field
        control={control}
        name='email'
        label='Email Address'
        required={true}
        error={errors.email && errors.email}
      />
      <Field
        control={control}
        name='password'
        label='Password'
        required={true}
        error={errors.password && errors.password}
      />
      <Button variant='contained' color='primary' type='submit'>
        Login
      </Button>
    </form>
  );
};

export default Form;
