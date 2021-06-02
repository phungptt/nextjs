import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import { SectionGrey } from 'components/theme/styles';

export const ProductSectionWrapper = styled.section`
  margin-bottom: 50px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(200)};
  }
`;

export const MediaSection = styled(SectionGrey)`
  padding-top: 80px;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(160)};
  }
`;
