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
  padding-top: 80px;
  padding-bottom: 100px;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(120)};
    padding-bottom: ${px2vw(160)};
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media (min-width: ${breakpoint.lg}) {
    width: 45%;
    margin-top: 0;
  }
`;

export { Title, Wrapper, Item, ItemWrapper };
