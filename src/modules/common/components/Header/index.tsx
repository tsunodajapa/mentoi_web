import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Link from 'next/link';

import { VscBell } from 'react-icons/vsc';
import { IoSearch } from 'react-icons/io5';
import { BsPersonFill, BsFillBellFill } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

import { Input } from '@/shared/components/FormElements';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';
import MentoiIcon from '@/assets/icon_mentoi.svg';

import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import { useAuth } from '@/hooks/auth';
import { Container, Nav } from './styles';

interface HeaderProps {
  actualNameStep: string;
}

const Header = ({ actualNameStep }: HeaderProps) => {
  const formRef = useRef<FormHandles>(null);
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <Link href="/feed">
          <a>
            <Logo />
          </a>
        </Link>
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

        <Nav>
          <ul>
            <li>
              <OnboardingTemplate title="Teste" description="teste mensagem 1">
                <ButtonIcon icon={BsFillBellFill} />
              </OnboardingTemplate>
            </li>
            <li>
              <input id="signout-button" type="checkbox" name="menu" />
              <label htmlFor="signout-button">
                <BsPersonFill />
                {/* <ButtonIcon icon={BsPersonFill} /> */}
              </label>
              <div>
                <a href="#_">Ver Perfil</a>

                <button type="button" onClick={signOut}>
                  Sair
                </button>
              </div>
            </li>
          </ul>
          {/* <ButtonIcon icon={IoChatbubblesOutline} /> */}
          {/* <ButtonIcon icon={GoGear} /> */}
        </Nav>
      </div>

      <div>
        <div>
          <Link href="/feed">
            <a>
              <MentoiIcon />
            </a>
          </Link>
          <span>{actualNameStep}</span>
        </div>
        <IoSearch />
      </div>
    </Container>
  );
};

export default Header;
