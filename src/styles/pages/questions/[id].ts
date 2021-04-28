import styled from 'styled-components';
import { Main as MainDefault } from '../../../shared/components/Main/styles';

export const Main = styled(MainDefault)`
  > div {
    display: flex;
    justify-content: space-evenly;

    > section:first-child {
      width: 75%;
    }
    > div {
      display: flex;
      justify-content: center;
      width: 30%;

      > section:last-child {
        position: fixed;
        width: min(22rem, 20%);
      }
    }
  }
`;
