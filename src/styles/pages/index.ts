import { Form as Unform } from '@unform/web';
import styled, { css } from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;

  color: var(--color-text-complement);

  h1 {
    color: var(--color-text);
    line-height: 5.5rem;
  }

  h2 {
    font-size: 4.6rem;
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
  height: 100vh;
  padding: 0 9rem;

  display: flex;
  flex-direction: column;

  > div {
    margin-right: 55px;
    padding-top: 3rem;
    display: flex;
    justify-content: space-between;

    svg {
      transform: scale(2);
      margin-left: 5.8rem;
      margin-bottom: 4rem;
    }

    button {
      font-size: 1.8rem;
      margin: 0 0.8rem;
      padding: 0.4rem 1.5rem;
    }
  }

  article {
    display: flex;
    align-items: center;

    > img {
      height: 100vh;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    > div {
      width: min(40%, 510px);
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 4.6rem;
        font-weight: 700;
      }

      p {
        position: relative;
        margin: 2rem 4rem 1rem 10px;
        font-size: 2.2rem;
        text-align: left;
        line-height: 3.2rem;
      }

      p:after {
        content: '';
        position: absolute;
        width: 3px;
        height: 94%;
        top: 0;
        left: -10px;
        margin-top: 7px;
        background: var(--color-primary);
      }

      > a {
        width: fit-content;
      }
    }

    @media (max-width: 1500px) and (min-height: 800px) {
      img {
        height: 80vh;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0.5rem 1.5rem;
    height: auto;

    article {
      > div {
        width: 100%;

        p {
          margin: 2rem;
        }
      }
    }

    form {
      margin-bottom: -30px;
    }

    img {
      display: none;
    }
  }

  @media (min-width: 1800px) {
    > div {
      width: 50%;

      h1 {
        font-size: 6.6rem;
      }

      p {
        font-size: 3.5rem;
        line-height: 3.5rem;
      }

      > a {
        font-size: 1.8rem;
        padding: 0.4rem 1.5rem;
      }
    }
  }
`;

export const Form = styled(Unform)`
  display: flex;
  background: #fff;
  padding: 8px;
  margin-top: 2rem;
  border-radius: 46px;
  box-shadow: 1px -1px 10px 0px rgb(0 0 0 / 50%);

  > div {
    flex: 1;
    margin-right: 15px;
  }

  button {
    background: var(--color-primary);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    svg {
      transform: scale(0.8);
      color: var(--color-text-in-primary);
    }
  }
`;

export const SectionContents = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url('./background-how-use.jpg');

  padding: 3rem 0;

  article {
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    a {
      display: flex;
      align-items: center;

      box-shadow: 0rem 0.3rem 1rem 0.2rem rgba(0, 0, 0, 0.15);
      background: var(--color-background);
      width: 28rem;
      border: none;
      border-radius: 1.8rem;
      margin: 1.4rem;
      padding: 1.4rem;
      padding-left: 1.8rem;

      font-weight: bold;
      font-size: 2.4rem;
      color: var(--color-text);
      text-decoration: none;

      svg {
        transform: scale(1.2);
      }

      span {
        flex: 1;
        text-align: center;
        text-decoration: none;
      }
    }

    a:last-child {
      background: var(--color-primary);
      color: var(--color-text-in-primary);
    }
  }

  @media (max-width: 880px) {
    article {
      margin: 0;
      margin-top: 3rem;
    }
  }

  @media (max-width: 440px) {
    padding-top: 6rem;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  background: var(--color-primary);
  border-radius: 1.8rem;
  position: relative;

  margin: 3rem auto;
  padding: 1rem;
  width: 65%;

  article {
    width: 80%;
    padding: 0 0.8rem;

    color: var(--color-text-in-primary);

    h3 {
      color: var(--color-text-in-primary);
      font-size: 3rem;
    }

    p {
      text-align: center;
      font-size: 1.8rem;
    }
  }
  svg {
    position: absolute;
    right: -78px;
    top: -33px;
    transform: scale(1.2);
    margin: 1rem 4rem;
  }

  @media (max-width: 700px) {
    width: 90%;

    article {
      width: 100%;
      flex-direction: column;
      align-items: center;

      p {
        width: 100%;
        padding: 1.5rem;
      }
    }
    svg {
      transform: translate(50%, 50%) scale(1.5);
      opacity: 0.1;
      top: -56px;
      right: auto;
    }
  }
`;

export const SectionEducator = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 65%;
  margin: 5rem auto;

  svg {
    transform: scale(1.3);
  }

  article {
    width: 60%;
    padding-left: 3.8rem;

    p {
      text-align: center;
      font-size: 1.8rem;
      padding: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    max-width: 100%;

    article {
      width: 100%;
      margin: 0 0.5rem;
    }
    svg {
      display: none;
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
      margin: 1rem;
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

    li a {
      text-decoration: none;
      color: var(--color-text-complement);
    }

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
