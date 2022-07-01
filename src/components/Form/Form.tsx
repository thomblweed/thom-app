import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'thom-components';

import { FormField, FormSchema } from './form-schema';
import { Field } from './Fields/Field';

interface FormProps<T> {
  testId: string | undefined;
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
  schema: FormSchema;
}

export const Form = <T,>({
  testId,
  formSubmit,
  formSubmitting,
  schema
}: FormProps<T>): JSX.Element => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        className='w-full max-w-sm'
        data-testid={testId}
        onSubmit={methods.handleSubmit(formSubmit)}
      >
        {schema.fields?.map((field: FormField) => (
          <div className='mb-6' key={field.name}>
            <Field
              name={field.name}
              label={field.label}
              type={field.type}
              disabled={formSubmitting}
            />
          </div>
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
