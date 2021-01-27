import { FormHandles } from '@unform/core';
import { useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import Input from '../Input';

import { Container, Select } from './styles';

const InputAndSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Selecione');
  const [isCheched, setIsCheched] = useState(false);
  const formRef = useRef<FormHandles>(null);

  function handleChangeChecked(): void {
    setIsCheched(!isCheched);
  }

  function handleChangeOption(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    console.log(e.currentTarget);

    const { innerHTML } = e.currentTarget;
    const { value } = e.currentTarget.dataset;

    setSelectedOption(innerHTML);

    handleChangeChecked();
  }

  return (
    <Container
      onSubmit={() => {
        console.log('TEste');
      }}
      ref={formRef}
    >
      {/* <select name="" id="">
        <option value="">Português</option>
        <option value="">Matematica</option>
      </select>
      <Select>
        <input
          type="checkbox"
          id="{name}"
          checked={isCheched}
          onChange={handleChangeChecked}
        />
        <label htmlFor="{name}">{selectedOption}</label>
        <div>
          <button
            type="button"
            onClick={e => handleChangeOption(e)}
            data-value="teste"
          >
            Português
          </button>
          <button
            type="button"
            onClick={e => handleChangeOption(e)}
            data-value="teste"
          >
            Matematica
          </button>
          <button
            type="button"
            onClick={e => handleChangeOption(e)}
            data-value="teste"
          >
            História
          </button>
        </div>
      </Select> */}
      <input type="text" placeholder="Qual sua dúvida?" />
      <button type="submit">
        <IoSearch />
      </button>
    </Container>
  );
};

export default InputAndSelect;
