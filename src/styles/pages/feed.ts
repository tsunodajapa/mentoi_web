import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  overflow-x: hidden;

  @media (max-width: 475px) {
    margin-top: -1rem;
  }
`;
