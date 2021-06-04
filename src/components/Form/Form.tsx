import React, { Fragment, ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, ButtonGroup } from '@chakra-ui/react';

import { useStyles } from '../../hooks/useStyles';
import { FormField, FormSchema } from '../../interfaces/form-schema';
import { FieldFactory } from './FieldFactory';

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
      {schema.fields?.map((field: FormField) => (
        <Fragment key={field.name}>
          {FieldFactory(field, formSubmitting, register)}
        </Fragment>
      ))}
      {schema.buttons?.map((button) => (
        <ButtonGroup key={button.label}>
          <Button type={button.type} isLoading={formSubmitting}>
            {button.label}
          </Button>
        </ButtonGroup>
      ))}
    </form>
  );
};

export default Form;
