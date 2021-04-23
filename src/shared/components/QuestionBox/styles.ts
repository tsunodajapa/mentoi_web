import styled, { css } from 'styled-components';

interface ContainerProps {
  titleColor: [string, string];
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-background);

  border-radius: 1.2rem;
  margin: 0.8rem 0.8rem 2.8rem 0.8rem;
  box-shadow: 0 1.3rem 8.1rem -0.7rem rgba(0, 0, 0, 0.15);

  > div:nth-child(1) {
    ${({ titleColor }) =>
      css`
        background: linear-gradient(
          to right,
          ${titleColor ? titleColor[0] : 'var(--color-primary)'},
          ${titleColor ? titleColor[1] : 'var(--color-primary)'} 112%
        );
      `}

    margin: 0;
    padding: 0.6rem;
    border-radius: 1.2rem 1.2rem 0 0;

    color: var(--color-text-in-primary);
    font-weight: 700;
    font-size: 2rem;
  }

  @media (max-width: 475px) {
    margin-bottom: 1.8rem;

    > div:nth-child(1) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;

  > div:last-child {
    display: flex;
    justify-content: space-between;

    margin-top: 1.6rem;
    border-top: 0.1rem solid var(--color-primary-light);
    padding: 1rem 0;

    div {
      display: flex;
      align-items: center;
      color: var(--color-text-complement);

      svg {
        width: 2rem;
        height: 2rem;
      }

      span {
        margin-left: 0.3rem;
      }
    }

    button {
      background: transparent;

      padding: 0.5rem 2rem;
      border-radius: 1.5rem;
      border: 0.1rem solid var(--color-primary);

      color: var(--color-primary);

      transition: background-color 0.2s linear;
    }

    button:hover {
      background: var(--color-primary);
      color: var(--color-text-in-primary);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.6rem;

  > div {
    display: flex;
    align-items: center;

    > div:nth-child(1) {
      position: relative;
      width: 4.5rem;
      height: 4.5rem;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-left: 1.5rem;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 1.8rem;
      }

      span:nth-child(2) {
        color: var(--color-text-complement);
        font-size: 1.4rem;
      }
    }
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    background-color: #af579d;

    border-radius: 50%;
    border: none;
  }

  > span {
    align-self: flex-start;

    margin-top: 0.4rem;

    color: var(--color-text-complement);
  }
`;
