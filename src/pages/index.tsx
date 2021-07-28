import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/shared/hooks/auth';

import BackgroundSecurity from '@/assets/background_security.svg';
import BackgroundLaptop from '@/assets/background_laptop.svg';
import Logo from '@/assets/logo_mentoi_two_line.svg';
import IconHands from '@/assets/icon_hands.svg';
import IconKnowledge from '@/assets/icon_knowledge.svg';
import IconMortaboard from '@/assets/icon_mortaboard.svg';
import IconAll from '@/assets/icon_all.svg';
import IconArt from '@/assets/icon_art.svg';
import IconBiology from '@/assets/icon_biology.svg';
import IconChemistry from '@/assets/icon_chemistry.svg';
import IconGeography from '@/assets/icon_geography.svg';
import IconHistory from '@/assets/icon_history.svg';
import IconMath from '@/assets/icon_math.svg';
import IconPhysics from '@/assets/icon_physics.svg';
import IconPortuguese from '@/assets/icon_portuguese.svg';

import Carousel from '@/shared/components/Carousel';

import {
  Container,
  SectionHome,
  SectionContents,
  SectionAbout,
  SectionAboutSecurity,
  SectionEducator,
  SectionFinal,
  Card,
  Footer,
  Form,
} from '@/styles/pages/index';
import SEO from '@/shared/components/SEO';
import { Link as ActionLink } from '@/shared/components/Buttons/Link';
import { Input } from '@/shared/components/FormElements';
import { Header } from '@/modules/logouted/components/HeaderHome';

import concatUrlParams from '@/shared/utils/concatUrlParams';
import { IoSearch } from 'react-icons/io5';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';

interface SubjectType {
  icon: JSX.Element;
  name: string;
  link: string;
}

const Subjects: SubjectType[] = [
  {
    icon: <IconPortuguese />,
    name: 'PORTUGUÊS',
    link: 'PORTUGUÊS',
  },
  {
    icon: <IconGeography />,
    name: 'GEOGRAFIA',
    link: 'GEOGRAFIA',
  },
  {
    icon: <IconArt />,
    name: 'ARTES',
    link: 'ARTES',
  },
  {
    icon: <IconBiology />,
    name: 'BIOLOGIA',
    link: 'BIOLOGIA',
  },
  {
    icon: <IconHistory />,
    name: 'HISTÓRIA',
    link: 'HISTÓRIA',
  },
  {
    icon: <IconChemistry />,
    name: 'QUÍMICA',
    link: 'QUÍMICA',
  },
  {
    icon: <IconMath />,
    name: 'MATEMÁTICA',
    link: 'MATEMÁTICA',
  },
  {
    icon: <IconPhysics />,
    name: 'FÍSICA',
    link: 'FÍSICA',
  },
  {
    icon: <IconAll />,
    name: 'TODAS',
    link: null,
  },
];

const Main = () => {
  const { user } = useAuth();
  const router = useRouter();

  const divInfiteScrollRef = useRef();
  const [hasHeaderBackground, setHasHeaderBackground] = useState(false);

  function handelSubmit(data: { search: string }) {
    const filter =
      router.pathname === '/feed'
        ? concatUrlParams(router, data.search, 'q')
        : `?q=${data.search}`;

    router.push(`/feed${filter}`, undefined, { shallow: true });
  }

  useEffect(() => {
    if (user) {
      router.push('feed');
    }
  }, [user, router]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entries]) => {
        const ratio = entries.intersectionRatio;

        if (ratio === 1 || window.scrollY > 550) {
          setHasHeaderBackground(true);
        } else {
          setHasHeaderBackground(false);
        }
      },
      {
        threshold: 1,
      },
    );

    if (divInfiteScrollRef.current)
      intersectionObserver.observe(divInfiteScrollRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiteScrollRef]);

  return (
    <>
      <SEO
        title="Mentoi | Plataforma Educacional para Professores e Alunos"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      <Header hasHeaderBackground={hasHeaderBackground} />
      <Container>
        <SectionHome>
          <article>
            <div>
              <h1>Professores e estudantes unidos pela educação</h1>
              <p>
                Mentoi é uma plataforma educacional que possibilita a interação
                e compartilhamento de informações entre estudantes e professores
                ou profissionais da área com atuação verificada, garantindo
                responsabilidade nas informações.
              </p>
              <ActionLink text="SAIBA MAIS" href="/about-us" />
              <Form onSubmit={handelSubmit}>
                <Input
                  id="search"
                  name="search"
                  placeholder="Qual sua dúvida?"
                />
                <ButtonIcon icon={IoSearch} />
              </Form>
            </div>
            <img src="./background-logo2.png" alt="" />
          </article>
        </SectionHome>

        <SectionContents>
          <h2>CONTEÚDOS</h2>

          <article ref={divInfiteScrollRef}>
            {Subjects.map(({ icon: Icon, link, name }) => (
              <Link
                key={name}
                href={`/feed${link ? `?areaInterest=${link}` : ''}`}
              >
                <a>
                  {Icon}
                  <span>{name}</span>
                </a>
              </Link>
            ))}
          </article>
        </SectionContents>

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
          <article>
            <h3>MATERIAIS VERIFICADOS</h3>
            <p>
              Quando os alunos procuram informações para trabalhos ou provas na
              internet, é comum encontrarem respostas errôneas. Para evitar
              esses erros, que podem prejudicar o aprendizado, no Mentoi os
              professores e profissionais são verificados, sendo as respostas
              certificadas por eles.
            </p>
          </article>
          <BackgroundSecurity />
        </SectionAboutSecurity>

        <SectionEducator>
          <BackgroundLaptop />

          <article>
            <h2>PARA O EDUCADOR</h2>
            <p>
              Na plataforma Mentoi, o educador terá um espaço acolhedor para que
              possa fazer o que sabe de melhor: educar! Terá o seu trabalho
              reconhecido, ganhando recompensas, ser pago por tutoriais e se
              destacar como referência no assunto.
            </p>
            <p>
              &quot;Se a educação sozinha não transforma a sociedade, sem ela
              tampouco a sociedade muda.&quot;
            </p>
          </article>
        </SectionEducator>

        <SectionFinal>
          <div>
            <span>Precisa de ajuda para uma prova ou trabalho?</span>
            <span>Nós podemos te ajudar, cadastre e faça sua pergunta</span>
          </div>

          <Link href="/signup">CADASTRE-SE</Link>
        </SectionFinal>

        <Footer>
          <Logo />
          <div>
            <ul>
              <li>
                <Link href="/about-us">Sobre nós</Link>
              </li>
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
