import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 20px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(32)};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(180)};
    width: ${px2vw(1148)};
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: 50px;

  @media (min-width: ${breakpoint.lg}) {
    width: auto;
    max-width: 100%;
    margin-top: ${px2vw(100)};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(40)};
  }
`;
