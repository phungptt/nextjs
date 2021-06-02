import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;

export const GroupButton = styled.div`
  text-align: center;
  margin-top: 30px;

  a {
    margin: 20px 25px;

    @media (min-width: ${breakpoint.lg}) {
      margin: 0 ${px2vw(25)};
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(40)};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 160px;
  padding-bottom: 160px;
  width: 100%;

  @media (min-width: ${breakpoint.lg}) {
    padding-top: ${px2vw(180)};
    padding-bottom: ${px2vw(160)};
    width: ${px2vw(1148)};
  }
`;

export const Image = styled.img`
  margin: 20px 0;
  object-fit: contain;
  width: 100%;

  @media (min-width: ${breakpoint.lg}) {
    margin: ${px2vw(20)} 0;
  }
`;
