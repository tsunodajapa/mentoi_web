import styled from 'styled-components';

export const Container = styled.button`
  @media (max-width: 475px) {
    display: none;
  }

  > div {
    position: relative;
    width: 4rem;
    height: 4rem;
    margin-right: 0.8rem;
  }

  width: 100%;
  background: var(--color-background);

  display: flex;
  align-items: center;

  padding: 0.8rem;
  border: none;
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 700;
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 0.8rem;

  div:first-child {
    position: relative;
    width: 4rem;
    height: 4rem;

    margin-right: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-weight: bold;
    font-size: 1.6rem;
  }

  span {
    color: var(--color-text-complement);
    font-size: 1.4rem;
  }
`;
