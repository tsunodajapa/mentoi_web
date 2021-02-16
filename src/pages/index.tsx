import Background from '@/assets/background_home.svg';
import BackgroundSecurity from '@/assets/background_security.svg';
import IconHands from '@/assets/icon_hands.svg';
import IconKnowledge from '@/assets/icon_knowledge.svg';
import IconMortaboard from '@/assets/icon_mortaboard.svg';
import Logo from '@/assets/logo_mentoi_two_line.svg';

import Header from '@/modules/logouted/Header';
import InputAndSelect from '@/shared/InputAndSelect';
import Carousel from '@/shared/Carousel';

import {
  Container,
  SectionHome,
  SectionAbout,
  SectionAboutSecurity,
  SectionFinal,
  Card,
  Footer,
} from '@/styles/pages/index';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <SectionHome>
          <div>
            <h1>Aprenda com os melhores</h1>
            <p>
              Mentoi é uma plataforma educacional que possibilita a interação
              entre estudantes e professores ou profissionais da área com
              atuação verificada, garantindo responsabilidade nas respostas e
              evitando respostas com erros ou Fake News
            </p>

            <InputAndSelect />
          </div>
          <Background />
        </SectionHome>

        <SectionAbout>
          <h2>COMO FUNCIONA</h2>

          <article>
            <Carousel arrowVisible={false}>
              <Card>
                <IconHands />
                <h3>Dúvida</h3>
                <p>
                  O estudante relata sua dúvida no fórum do conteúdo, podendo
                  anexar imagens ou vídeos. Podendo ser uma questão de algum
                  conteúdo escolar ou outra área de interesse.
                </p>
              </Card>
              <Card>
                <IconMortaboard />
                <h3>Mentoria</h3>
                <p>
                  Estudantes e professores podem cadastrar a escola em que
                  atuam, compartilhando o mesmo espaço virtual para dúvidas e
                  outras orientações. Ou utilizarem o fórum geral.
                </p>
              </Card>
              <Card>
                <IconKnowledge />
                <h3>Conhecimento</h3>
                <p>
                  Os professores verificados poderão responder as questões,
                  anexar vídeos ou fotos. Tendo sua resposta avaliada.
                  Garantindo um destaque como orientador na plataforma.
                </p>
              </Card>
            </Carousel>
          </article>
        </SectionAbout>

        <SectionAboutSecurity>
          <h2>SEGURANÇA</h2>

          <article>
            <BackgroundSecurity />
            <p>
              Durante a pandemia de COVID-19, vários professores relataram
              problemas com vídeo-aulas e respostas encontradas na internet. Em
              muitos dos casos, são vídeos e textos produzidos por algúem sem
              formação na área, onde os alunos se inspiram nesses materias que,
              por conter erros, pode prejudicar a construção do conhecimento do
              aluno.
              <br />
              Para evitar esse erros, no Mentoi os professores e profissionais
              são verificados, sendo as respostas certificas por outros
              professores e profissionais.
            </p>
          </article>
        </SectionAboutSecurity>

        <SectionFinal>
          <div>
            <span>Precisa de ajuda para uma prova ou trabalho?</span>
            <span>Nós podemos te ajudar, cadastre e faça sua pergunta</span>
          </div>

          <a href="#_">CADASTRE-SE</a>
        </SectionFinal>

        <Footer>
          <Logo />
          <div>
            <ul>
              <li>Sobre nós</li>
              <li>Contato</li>
            </ul>
            <ul>
              <li>Ajuda</li>
              <li>Regulamento</li>
              <li>Política de privacidade</li>
            </ul>
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default Main;
