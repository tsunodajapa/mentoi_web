import styled, { css } from 'styled-components';

interface ContainerPros {
  boxContent: boolean;
}

interface FilesPreviewContainerProps {
  isModal?: boolean;
}

const boxContentStyles = css`
  height: 20rem;
  background: var(--color-primary-light);
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  outline: 0;

  cursor: pointer;

  p {
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
    border-radius: 1rem;
    border: 0.1rem dashed var(--color-primary);
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #333;

    svg {
      color: var(--color-primary);
      width: 2.4rem;
      height: 2.4rem;
      margin-bottom: 0.8rem;
    }
  }
`;

export const Container = styled.div<ContainerPros>`
  ${({ boxContent }) => boxContent && boxContentStyles}
`;

export const FilesPreviewContainer = styled.div<FilesPreviewContainerProps>`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding-right: 4.2rem;
  margin: 1rem;

  img,
  div,
  > button {
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

  > button:after {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    background: #0000002b;
    top: -3px;
    left: -2px;
    border-radius: 0.8rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > svg:first-child {
      width: 75% !important;
      height: 75%;
      margin-left: 0 !important;
    }

    button {
      position: absolute;
      top: -8px;
      right: -11px;
      background: var(--color-red);
      border-radius: 50%;
      cursor: pointer;
      z-index: 1003;

      > svg {
        width: 2rem !important;
        height: 100% !important;
        color: #fff;
        margin-left: 0 !important;
      }
    }
  }

  > div:not(:first-child),
  > div:not(:nth-child(5n)),
  button:not(:nth-child(5n)) {
    margin-left: 1rem;
  }

  ${({ isModal }) =>
    isModal &&
    css`
      > div {
        margin: 1rem;
      }
    `}
`;
