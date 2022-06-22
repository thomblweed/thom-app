import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputType } from 'thom-components';

type FieldProps = {
  name: string;
  label: string;
  type: InputType;
  disabled: boolean;
};

const Field = ({ name, label, type, disabled }: FieldProps): ReactElement => {
  const { register } = useFormContext();
  const input = register(name);
  return (
    <div className='formControl' id={name} role='group'>
      <label htmlFor={input.name} className={'label'}>
        {label}
      </label>
      <Input
        aria-label={`${label}`}
        type={type}
        name={input.name}
        disabled={disabled}
        ref={input.ref}
        onChange={input.onChange}
        onBlur={input.onBlur}
      />
    </div>
  );
};

export default Field;
