import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;

  border-bottom: 1.5px solid var(--color-text-complement);

  padding: 8px 32px;
  margin: 0 auto 10px auto;

  form {
    width: 350px;
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
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: var(--color-background);

  padding: 8px 32px;

  button {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;
