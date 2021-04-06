import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';

import { VscBell } from 'react-icons/vsc';
import { IoSearch } from 'react-icons/io5';
import { BsPersonFill, BsGearWide } from 'react-icons/bs';

import Input from '@/shared/FormElements/Input';
import ButtonIcon from '@/shared/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';
import MentoiIcon from '@/assets/icon_mentoi.svg';

import OnboardingTemplate from '@/shared/Onboarding/OnboardingTemplate';
import { Container, ContainerMobile } from './styles';

const Header = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Container>
        <div>
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
            <OnboardingTemplate title="Teste" description="teste mensagem 1">
              <ButtonIcon icon={VscBell} />
            </OnboardingTemplate>
            {/* <ButtonIcon icon={IoChatbubblesOutline} /> */}
            <ButtonIcon icon={BsPersonFill} />
            <ButtonIcon icon={BsGearWide} />
          </div>
        </div>
      </Container>

      <ContainerMobile>
        <div>
          <MentoiIcon />
          <span>AREA INTERESSE</span>
        </div>
        <IoSearch />
      </ContainerMobile>
    </>
  );
};

export default Header;
