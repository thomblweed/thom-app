import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, ButtonGroup } from '@chakra-ui/react';

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
        <ButtonGroup key={button.label}>
          <Button
            data-testid={`${button.label.toLowerCase()}-button`}
            type={button.type}
            isLoading={formSubmitting}
            disabled={formSubmitting}
          >
            {button.label}
          </Button>
        </ButtonGroup>
      ))}
    </form>
  );
};

export default Form;
