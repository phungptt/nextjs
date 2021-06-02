import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

const Title = styled(Text)`
  margin-bottom: 60px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(60)};
  }
`;

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 90px;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(120)};
    padding-bottom: ${px2vw(100)};
  }
`;



export { Title, Wrapper };