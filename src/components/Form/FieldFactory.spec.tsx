import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { FieldType } from './form-schema';
import { FieldFactory, FieldFactoryProps } from './FieldFactory';

const MockTextField = () => <div>Text Field</div>;
jest.mock('./Fields/TextField', () => MockTextField);

describe('FieldFactory', () => {
  const fieldFactoryTests = [
    {
      fieldType: FieldType.TEXT,
      componentType: 'TextField',
      getByText: 'Text Field'
    },
    {
      fieldType: FieldType.PASSWORD,
      componentType: 'TextField',
      getByText: 'Text Field'
    }
  ];
  describe.each(fieldFactoryTests)(
    'when field.type is "$fieldType"',
    ({ fieldType, componentType, getByText }) => {
      beforeEach(() => {
        const testRef: React.RefObject<HTMLInputElement> = createRef();
        const props: FieldFactoryProps = {
          field: {
            type: fieldType,
            name: 'field name',
            label: 'field label',
            required: false
          },
          disabled: false,
          register: testRef
        };
        render(<FieldFactory {...props} />);
      });

      it(`should render a ${componentType} component`, () => {
        expect(screen.getByText(`${getByText}`)).toBeTruthy();
      });
    }
  );
});
