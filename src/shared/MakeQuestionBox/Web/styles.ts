import styled from 'styled-components';

export const Container = styled.button`
  @media (max-width: 475px) {
    display: none;
  }

  width: 100%;
  background: var(--color-background);

  display: flex;
  align-items: center;

  padding: 0.8rem;
  border: none;
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 700;
`;
