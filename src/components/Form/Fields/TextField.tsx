import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { Ref } from 'react-hook-form/dist/types';

type TextFieldProps = {
  name: string;
  label: string;
  type: string;
  disabled: boolean;
  register: (ref: Ref) => void;
};

const TextField = ({
  name,
  label,
  type,
  disabled,
  register
}: TextFieldProps): JSX.Element => (
  <FormControl id={name}>
    <FormLabel>{label}</FormLabel>
    <Input
      disabled={disabled}
      type={type}
      id={name}
      name={name}
      ref={(ref) => {
        if (ref) {
          register(ref);
        }
      }}
    />
  </FormControl>
);

export default TextField;
