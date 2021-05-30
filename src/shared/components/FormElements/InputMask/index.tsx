import { useEffect, useRef, useState, useCallback } from 'react';

import { IconBaseProps } from 'react-icons';

import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { Container, Error } from './styles';

interface InputMaskProps extends InputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;

  icon?: React.ComponentType<IconBaseProps>;
}

const InputMask = ({
  id,
  label,
  name,
  icon: Icon,
  ...rest
}: InputMaskProps) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  const [isField, setIsField] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      isField={isField}
      data-testid="input-container"
      hasLabel={!!label}
    >
      {label && <label htmlFor={id}>{label}</label>}

      <div>
        {Icon && <Icon size={28} />}

        <ReactInputMask
          id={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </div>
    </Container>
  );
};

export default InputMask;
