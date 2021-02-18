import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;

  color: var(--color-text-complement);

  h1 {
    color: var(--color-text);
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h2,
  h3 {
    color: var(--color-primary);
    text-align: center;
    font-weight: 700;
  }
`;

export const SectionHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  > div {
    width: 40%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 5.6rem;
      font-weight: 700;
    }

    p {
      margin: 1rem 4rem 1rem 0;
      font-size: 1.8rem;
      text-align: left;
    }
  }

  @media (max-width: 700px) {
    padding: 0.5rem 1.5rem;

    > svg {
      display: none;
    }

    > div {
      width: 100%;

      p {
        margin: 0;
      }
    }
  }
`;

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary-transparent);

  padding: 3rem 0;

  article {
    margin: auto;
  }

  @media (max-width: 880px) {
    article {
      margin: 0;
      margin-top: 3rem;
    }
  }
`;

export const Card = styled.div`
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 22rem;
  max-width: 22rem;
  min-width: 22rem;
  box-shadow: 0rem 0.3rem 1rem 0.2rem rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1.5rem 3.6rem;

  color: var(--color-text-complement);
  text-align: center;
  scroll-snap-align: center;

  svg {
    margin: 1rem 0;
  }

  h3 {
    margin: 1rem 0;
    font-size: 2.2rem;
  }

  @media (max-width: 500px) {
    margin: 1.5rem;
  }
`;

export const SectionAboutSecurity = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;

  article {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 3rem;

    svg {
      margin: 1rem 4rem;
    }

    p {
      width: 40%;
      text-align: justify;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 700px) {
    article {
      flex-direction: column;
      align-items: center;

      p {
        width: 100%;
        padding: 1.5rem;
      }
    }
  }
`;

export const SectionFinal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  padding: 1rem 0;

  span {
    display: block;
  }

  span:nth-child(1) {
    color: var(--color-primary);
  }

  span:nth-child(2) {
    color: var(--color-text-in-primary);
  }

  a {
    background-color: var(--color-background);

    margin: 0.2rem 1.8rem;
    outline: none;
    border-radius: 1.5rem;
    padding: 0.8rem 1.5rem;

    font-weight: 700;
    text-decoration: none;
    color: var(--color-secondary);
    width: fit-content;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    text-align: center;

    a {
      margin-top: 1rem;
    }
  }
`;

export const Border = styled.div`
  margin: 3rem 0;
  border-top: 1rem solid var(--color-text-complement);
  opacity: 0.4;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 1.5rem;

  div {
    display: flex;
    justify-content: space-around;
  }

  ul {
    list-style-type: none;
    margin: 0 1rem;

    li + li {
      margin-top: 1rem;
    }
  }

  @media (max-width: 425px) {
    div {
      flex-direction: column;
    }

    ul {
      margin-top: 1rem;
    }

    svg {
      width: 90%;
    }
  }
`;
