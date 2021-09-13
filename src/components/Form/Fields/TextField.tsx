import React, { LegacyRef, ReactElement } from 'react';

import './formControl.css';
import './input.css';

type TextFieldProps = {
  name: string;
  label: string;
  type: string;
  disabled: boolean;
  register: LegacyRef<HTMLInputElement> | undefined;
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

const TextField = ({
  name,
  label,
  type,
  disabled,
  register
}: TextFieldProps): ReactElement => (
  <div className='formControlCss' id={name} role='group'>
    <label style={labelCss} data-testid={`${name}-label-testId`}>
      {label}
    </label>
    <input
      className='inputCss'
      data-testid={`${name}-testId`}
      disabled={disabled}
      type={type}
      id={name}
      name={name}
      ref={register}
    />
  </div>
);

export default TextField;
