import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';

const IconQuotes = styled.div`
  border-radius: 0;
  border: none;
  margin: 0;
  width: 44px;
  height: 39px;
  background: url('/static/images/icons/quote.svg') no-repeat 50% 50%;
  margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
  padding-top: 150px;
  @media (min-width: ${breakpoint.xl}) {
    padding-top: ${px2vw(180)};
  }
`;

const ImageThumbRight = styled.img`
  overflow: hidden;
  width: 100%;
  margin-top: 80px;
  height: auto;

  @media (min-width: ${breakpoint.lg}) {
    padding-left: 90px;
    margin-top: ${px2vw(120)};
  }
`;

export { IconQuotes, Wrapper, ImageThumbRight };
