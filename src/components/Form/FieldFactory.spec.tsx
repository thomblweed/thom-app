import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { FieldType } from './form-schema';
import { FieldFactory, FieldFactoryProps } from './FieldFactory';

describe('FieldFactory', () => {
  const fieldFactoryTests = [
    {
      fieldType: FieldType.TEXT
    },
    {
      fieldType: FieldType.PASSWORD
    }
  ];
  describe.each(fieldFactoryTests)(
    'when field.type is "$fieldType"',
    ({ fieldType }) => {
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

      it('should render a label', () => {
        expect(screen.getByText('field label')).toBeTruthy();
      });

      it('should render an input', () => {
        expect(screen.getByTestId('field name-testId')).toBeTruthy();
      });
    }
  );
});
