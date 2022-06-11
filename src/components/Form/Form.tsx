import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'thom-components';

import './form.scss';
import { FormField, FormSchema } from './form-schema';
import Field from './Fields/Field';

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
}: FormProps<T>): JSX.Element => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        className={'form'}
        data-testid={testId}
        onSubmit={methods.handleSubmit(formSubmit)}
      >
        {schema.fields?.map((field: FormField) => (
          <Field
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
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
          />
        ))}
      </form>
    </FormProvider>
  );
};

export { Form };
