import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 10px 0;

  div {
    display: flex;

    overflow: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    span:nth-child(1) {
      width: 160px;
      min-width: 160px;
    }

    span {
      width: 140px;
      min-width: 140px;

      padding: 5px 10px;
      margin: 0 5px;
      border: 1px solid #f10;
      border-radius: 10px;
      white-space: nowrap;
      scroll-snap-align: start;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
