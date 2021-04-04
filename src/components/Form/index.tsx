import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

import { useStyles } from '../../hooks/useStyles';
import Field from './Field';

interface FormProps<T> {
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
}

type FieldValues = {
  email: string;
  password: string;
};

const Form = <T,>({
  formSubmit,
  formSubmitting
}: FormProps<T>): ReactElement => {
  const classes = useStyles();
  const { control, handleSubmit, errors } = useForm<FieldValues>();

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
