import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import Input from '../Input';

import { Container, SelectDesktop } from './styles';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  data: {
    name: string;
  }[];
}

const Select = ({ id, label, name, data }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState('Selecione');
  const [isChecked, setIsChecked] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleChangeChecked = useCallback((action: boolean) => {
    setIsChecked(action);
  }, []);

  const handleClickWindow = useCallback(
    (event: MouseEvent) => {
      const { id: idElement, htmlFor } = event.target as HTMLLabelElement;

      if (idElement === id || htmlFor === id) return;

      handleChangeChecked(false);
    },
    [id, handleChangeChecked],
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

  function handleChangeOption(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    console.log(e.currentTarget);

    const { innerHTML } = e.currentTarget;
    const { value } = e.currentTarget.dataset;

    setSelectedOption(innerHTML);

    handleChangeChecked(false);
  }

  return (
    <Container hasLabel={!!label}>
      {label && <label htmlFor={id}>{label}</label>}

      <select name="" id={`select-mobile-${id}`}>
        <option value="">Português</option>
        <option value="">Matematica</option>
      </select>

      <SelectDesktop>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={() => handleChangeChecked(!isChecked)}
        />
        <label htmlFor={id}>{selectedOption}</label>
        <div>
          {data.map(item => (
            <button
              key={item.name}
              type="button"
              onClick={e => handleChangeOption(e)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </SelectDesktop>
    </Container>
  );
};

export default Select;
