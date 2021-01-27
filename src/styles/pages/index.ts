import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;

  color: var(--color-text-complement);

  h1 {
    color: var(--color-text);
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 22px;
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
  padding: 30px 0;

  > div {
    width: 40%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 56px;
      font-weight: 700;
    }

    p {
      margin: 10px 40px 10px 0;
      font-size: 18px;
      text-align: left;
    }
  }
  @media (max-width: 700px) {
    padding: 5px 15px;

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

  padding: 30px 0;

  article {
    margin: auto;
  }

  @media (max-width: 880px) {
    article {
      margin: 0;
      margin-top: 30px;
    }
  }
`;

export const Card = styled.div`
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 220px;
  max-width: 220px;
  min-width: 220px;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 15px;
  margin: 15px 36px;

  color: var(--color-text-complement);
  text-align: center;
  scroll-snap-align: center;

  svg {
    margin: 10px 0;
  }

  h3 {
    margin: 10px 0;
    font-size: 22px;
  }

  @media (max-width: 500px) {
    margin: 15px;
  }
`;

export const SectionAboutSecurity = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;

  article {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 30px;

    svg {
      margin: 10px 40px;
    }

    p {
      width: 40%;
      text-align: justify;
      font-size: 18px;
    }
  }

  @media (max-width: 700px) {
    article {
      flex-direction: column;
      align-items: center;

      p {
        width: 100%;
        padding: 15px;
      }
    }
  }
`;

export const SectionFinal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  padding: 10px 0;

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

    margin: 2px 18px;
    outline: none;
    border-radius: 15px;
    padding: 8px 15px;

    font-weight: 700;
    text-decoration: none;
    color: var(--color-secondary);
    width: fit-content;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    text-align: center;

    a {
      margin-top: 10px;
    }
  }
`;

export const Border = styled.div`
  margin: 30px 0;
  border-top: 1px solid var(--color-text-complement);
  opacity: 0.4;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 15px;

  div {
    display: flex;
    justify-content: space-around;
  }

  ul {
    list-style-type: none;
    margin: 0 10px;
    /* text-align: center; */

    li + li {
      margin-top: 10px;
    }
  }

  @media (max-width: 425px) {
    div {
      flex-direction: column;
    }

    ul {
      margin-top: 10px;
    }
  }
`;
