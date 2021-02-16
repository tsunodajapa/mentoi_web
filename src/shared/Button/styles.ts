import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-text-in-primary);
  margin: 0 8px;
  outline: none;
  text-decoration: none;
  border: 1px solid;
  border-radius: 15px;
  padding: 5px 15px;

  @media (max-width: 425px) {
    border: none;
    padding: 0;
    background: none;
    color: var(--color-primary);
    font-weight: 700;
  }
`;
