import styled from 'styled-components';

export const Container = styled.section`
  background: #ffffff;

  border-radius: 12px;
  margin: -8px;
  padding: 8px;

  > div {
    display: flex;
    align-items: center;

    > div {
      width: 38px;
      height: 38px;
      background-color: #edb12a;
      border-radius: 50%;

      margin-right: 5px;
    }

    label {
      color: #3d3d3d;
      font-size: 24px;
      font-weight: bold;
    }
  }

  textarea {
    width: 100%;

    margin-top: 8px;
    border: 2px solid #a2a2a1;
    border-radius: 15px;
    resize: none;
  }
`;
