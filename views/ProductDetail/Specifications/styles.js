import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(32)};
  }
`;

export const SolventInks = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(1148)};
  }

  table {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  table tr td {
    padding: 0.75rem;
    vertical-align: top;
  }

  table tr td strong {
    font-weight: bold;
  }
  table tr td a {
    color: #01b9ff;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.14;
    color: #777777;
  }
`;

export const Wrapper = styled.div`
  padding: 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(120)} 0;
  }
`;

export const ProductSpecifications = styled.div`
  margin-top: 40px;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: ${px2vw(40)}vw;
  }

  ul {
    margin-top: 20px;
    li {
      padding-left: 20px;
      color: var(--steel);
      position: relative;
      &::before {
        content: '+';
        color: #4dd591;
        position: absolute;
        left: 0;
      }
    }
    @media (min-width: ${breakpoint.lg}) {
      margin-bottom: ${px2vw(20)};
      font-size: 1.042vw;
    }
  }
`;

export const ListPlus = styled.ul`
  margin-top: 20px;
  li {
    color: var(--steel);
    padding-left: 20px;
    position: relative;
    &::before {
      content: '+';
      color: #4dd591;
      position: absolute;
      left: 0;
    }
  }
  @media (min-width: ${breakpoint.md}) {
    margin-bottom: ${px2vw(20)};
    font-size: 1.042vw;
  }
`;
