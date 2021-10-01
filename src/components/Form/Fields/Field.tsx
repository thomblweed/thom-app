import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, InputType } from 'thom-components';

import './formControl.css';

type FieldProps = {
  name: string;
  label: string;
  type: InputType;
  disabled: boolean;
};

const labelCss = {
  display: 'block',
  extAlign: 'start',
  fontSize: '1rem',
  marginInlineEnd: '0.75rem',
  MarginBottom: '0.5rem',
  fontWeight: 500,
  transition: 'all 0.2s',
  opacity: 1
} as const;

const Field = ({ name, label, type, disabled }: FieldProps): ReactElement => {
  const { register } = useFormContext();
  const input = register(name);
  return (
    <div className='formControlCss' id={name} role='group'>
      <label style={labelCss}>{label}</label>
      <Input
        type={type}
        role={type}
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
