import { Form } from '@unform/web';
import styled from 'styled-components';

export const FormQuestion = styled(Form)`
  width: 100%;

  button {
    width: 100%;
    margin-top: 0.8rem;
  }

  @media (max-width: 475px) {
    button {
      width: 12rem;
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
`;
