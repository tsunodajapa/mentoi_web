import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background);

  border-radius: 12px;
  margin: 8px 8px 28px 8px;
  box-shadow: 0px 13px 81px -7px rgba(0, 0, 0, 0.15);

  > div:nth-child(1) {
    background: linear-gradient(to right, var(--color-primary), #9a84b8 112%);

    margin: 0;
    padding: 10px;
    border-radius: 12px 12px 0 0;

    color: var(--color-text-in-primary);
    font-weight: 700;
  }
`;

export const Content = styled.div`
  padding: 15px 15px 10px 15px;

  > div:last-child {
    display: flex;
    justify-content: space-between;

    margin-top: 16px;
    border-top: 1px solid var(--color-primary-light);
    padding-top: 10px;

    div {
      display: flex;
      align-items: center;
      color: var(--color-text-complement);

      svg {
        width: 20px;
        height: 20px;
      }

      span {
        margin-left: 3px;
      }
    }

    button {
      background: transparent;

      padding: 5px 20px;
      border-radius: 15px;
      border: 1px solid var(--color-primary);

      color: var(--color-primary);

      transition: background-color 0.2s linear;
    }

    button:hover {
      background: var(--color-primary);
      color: var(--color-text-in-primary);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 18px;
      }

      span:nth-child(2) {
        color: var(--color-text-complement);
        font-size: 14px;
      }
    }
  }

  img {
    width: 45px;
    height: 45px;
    background-color: #af579d;

    border-radius: 50%;
    border: none;
  }

  > span {
    color: var(--color-text-complement);
  }
`;
