import styled from 'styled-components';

import { ContainerDefault, ErrorDefault } from '../styles';

export const Container = styled(ContainerDefault)`
  & + label {
    margin-top: 0.8rem;
  }
`;

export const Error = styled(ErrorDefault)``;
