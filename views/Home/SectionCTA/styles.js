import styled from 'styled-components';

import Text from 'components/Text';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  padding-bottom: 100px;

  @media (min-width: ${breakpoint.lg}) {
    padding-bottom: ${px2vw(160)};
  }
`;

export const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(60)};
  }
`;
