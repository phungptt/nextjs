import { SectionGrey } from 'components/theme/styles';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 20px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(32)};
  }
`;

export const Wrapper = styled(SectionGrey)`
  padding: 100px 0;
  background-image: linear-gradient(to bottom, #434360 64%, #01b9ff 264%);

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(130)} 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: 30px;

  @media (min-width: ${breakpoint.lg}) {
    width: auto;
    max-width: 100%;
    margin-top: ${px2vw(20)};
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(1148)};
  }
`;
