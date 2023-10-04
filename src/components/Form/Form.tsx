import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button } from "thom-components";

import { Field } from "./Fields/Field";
import { FormField, FormSchema } from "./form-schema";

interface FormProps<T extends FieldValues> {
  testId: string | undefined;
  formSubmit: SubmitHandler<T>;
  formSubmitting: boolean;
  schema: FormSchema;
}

export const Form = <T extends FieldValues>({
  testId,
  formSubmit,
  formSubmitting,
  schema,
}: FormProps<T>): JSX.Element => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form
        className="m-auto"
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

export type FormType = typeof Form;
