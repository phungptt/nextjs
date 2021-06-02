import styled, { css } from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';

const fontSize = (size, customSize) => {
  if (customSize) return customSize.desktop || 16;
  switch (size) {
    case 'small':
      return 16;
    case 'normal':
      return 18;
    case 'smallMedium':
      return 20;
    case 'medium':
      return 24;
    case 'big':
      return 36;
    case 'biggest':
      return 70;
    case 'bigTitle':
      return 120;
    default:
      return 16;
  }
};

const mobileFontSize = (size, customSize) => {
  if (customSize) return customSize.mobile || 16;
  switch (size) {
    case 'small':
      return 14;
    case 'normal':
      return 16;
    case 'smallMedium':
      return 18;
    case 'medium':
      return 20;
    case 'big':
      return 28;
    case 'biggest':
      return 50;
    case 'bigTitle':
      return 80;
    default:
      return 16;
  }
};

const mobileFontSizeSmall = (size, customSize) => {
  if (customSize) return customSize.mobile || 16;
  switch (size) {
    case 'small':
      return 14;
    case 'normal':
      return 16;
    case 'smallMedium':
      return 18;
    case 'medium':
      return 20;
    case 'big':
      return 28;
    case 'biggest':
      return 35;
    case 'bigTitle':
      return 45;
    default:
      return 16;
  }
};

export const Text = styled.div`
  ${({
    size,
    fontWeight,
    lineHeight,
    color,
    fontFamily,
    whiteSpace,
    customSize
  }) => css`
    white-space: ${whiteSpace};
    line-height: ${lineHeight};
    font-size: ${mobileFontSize(size, customSize)}px;
    color: ${color};
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
  `};

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${({ size, customSize }) =>
      `${px2vw(fontSize(size, customSize))}`};
  }

  @media (max-width: ${breakpoint.md}) {
    font-size: ${({ size, customSize }) =>
      `${mobileFontSizeSmall(size, customSize)}px`};
  }
`;

export default Text;
