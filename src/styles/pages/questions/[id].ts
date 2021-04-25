import styled from 'styled-components';
import { Main as MainDefault } from '../../../shared/components/Main/styles';

export const Main = styled(MainDefault)`
  div {
    display: flex;

    > section:first-child {
      width: 75%;
    }
    > section:last-child {
      width: min(22rem, 20%);
    }
  }
`;
