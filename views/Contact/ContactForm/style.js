import { breakpoint } from 'constant';
import { SectionGrey as BaseSectionGrey } from 'components/theme/styles';
import styled from 'styled-components';
import { px2vw } from 'helper';
import Text from 'components/Text';

const SectionGrey = styled(BaseSectionGrey)`
  padding: 40px 0 100px 0;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(120)} 0 ${px2vw(180)} 0;
  }
`;

const Title = styled(Text)`
  @media (min-width: ${breakpoint.lg}) {
    position: absolute;
    right: 100%;
    transform: rotate(270deg);
    top: 10px;
    margin-bottom: 0;
    padding-bottom: 0;
    transform-origin: right top;
    white-space: nowrap;
  }
`;

const Wrapper = styled.div`
  position: relative;

  .ant-form-item-label {
    font-size: 18px;
  }

  .ant-form {
    margin-top: 20px;
  }

  @media (max-width: ${breakpoint.lg}) {
    .ant-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    .ant-form-item-label label {
      font-size: ${px2vw(18)};
    }
    padding-left: ${px2vw(160)};

    .ant-form {
      margin-top: 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media (min-width: ${breakpoint.lg}) {
    justify-content: flex-end;
  }
`;

export { SectionGrey, Wrapper, ButtonWrapper, Title };
