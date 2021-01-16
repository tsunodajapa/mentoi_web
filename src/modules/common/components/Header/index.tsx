import Logo from '@/assets/logo_mentoi.svg';
import Input from '@/shared/Input';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';

import { VscBell } from 'react-icons/vsc';
import { IoChatbubblesOutline, IoSearch } from 'react-icons/io5';
import { BsPersonFill, BsGearWide } from 'react-icons/bs';

import ButtonIcon from '@/shared/ButtonIcon';
import { Container } from './styles';

const Header: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Logo />
      <Form
        onSubmit={() => {
          console.log('TEste');
        }}
        ref={formRef}
      >
        <Input
          id="search"
          type="text"
          name="search"
          placeholder="PESQUISAR"
          icon={IoSearch}
        />
      </Form>

      <div>
        <ButtonIcon icon={VscBell} />
        <ButtonIcon icon={IoChatbubblesOutline} />
        <ButtonIcon icon={BsPersonFill} />
        <ButtonIcon icon={BsGearWide} />
      </div>
    </Container>
  );
};

export default Header;
