import styled from 'styled-components';

import { ErrorDefault } from '../styles';

export const Label = styled.label`
  display: flex;

  div + & {
    margin-top: 0.5rem;
  }
`;

export const Error = styled(ErrorDefault)`
  position: relative;
  margin-left: 0.8rem;
`;
