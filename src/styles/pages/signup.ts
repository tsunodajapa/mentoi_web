import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  min-height: calc(100vh - 6rem);
  margin: 0 auto;

  color: var(--color-text-complement);

  display: flex;
  align-items: center;

  > span {
    width: 50%;

    color: rgba(100, 180, 71, 0.6);
    background-color: rgba(255, 255, 255, 0.9);
    font-size: 7rem;
    line-height: 10.5rem;
    text-align: right;
    /* margin-right: 1.5rem; */
    padding-right: 1.5rem;

    span {
      font-size: 0.8em;
    }
  }

  > div {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;

    form {
      margin: auto;
      width: 340px;
      max-width: 80%;

      label + div {
        margin-bottom: 1rem;
      }

      button {
        border-radius: 1.8rem;
        padding: 0.8rem 1.5rem;
      }
    }
  }

  h1 {
    text-align: center;
    color: var(--color-primary);
    margin-top: 1rem;
  }
`;

export const Footer = styled.div`
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    color: var(--color-text);

    font-weight: 500;

    > input {
      height: 1.8rem;
      width: 1.8rem;
      margin-right: 0.4rem;
      cursor: pointer;
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--color-primary);
    }
  }
`;

export const Border = styled.div`
  border: 0.08rem solid var(--color-primary-light);
  margin: 2rem auto !important;
  padding: 0 7.4rem;
  width: 94%;
`;
