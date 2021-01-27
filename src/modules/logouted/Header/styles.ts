import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-background);
  box-shadow: 0px -1px 3px 2px rgba(0, 0, 0, 0.15);

  width: 100vw;

  position: sticky;
  top: 0;

  > div {
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 10px auto;
    padding: 8px 5px;

    div {
      display: flex;
      justify-content: space-between;

      a {
        margin: 0 8px;
        outline: none;
        text-decoration: none;
        border: 1px solid;
        border-radius: 15px;
        padding: 5px 15px;
      }

      a:nth-child(1) {
        color: var(--color-text-complement);
      }

      a:nth-child(2) {
        background: var(--color-primary);
        color: var(--color-text-in-primary);
      }

      @media (max-width: 425px) {
        a {
          border: none;
          padding: 0;
        }

        a:nth-child(2) {
          background: none;
          color: var(--color-primary);
          font-weight: 700;
        }
      }
    }
  }
`;
