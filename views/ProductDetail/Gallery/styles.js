import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(50)};
  }
`;

export const Wrapper = styled.div`
  padding: 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(120)} 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    min-height: ${px2vw(300)};
    margin-bottom: ${px2vw(50)};
  }
`;

export const Image = styled.img`
  padding: 0 20px;
  object-fit: contain;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpoint.lg}) {
    padding: 0 ${px2vw(40)};
  }
`;
