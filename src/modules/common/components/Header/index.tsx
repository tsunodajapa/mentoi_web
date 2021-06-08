import { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Link from 'next/link';

import { IoSearch } from 'react-icons/io5';
import { BiArrowBack } from 'react-icons/bi';
import { BsPersonFill, BsFillBellFill } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';

import { Input } from '@/shared/components/FormElements';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';

import Logo from '@/assets/logo_mentoi.svg';
import MentoiIcon from '@/assets/icon_mentoi.svg';

import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import { useAuth } from '@/shared/hooks/auth';
import WindowSelect from '@/shared/components/WindowSelect';
import { useRouter } from 'next/router';
import concatUrlParams from '@/shared/utils/concatUrlParams';
import { formatWithValidation } from 'next/dist/next-server/lib/utils';
import { Container, Nav, SearchContent } from './styles';

interface HeaderProps {
  actualNameStep: string;
}

const Header = ({ actualNameStep }: HeaderProps) => {
  const formRef = useRef<FormHandles>(null);
  const { signOut, user } = useAuth();
  const router = useRouter();

  const [showFilter, setShowFilter] = useState(false);

  function handelSubmit(data: { search: string }) {
    const filter =
      router.pathname === '/feed'
        ? concatUrlParams(router, data.search, 'q')
        : `?q=${data.search}`;

    router.push(`/feed${filter}`, undefined, { shallow: true });
  }

  function handleShowFilter() {
    setShowFilter(state => !state);
  }

  function handleClearFilter() {
    formRef.current.reset();
    formRef.current.submitForm();
    setShowFilter(false);
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
                <Link href={`/me/${user?.nickName}/edit`}>Editar Perfil</Link>

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

      {!showFilter && (
        <div>
          <div>
            <Link href="/feed">
              <a>
                <MentoiIcon />
              </a>
            </Link>
            <span>{actualNameStep}</span>
          </div>
          <ButtonIcon
            icon={IoSearch}
            color="--color-text-in-primary"
            onClick={handleShowFilter}
          />
        </div>
      )}

      {showFilter && (
        <SearchContent>
          <ButtonIcon
            icon={BiArrowBack}
            color="--color-text-in-primary"
            onClick={handleShowFilter}
          />
          <Form ref={formRef} onSubmit={handelSubmit}>
            <Input id="search-mobile" name="search" placeholder="Buscar" />
            <ButtonIcon
              icon={IoIosClose}
              color="--color-text-in-primary"
              onClick={handleClearFilter}
            />
          </Form>
        </SearchContent>
      )}
    </Container>
  );
};

export default Header;
