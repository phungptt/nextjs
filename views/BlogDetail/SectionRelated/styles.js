import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';
import { Colors } from 'components/theme';

export const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;

export const RelatedList = styled.div`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(60)};
    width: ${px2vw(854)};
  }
`;

export const Wrapper = styled.div`
  padding: 100px 0;
  background: ${Colors.whiteTwo};

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(130)} 0;
  }
`;
