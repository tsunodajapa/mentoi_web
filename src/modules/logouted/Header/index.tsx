import Logo from '@/assets/logo_mentoi.svg';

import { Container } from './styles';

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <Logo />

          <div>
            <a href="#_">CADASTRO</a>
            <a href="#_">ENTRAR</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
