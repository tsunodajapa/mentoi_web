import styled from 'styled-components';

export const InputGroup = styled.div`
  > div {
    display: flex;
    width: 100%;

    & + div {
      margin-top: 0.5rem;
    }

    > div:first-child {
      width: 15%;
      margin-right: 0.8rem;
    }

    > div:nth-child(2) {
      flex: 1;
      margin-top: 0;
    }
  }

  > button {
    margin: 1.5rem 0;
  }
  margin-bottom: 0.5rem;
`;
