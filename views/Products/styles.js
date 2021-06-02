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

export const ProductsSection = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(200)} 0;
  }

  .product-row {
    .ant-col {
      margin-bottom: 40px;
    }
  }

  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child,
  .ant-radio-button-wrapper:hover,
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: var(--white);
    background-color: var(--bright-sky-blue);
  }

  .ant-radio-group {
    margin-bottom: 60px;
    display: inline-flex;
    flex-wrap: wrap;
  }

  .ant-radio-button-wrapper {
    flex: 1 1 auto;
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--bright-sky-blue);
    border: 1px solid var(--bright-sky-blue);
    height: 52px;
    padding: 12px 15px;
  }

  .ant-dropdown-trigger {
    display: none;
  }

  @media (max-width: 991px) {
    .ant-radio-group {
      display: none;
    }

    .ant-dropdown-trigger {
      display: block;
    }
  }
`;

export const NavWrap = styled.ul`
  margin-bottom: 30px;
  display: inline-flex;
  flex-wrap: wrap;

  .ant-radio-button-wrapper {
    display: flex;
    align-items: center;
    border-left: none;
    &:before {
      display: none;
    }

    &:first-child {
      border-left: 1px solid var(--bright-sky-blue);
    }
  }
`;
