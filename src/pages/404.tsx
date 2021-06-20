import Background404 from '@/assets/404.svg';
import { Link } from '@/shared/components/Buttons/Link';
import { Container } from '@/styles/pages/404';

const pages = () => {
  return (
    <Container>
      <Background404 />
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <Link href="/" text="RETORNAR À HOME" />
    </Container>
  );
};

export default pages;
