import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

export const BlogListWrap = styled.div`
  padding: 80px 0 100px;
  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(80)} 0 ${px2vw(170)};
  }
  .btn-action {
    margin-top: 60px;
    @media (min-width: ${breakpoint.lg}) {
      margin-top: ${px2vw(60)};
    }
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

export const Title = styled(Text)`
  margin-bottom: 10px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(0)};
  }
`;

export const Wrapper = styled.div`
  margin-top: 120px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(160)};
  }
`;
