import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';

import { VscBell } from 'react-icons/vsc';
import { IoChatbubblesOutline, IoSearch, IoBookOutline } from 'react-icons/io5';
import { BsPersonFill, BsGearWide } from 'react-icons/bs';
import { AiFillHome, AiFillQuestionCircle } from 'react-icons/ai';

import Input from '@/shared/Input';
import ButtonIcon from '@/shared/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';

import { Container, ContainerMobile } from './styles';

const Header = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
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

      <ContainerMobile>
        <ButtonIcon icon={AiFillHome} />
        <ButtonIcon icon={IoBookOutline} />
        <ButtonIcon icon={AiFillQuestionCircle} />
        <ButtonIcon icon={IoChatbubblesOutline} />
        <ButtonIcon icon={BsPersonFill} />
      </ContainerMobile>
    </>
  );
};

export default Header;
