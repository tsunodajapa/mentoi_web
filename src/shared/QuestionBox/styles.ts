import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;

  border-radius: 12px;
  margin: 8px 8px 28px 8px;
  box-shadow: 0px 13px 81px -7px rgba(0, 0, 0, 0.15);

  > div:nth-child(1) {
    background: linear-gradient(to right, #6cb059, #9a84b8 112%);

    margin: 0;
    padding: 10px;
    border-radius: 12px 12px 0 0;

    color: #ffffff;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  padding: 15px 15px 10px 15px;

  > div:last-child {
    display: flex;
    justify-content: space-between;

    margin-top: 16px;
    border-top: 1px solid #d3e2cd;
    padding-top: 10px;

    div {
      display: flex;
      align-items: center;
      color: #a3a3a2;

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
      border: 1px solid #64b447;

      color: #64b447;
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
        font-weight: bold;
        font-size: 18px;
      }

      span:nth-child(2) {
        color: #a3a3a2;
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
    color: #a3a3a2;
  }
`;
