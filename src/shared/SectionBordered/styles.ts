import styled, { css } from 'styled-components';

import { BorderTypes } from './index';

interface ContainerProps {
  border: BorderTypes;
}

export const Container = styled.section<ContainerProps>`
  background: transparent;

  border: 24px solid var(--color-primary-light);

  ${({ border }) => {
    switch (border) {
      case BorderTypes.TOP:
        return css`
          border-radius: 15px 15px 0 0;
        `;

      case BorderTypes.BOTTOM:
        return css`
          border-radius: 0 0 15px 15px;
        `;

      case BorderTypes.FULL:
        return css`
          border-radius: 15px;
        `;

      default:
        return css`
          border-radius: 0;
        `;
    }
  }}
`;
