import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';
import { Row } from 'antd';

const ProductSectionWrap = styled.section`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;

  @media (min-width: ${breakpoint.lg}) {
    object-fit: cover;
  }
`;

const SectionContent = styled.div`
  display: flex;
  margin: 100px auto;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(1148)};
    margin-top: ${px2vw(100)};
  }
`;

const StyledRow = styled(Row)`
  width: 100%;
  margin: 30px 0;

  @media (min-width: ${breakpoint.lg}) {
    margin: ${px2vw(45)} 0;
  }
`;

const InforItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;

export { ProductSectionWrap, Image, SectionContent, StyledRow, InforItem };
