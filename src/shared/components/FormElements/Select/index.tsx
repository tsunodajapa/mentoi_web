import { useField } from '@unform/core';
import { useCallback, useEffect, useState, useRef } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import {
  Container,
  SelectDesktop,
  MultiSelect,
  MultiSelectInput,
  Options,
} from './styles';

interface SelectProps {
  id: string;
  label?: string;
  placeHolder?: string;
  name: string;
  data: {
    name: string;
    key?: string;
    color?: string;
  }[];
  multiSelect?: boolean;
}

interface Option {
  name: string;
  key?: string;
  color?: string;
  selected?: boolean;
  selectedSize?: number;
}

const Select = ({
  id,
  label,
  name,
  data,
  multiSelect,
  placeHolder = 'Selecione',
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option>({
    name: placeHolder,
  });
  const [multiSelectedOptions, setMultiSelectedOptions] = useState<Option[]>(
    [] as Option[],
  );
  const [options, setOptions] = useState<Option[]>(data);
  const [isChecked, setIsChecked] = useState(false);
  const [optionsPosition, setOptionsPosition] = useState<'bottom' | 'top'>(
    'top',
  );

  const { fieldName, registerField } = useField(name);
  const labelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const maxOptionsPosition = labelRef.current.getBoundingClientRect().y + 250;

    if (maxOptionsPosition > document.body.offsetHeight) {
      setOptionsPosition('bottom');
    }
  }, [placeHolder]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: labelRef.current,
      getValue: () => {
        if (multiSelect) return multiSelectedOptions.map(item => item.name);
        if ('key' in selectedOption) return selectedOption.key;
        return null;
      },
      clearValue: () => {
        if (multiSelect) {
          setOptions(data);
          setMultiSelectedOptions([]);
        }
        if ('key' in selectedOption) {
          setSelectedOption({
            name: placeHolder,
          });
        }
        return null;
      },
    });
  }, [
    fieldName,
    registerField,
    multiSelect,
    multiSelectedOptions,
    selectedOption,
    placeHolder,
    data,
  ]);

  const handleChangeChecked = useCallback((action: boolean): void => {
    setIsChecked(action);
  }, []);

  const handleClickWindow = useCallback(
    (event: MouseEvent): void => {
      const { id: idElement, htmlFor } = event.target as HTMLLabelElement;

      if (
        idElement === id ||
        htmlFor === id ||
        (multiSelect && idElement.includes('option'))
      )
        return;

      handleChangeChecked(false);
    },
    [id, handleChangeChecked, multiSelect],
  );

  useEffect(() => {
    window.addEventListener('click', event => handleClickWindow(event), true);

    return () =>
      window.removeEventListener(
        'click',
        event => handleClickWindow(event),
        true,
      );
  }, [handleClickWindow]);

  function removeItemMultiSelect(item: Option): void {
    const newMultiSelectedOptions = multiSelectedOptions.filter(
      multiSelectedOption => multiSelectedOption.name !== item.name,
    );

    setMultiSelectedOptions(newMultiSelectedOptions);
  }

  function addItemMultiSelect(item: Option): void {
    const selectedSize = item.name.split('').length + 2;
    const newItem = { ...item, selectedSize };

    if (!multiSelectedOptions.length) {
      setMultiSelectedOptions([newItem]);
    } else {
      setMultiSelectedOptions([...multiSelectedOptions, newItem]);
    }
  }

  function handleChangeOption(item: Option): void {
    if (multiSelect) {
      const newOptions = options.map(option => {
        if (option.name === item.name)
          return { ...option, selected: !option.selected };

        return option;
      });

      setOptions(newOptions);

      const selected = multiSelectedOptions.find(
        multiSelectedOption => multiSelectedOption.name === item.name,
      );

      selected ? removeItemMultiSelect(selected) : addItemMultiSelect(item);
    } else {
      setSelectedOption(item);
    }
  }

  return (
    <Container hasLabel={!!label}>
      {label && <label htmlFor={id}>{label}</label>}

      <SelectDesktop>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => handleChangeChecked(!isChecked)}
        />

        {!multiSelect && (
          <label ref={labelRef} htmlFor={id}>
            {selectedOption && selectedOption.name}
          </label>
        )}
        {multiSelect && (
          <>
            <MultiSelect>
              {multiSelectedOptions.map(item => (
                <MultiSelectInput
                  key={item.name}
                  type="text"
                  title={item.name}
                  value={item.name}
                  width={item.selectedSize}
                  background={item.color}
                  readOnly
                  disabled
                />
              ))}
            </MultiSelect>
            <label ref={labelRef} htmlFor={id}>
              {!multiSelectedOptions.length &&
                selectedOption &&
                selectedOption.name}
            </label>
          </>
        )}

        <Options optionsPosition={optionsPosition}>
          {options.map(item => (
            <button
              key={item.name}
              id={`option-${item.name}-${id}`}
              type="button"
              onClick={() => handleChangeOption(item)}
            >
              {multiSelect && item.selected && (
                <ImCheckboxChecked id={`option-checked-${item.name}`} />
              )}
              {multiSelect && !item.selected && (
                <ImCheckboxUnchecked id={`option-unchecked-${item.name}`} />
              )}

              {item.name}
            </button>
          ))}
        </Options>
      </SelectDesktop>
    </Container>
  );
};

export default Select;
