import React, { LegacyRef, ReactElement } from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type TextFieldProps = {
  name: string;
  label: string;
  type: string;
  disabled: boolean;
  register: LegacyRef<HTMLInputElement> | undefined;
};

const TextField = ({
  name,
  label,
  type,
  disabled,
  register
}: TextFieldProps): ReactElement => (
  <FormControl id={name}>
    <FormLabel>{label}</FormLabel>
    <Input
      disabled={disabled}
      type={type}
      id={name}
      name={name}
      ref={register}
    />
  </FormControl>
);

export default TextField;
