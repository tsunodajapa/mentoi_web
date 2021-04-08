import styled from 'styled-components';

export const Container = styled.section`
  background: var(--color-background);

  border-radius: 1.2rem;
  margin: -0.8rem;
  padding: 0.8rem;

  > div {
    display: flex;
    align-items: center;

    > div {
      width: 3.8rem;
      height: 3.8rem;
      background-color: #edb12a;
      border-radius: 50%;

      margin-right: 0.5rem;
    }

    label {
      color: var(--color-text);
      font-size: 2.4rem;
      font-weight: 700;
    }
  }

  textarea {
    width: 100%;

    margin-top: 0.8rem;
    border: 0.2rem solid var(--color-text-complement);
    border-radius: 1.5rem;
    resize: none;
  }

  @media (max-width: 475px) {
    display: none;
  }
`;
