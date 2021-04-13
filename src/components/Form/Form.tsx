import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useStyles } from '../../hooks/useStyles';
import { FormSchema } from '../../types/form-schema';

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
      {schema.buttons?.map((button) => (
        <div className={classes.container}>
          <button type={button.type} disabled={formSubmitting}>
            {button.label}
          </button>
        </div>
      ))}
    </form>
  );
};

export default Form;
