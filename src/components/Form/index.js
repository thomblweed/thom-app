import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

import { useStyles } from '../../hooks/useStyles';
import Field from './Field';

const Form = ({ formSubmit, formSubmitting }) => {
  const classes = useStyles();
  const { control, handleSubmit, errors } = useForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit(formSubmit)}>
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
      <div className={classes.container}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          type='submit'
          disabled={formSubmitting}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default Form;
