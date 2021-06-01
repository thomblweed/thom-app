import React, { ReactElement, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input, Button, FormLabel, FormControl } from '@chakra-ui/react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form className={classes.form} onSubmit={handleSubmit(formSubmit)}>
      {schema.fields?.map((field) => (
        <FormControl id={field.name} key={`control-${field.name}`}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            disabled={formSubmitting}
            type={field.type}
            id={field.name}
            name={field.name}
            ref={(ref) => {
              if (ref) {
                register(ref);
                inputRef.current = ref;
              }
            }}
          />
        </FormControl>
      ))}
      {schema.buttons?.map((button) => (
        <div key={button.label} className={classes.container}>
          <Button type={button.type} isLoading={formSubmitting}>
            {button.label}
          </Button>
        </div>
      ))}
    </form>
  );
};

export default Form;
