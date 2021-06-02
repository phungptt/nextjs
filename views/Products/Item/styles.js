import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-top: 10px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(10)};
  }
`;

export const ProductCard = styled.a`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: auto;
  object-fit: contain;

  max-height: 280px;

  @media (min-width: ${breakpoint.xl}) {
    margin-bottom: ${px2vw(50)};
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  font-size: 18px;
  margin-top: 20px;
  color: var(--warm-grey);
`;
