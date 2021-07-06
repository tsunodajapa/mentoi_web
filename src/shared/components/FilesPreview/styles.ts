import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  align-items: center;

  margin: 0 0.4rem -1rem auto;
  width: fit-content;

  > span {
    text-align: center;
    margin-bottom: 0.6rem;
    color: var(--color-primary);
  }

  > div {
    background: #ddecd7;
    width: fit-content;
    border-radius: 15px 15px 0 0;
    padding: 1rem;

    img,
    div,
    a {
      position: relative;
      width: 50px;
      height: 50px;
      object-fit: contain;
      background: var(--color-primary);

      color: var(--color-text-in-primary);
      font-size: 2rem;

      border: 2px solid var(--color-primary);
      border-radius: 0.8rem;
    }

    a:hover :after {
      content: '';
      width: 50px;
      height: 50px;
      position: absolute;
      background: #0000009b;
      top: -3px;
      left: -2px;
      border-radius: 0.8rem;
      z-index: 1000;
    }

    a:hover svg:last-child {
      display: block;
    }

    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      svg:first-child {
        width: 100% !important;
        height: 75% !important;
        margin-left: 0 !important;
        color: #fff;
      }

      svg:last-child {
        position: absolute;
        display: none;
        color: var(--color-tertiary);
        z-index: 1001;
        transform: scale(1.2);
      }
    }

    > a + a {
      margin-left: 1rem;
    }
  }
`;
