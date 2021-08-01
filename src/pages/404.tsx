import Background404 from '@/assets/404.svg';
import { Link } from '@/shared/components/Buttons/Link';
import SEO from '@/shared/components/SEO';
import { Container } from '@/styles/pages/404';

const pages = () => {
  return (
    <>
      <SEO title="Página não encontrada" description="Página não encontrada" />
      <Container>
        <img src="./background-404-top.png" alt="background" />
        <img src="./background-404-bottom.png" alt="background" />
        <Background404 />
        <h1>PÁGINA NÃO ENCONTRADA</h1>
        <Link href="/" text="RETORNAR À HOME" />
      </Container>
    </>
  );
};

export default pages;
