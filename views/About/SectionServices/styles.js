import styled from 'styled-components';
import Text from 'components/Text';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';

export const CartTitle = styled(Text)`
  margin-bottom: 30px;
  height: auto;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(32)};
    height: ${px2vw(78)};
  }
`;

export const ServiceCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(32)};
    width: 30%;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 80px;

  @media (min-width: ${breakpoint.lg}) {
    padding-bottom: ${px2vw(120)};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`;
