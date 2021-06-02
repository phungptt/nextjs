import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled, { css } from 'styled-components';

import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 10px;
  margin-top: 5px;
  text-align: center;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(5)};
    margin-bottom: ${px2vw(15)};
    text-align: inherit;
  }
`;

export const BlogCardWrap = styled.a`
  width: 100%;
  display: inline-block;

  @media (min-width: ${breakpoint.lg}) {
    padding-bottom: ${px2vw(40)};
  }
`;

export const ButtonLink = styled.a`
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  color: var(--greenish-teal);
  font-size: 20px;
  margin-top: 20px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background: var(--greenish-teal);
    transition: 300ms;
  }

  &:hover {
    color: var(--dusk);
    &::after {
      background: var(--dusk);
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${px2vw(20)};
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(28)};

    ${({ center }) =>
      center
        ? css`
            align-items: center;
            justify-content: center;
          `
        : css`
            align-items: flex-start;
            justify-content: flex-start;
          `};
  }
`;

export const BlogThumb = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: ${breakpoint.lg}) {
    img {
      width: 100%;
      object-fit: cover;
      height: 660px;
    }

    ${({ firstItem }) =>
      !firstItem &&
      css`
        img {
          height: 320px;
        }
      `}
  }
`;
