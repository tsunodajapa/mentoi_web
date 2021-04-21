import { Form } from '@unform/web';
import styled from 'styled-components';

export const FormQuestion = styled(Form)`
  width: 100%;

  > button {
    width: 100%;
    padding: 0.6rem 1.5rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 475px) {
    > button {
      width: 12rem;
      display: flex;
      justify-content: center;
      margin: 2rem auto;
    }
  }
`;
