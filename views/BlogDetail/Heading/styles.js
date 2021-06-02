import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import Text from 'components/Text';

export const Title = styled(Text)`
  margin-bottom: 20px;
  margin-top: 10px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(10)};
    margin-bottom: ${px2vw(32)};
  }
`;

export const BlogBanner = styled.div`
  width: 100%;
  margin-bottom: 40px;
  img {
    width: 100%;
    object-fit: cover;
    max-height: 500px;
  }

  @media (min-width: ${breakpoint.lg}) {
    img {
      max-height: ${px2vw(500)};
    }

    margin-bottom: ${px2vw(40)};
  }
`;

export const BlogDetailWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(854)};
  }
`;

export const BlockContent = styled.div`
  h1,
  h2 {
    color: var(--dusk);
    font-size: 22px;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.29px;
    font-family: 'Montserrat';

    strong {
      font-weight: 600 !important;
    }
  }

  h3 {
    color: var(--dusk);
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.29px;
    font-family: 'Montserrat';

    strong {
      font-weight: 600 !important;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    font-family: 'Montserrat';
  }

  li {
    font-size: 16px;
    padding-left: 15px;
    position: relative;
    font-family: 'Montserrat';
    margin-bottom: 10px;

    &::after {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      content: '';
      background: var(--greenish-teal);
      position: absolute;
      top: 15px;
      left: 0;
    }
  }

  img {
    width: 100%;
  }

  figcaption {
    margin-top: 10px;
  }

  figure {
    margin-bottom: 60px;
  }

  @media (min-width: ${breakpoint.lg}) {
    h1,
    h2 {
      font-size: ${px2vw(36)};
      margin-bottom: ${px2vw(24)};
    }

    h3 {
      font-size: ${px2vw(24)};
      margin-bottom: ${px2vw(24)};
    }

    p {
      font-size: ${px2vw(24)};
      margin-bottom: ${px2vw(60)};
    }

    li {
      font-size: ${px2vw(24)};
      padding-left: ${px2vw(15)};
      margin-bottom: ${px2vw(10)};

      &::after {
        width: ${px2vw(6)};
        height: ${px2vw(6)};
        top: ${px2vw(14)};
      }
    }

    figure {
      margin-bottom: ${px2vw(60)};
    }
  }
`;
