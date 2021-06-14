import styled from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

interface StepProps {
  step: number;
}

export const Main = styled(MainDefault)`
  margin-top: -10px;
`;

export const Section = styled.section<StepProps>`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 5.1rem);

  section {
    margin-left: 1.5rem;
    padding: 0 5rem;
    flex: 1;
    max-width: 80rem;
  }
`;
