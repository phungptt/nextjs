import styled from 'styled-components';
import { px2vw } from 'helper';
import { breakpoint } from 'constant';
import { Col, Layout } from 'antd';
import { Colors } from 'components/theme';

export const StyledLayout = styled(Layout)`
  background: ${Colors.white};
  margin-top: 100px;

  @media (min-width: ${breakpoint.lg}) {
    margin-top: ${px2vw(200)};
  }
`;

export const EndCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Image = styled.img`
  margin-bottom: 20px;
  object-fit: contain;
  width: 70px;

  @media (min-width: ${breakpoint.lg}) {
    width: auto;
    margin-bottom: ${px2vw(20)};
  }
`;
