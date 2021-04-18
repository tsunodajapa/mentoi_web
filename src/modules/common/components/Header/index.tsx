import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';

import { VscBell } from 'react-icons/vsc';
import { IoSearch } from 'react-icons/io5';
import { BsPersonFill, BsGearWide } from 'react-icons/bs';

import { Input } from '@/shared/components/FormElements';
import ButtonIcon from '@/shared/components/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';
import MentoiIcon from '@/assets/icon_mentoi.svg';

import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import { Container } from './styles';

interface HeaderProps {
  actualNameStep: string;
}

const Header = ({ actualNameStep }: HeaderProps) => {
  const formRef = useRef<FormHandles>(null);

  return (
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

      <div>
        <div>
          <MentoiIcon />
          <span>{actualNameStep}</span>
        </div>
        <IoSearch />
      </div>
    </Container>
  );
};

export default Header;
