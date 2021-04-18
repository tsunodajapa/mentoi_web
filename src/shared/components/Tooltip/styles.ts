import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 16rem;
    background: var(--color-red);
    padding: 0.8rem;
    border-radius: 0.4rem 0.4rem 0 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 0.8rem);
    right: -7.5rem;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--color-red) transparent;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      bottom: 2rem;
      top: 100%;
      position: absolute;
      left: 96.5%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
