import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(32)};
  }
`;

const Wrapper = styled.div`
  padding-top: 140px;
  padding-bottom: 80px;
  background: #f8f8f8;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(200)};
    padding-bottom: ${px2vw(200)};
  }
`;

export { Title, Wrapper };
