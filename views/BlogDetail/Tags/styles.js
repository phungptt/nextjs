import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import { Tag } from 'antd';

export const BlogDetailWrap = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(854)};
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  @media (min-width: ${breakpoint.lg}) {
    padding-bottom: ${px2vw(60)};
  }
`;

export const StyledTag = styled(Tag)`
  padding: 4px 15px;
  font-size: 18px;
  background-color: var(--white-three);
  color: var(--dusk);
  border-color: transparent;
  margin: 20px 6px 0 6px;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(4)} ${px2vw(15)};
    font-size: ${px2vw(18)};
    margin: ${px2vw(20)} ${px2vw(6)} 0 ${px2vw(6)};
  }
`;

export const BlogTagList = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: wrap row;
`;
