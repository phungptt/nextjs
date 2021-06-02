import { breakpoint } from 'constant';
import styled from 'styled-components';
import { px2vw } from 'helper';

const NavigateFixedWrap = styled.div`
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 90;
  display: none;

  @media (min-width: ${breakpoint.lg}) {
    display: flex;
  }
`;

const Image = styled.img`
  width: 38px;
  height: 38px;
  cursor: pointer;
  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(38)};
    height: ${px2vw(38)};
  }
`;

export { NavigateFixedWrap, Image };
