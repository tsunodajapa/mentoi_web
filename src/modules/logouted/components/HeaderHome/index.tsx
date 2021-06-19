import { useRef, useState } from 'react';

import Button from '@/shared/components/Buttons/Button';
import { Link } from '@/shared/components/Buttons/Link';
import Modal from '@/shared/components/Modal';

import { Form } from '@unform/web';
import { Input } from '@/shared/components/FormElements';
import LogoFull from '@/assets/logo_mentoi.svg';
import concatUrlParams from '@/shared/utils/concatUrlParams';
import router from 'next/router';
import { FormHandles } from '@unform/core';
import { IoSearch } from 'react-icons/io5';
import LoginModal from '../LoginModal';
import { Container } from './styles';

interface HeaderProps {
  hasHeaderBackground: boolean;
}

const Header = ({ hasHeaderBackground }: HeaderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const formRef = useRef<FormHandles>(null);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handelSubmit(data: { search: string }) {
    const filter =
      router.pathname === '/feed'
        ? concatUrlParams(router, data.search, 'q')
        : `?q=${data.search}`;

    router.push(`/feed${filter}`, undefined, { shallow: true });
  }

  return (
    <>
      <Container hasHeaderBackground={hasHeaderBackground}>
        <LogoFull />
        <Form onSubmit={handelSubmit} ref={formRef}>
          <Input
            id="search"
            type="text"
            name="search"
            placeholder="PESQUISAR"
          />
          <button type="submit">
            <IoSearch />
          </button>
        </Form>
        <div>
          <Button text="ENTRAR" onClick={handleToggleModal} />
          <Link href="/signup" text="CADASTRE-SE" variant="tertiary" />
        </div>
      </Container>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <LoginModal />
      </Modal>
    </>
  );
};

export { Header };
