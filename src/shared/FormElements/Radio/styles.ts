import styled, { css } from 'styled-components';

import { ErrorDefault } from '../styles';

export const Label = styled.label`
  display: flex;
`;

export const Error = styled(ErrorDefault)`
  position: relative;
  margin-left: 0.8rem;
`;
