import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { SectionGrey } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors } from 'components/theme';

export const Title = styled(Text)`
  margin-bottom: 40px;

  @media (min-width: ${breakpoint.lg}) {
    position: absolute;
    right: 100%;
    transform: rotate(270deg);
    top: 10px;
    margin-bottom: 0;
    padding-bottom: 0;
    transform-origin: right top;
    white-space: nowrap;
  }
`;

export const Image = styled.img`
  width: auto;
  object-fit: contain;
  margin: 0 auto;

  @media (max-width: ${breakpoint.xs}) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Colors.steel};
  margin: 70px 0;

  @media (min-width: ${breakpoint.lg}) {
    margin: ${px2vw(120)} 0;
    padding-left: ${px2vw(160)};
  }
`;

export const Description = styled(Text)`
  margin-bottom: 40px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(60)};
  }
`;

export const Wrapper = styled(SectionGrey)`
  padding: 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(120)} 0;
  }
`;

export const SectionTextBlock = styled.div`
  position: relative;

  @media (min-width: ${breakpoint.lg}) {
    padding-left: ${px2vw(160)};
  }
`;

export const SectionTextBlockContent = styled.div``;

export const ProductGroupText = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;
