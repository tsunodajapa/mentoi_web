import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  justify-content: space-between;

  div {
    display: flex;
    width: 100%;

    overflow: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    @media (hover: none), (max-width: 500px) {
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
