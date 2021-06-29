import styled from 'styled-components';

export const Header = styled.header`
  background-color: var(--color-background);
  box-shadow: 0px -0.1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.15);
  max-height: 6rem;

  position: sticky;
  top: 0;
  z-index: 1001;

  > div:first-child {
    max-width: 1080px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 0.8rem 0.5rem;
  }
`;
