import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

import { useStyles } from '../../hooks/useStyles';
import { FormSchema } from '../../types/form';

interface FormProps<T> {
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
  schema: FormSchema;
}

const Form = <T,>({
  formSubmit,
  formSubmitting,
  schema
}: FormProps<T>): ReactElement => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<T>();

  return (
    <form className={classes.form} onSubmit={handleSubmit(formSubmit)}>
      {schema.fields.map((field) => (
        <input
          key={field.name}
          ref={register}
          type={field.type}
          name={field.name}
        />
      ))}
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
