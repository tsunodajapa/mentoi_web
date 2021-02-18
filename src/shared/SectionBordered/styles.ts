import styled, { css } from 'styled-components';

import { BorderTypes } from './index';

interface ContainerProps {
  border: BorderTypes;
}

export const Container = styled.section<ContainerProps>`
  background: transparent;

  border: 2.4rem solid var(--color-primary-light);

  ${({ border }) => {
    switch (border) {
      case BorderTypes.TOP:
        return css`
          border-radius: 1.5rem 1.5rem 0 0;
        `;

      case BorderTypes.BOTTOM:
        return css`
          border-radius: 0 0 1.5rem 1.5rem;
        `;

      case BorderTypes.FULL:
        return css`
          border-radius: 1.5rem;
        `;

      default:
        return css`
          border-radius: 0;
        `;
    }
  }}
`;
