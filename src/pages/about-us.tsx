import { Container } from '@/styles/pages/about-us';

import Header from '@/modules/logouted/components/Header';

import LogoMentoi from '@/assets/icon_mentoi.svg';

const AboutUs = () => {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <h1>Nós somos MENTOI</h1>
        </section>
        <section>
          <h2>Sobre o MENTOI</h2>
          <p>
            Mentoi é uma plataforma educacional onde é possível realizar
            perguntas sobre diferentes áreas, que serão respondidas professores
            ou profissionais da área, garantindo responsabilidade nas respostas,
            sem Fake News ou teorias da conspiração. Contribuindo, também, para
            uma divulgação do conhecimento científico.
          </p>

          <h2>Por que existimos?</h2>
          <p>
            Nosso objetivo principal é combater o ideal anticientífico que tem
            abalado nossa sociedade nos últimos anos, com teorias da conspiração
            e fakenews, sendo um espaço de conversa direta entre usuários e
            especialistas da área. Assim, nós ajudamos os estudantes, a terem
            respostas didáticas e com credibilidade, criando um espaço
            confortável para a construção do conhecimento.
          </p>
          <LogoMentoi />
        </section>
      </main>
    </Container>
  );
};

export default AboutUs;
