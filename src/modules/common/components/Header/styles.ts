import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;

  border-bottom: 0.15rem solid var(--color-text-complement);

  padding: 0.8rem 3.2rem;
  margin: 0 auto 1rem auto;

  form {
    width: 35rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerMobile = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  background-color: var(--color-background);

  padding: 0.8rem 3.2rem;

  button {
    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
