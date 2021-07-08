import {
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label?: string;
  rows?: number;
  children?: ReactNode;
}

const TextArea = ({
  id,
  label,
  name,
  children,
  rows = 1,
  ...rest
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const [isField, setIsField] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  }, [textAreaHeight]);

  const onChangeHandler = () => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsField(!!textAreaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value',
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

      <div
        style={{
          maxHeight: children ? '300px' : null,
          minHeight: !children ? parentHeight : null,
        }}
      >
        <textarea
          id={id}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={textAreaRef}
          rows={rows}
          style={{
            height: textAreaHeight,
            overflow: !children ? 'hidden' : 'auto',
          }}
          onChange={onChangeHandler}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
        {children}
      </div>
    </Container>
  );
};

export default TextArea;
