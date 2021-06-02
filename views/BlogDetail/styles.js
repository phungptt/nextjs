import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(130)} 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f1f1;
  padding-left: 0;

  @media (min-width: ${breakpoint.lg}) {
    margin: ${px2vw(80)} 0;
    margin-left: ${px2vw(90)};
  }
`;
