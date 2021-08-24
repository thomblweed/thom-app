import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'thom-components';

import { useStyles } from '../../hooks/useStyles';
import { FormField, FormSchema } from '../../interfaces/form-schema';
import { FieldFactory } from './FieldFactory';

interface FormProps<T> {
  testId: string | undefined;
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
  schema: FormSchema;
}

const Form = <T,>({
  testId,
  formSubmit,
  formSubmitting,
  schema
}: FormProps<T>): ReactElement => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<T>();

  return (
    <form
      data-testid={testId}
      className={classes.form}
      onSubmit={handleSubmit(formSubmit)}
    >
      {schema.fields?.map((field: FormField) => (
        <FieldFactory
          key={field.name}
          field={field}
          disabled={formSubmitting}
          register={register}
        />
      ))}
      {schema.buttons?.map((button) => (
        <Button
          label={button.label}
          loading={formSubmitting}
          disabled={formSubmitting}
          type={button.type}
          role={button.type}
          data-testid={`${button.label.toLowerCase()}-button`}
        />
      ))}
    </form>
  );
};

export default Form;
