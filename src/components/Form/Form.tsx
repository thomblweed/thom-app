import React, { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'thom-components';

import { FormField, FormSchema } from './form-schema';
import { FieldFactory } from './FieldFactory';

interface FormProps<T> {
  testId: string | undefined;
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
  schema: FormSchema;
}

const formCss = {
  width: '100%'
};

const Form = <T,>({
  testId,
  formSubmit,
  formSubmitting,
  schema
}: FormProps<T>): ReactElement => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        style={formCss}
        data-testid={testId}
        onSubmit={methods.handleSubmit(formSubmit)}
      >
        {schema.fields?.map((field: FormField) => (
          <FieldFactory
            key={field.name}
            field={field}
            disabled={formSubmitting}
          />
        ))}
        {schema.buttons?.map((button) => (
          <Button
            key={button.id}
            label={button.label}
            loading={formSubmitting}
            disabled={formSubmitting}
            type={button.type}
            role={button.type}
            data-testid={button.id}
          />
        ))}
      </form>
    </FormProvider>
  );
};

export default Form;
