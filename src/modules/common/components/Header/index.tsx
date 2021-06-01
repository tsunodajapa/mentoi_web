import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Link from 'next/link';

import { IoSearch } from 'react-icons/io5';
import { BsPersonFill, BsFillBellFill } from 'react-icons/bs';

import { Input } from '@/shared/components/FormElements';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';
import MentoiIcon from '@/assets/icon_mentoi.svg';

import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import { useAuth } from '@/shared/hooks/auth';
import WindowSelect from '@/shared/components/WindowSelect';
import { useRouter } from 'next/router';
import concatUrlParams from '@/shared/utils/concatUrlParams';
import { Container, Nav } from './styles';

interface HeaderProps {
  actualNameStep: string;
}

const Header = ({ actualNameStep }: HeaderProps) => {
  const formRef = useRef<FormHandles>(null);
  const { signOut } = useAuth();
  const router = useRouter();

  function handelSubmit(data: { search: string }) {
    const filter = concatUrlParams(router, data.search, 'q');

    router.push(`/feed${filter}`, undefined, { shallow: true });
  }

  return (
    <Container>
      <div>
        <Link href="/feed">
          <a>
            <Logo />
          </a>
        </Link>
        <Form onSubmit={handelSubmit} ref={formRef}>
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
              <WindowSelect id="signout-button" icon={BsPersonFill}>
                <a href="#_">Ver Perfil</a>

                <button type="button" onClick={signOut}>
                  Sair
                </button>
              </WindowSelect>
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
