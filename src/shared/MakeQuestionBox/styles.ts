import styled from 'styled-components';

export const Container = styled.section`
  background: var(--color-background);

  border-radius: 12px;
  margin: -8px;
  padding: 8px;

  > div {
    display: flex;
    align-items: center;

    > div {
      width: 38px;
      height: 38px;
      background-color: #edb12a;
      border-radius: 50%;

      margin-right: 5px;
    }

    label {
      color: var(--color-text);
      font-size: 24px;
      font-weight: 700;
    }
  }

  textarea {
    width: 100%;

    margin-top: 8px;
    border: 2px solid var(--color-text-complement);
    border-radius: 15px;
    resize: none;
  }
`;
