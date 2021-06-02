import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled, { keyframes, css } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(23, 30, 68, 1);
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    padding: 0 30px;
  }

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(1442)};
    padding: 0;
  }
`;

export const Section = styled.section`
  padding: ${px2vw(100)} 0;
  position: relative;
  @media (min-width: ${breakpoint.xl}) {
    padding: ${px2vw(80)} 0;
  }
`;

export const SectionGrey = styled.section`
  width: 100%;
  background-color: #434360;

  ${({ noMargin }) =>
    noMargin &&
    css`
      padding-bottom: 0 !important;
    `}
`;

export const InputWrap = styled.div`
  .ant-form-item {
    &-label label {
      color: var(--white);
    }

    .ant-input {
      color: var(--white);
      height: 48px;
      padding: 12px 18px;
      background-color: var(--steel);
      border: 1px solid transparent;
      font-size: 18px;
      @media (min-width: ${breakpoint.xxl}) {
        height: ${px2vw(48)};
        font-size: ${px2vw(18)};
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgb(77 213 145 / 25%);
        border-color: var(--greenish-teal);
      }
    }
  }

  textarea.ant-input {
    height: auto !important;
    @media (min-width: ${breakpoint.lg}) {
      height: ${px2vw(157)} !important;
    }
  }
`;

export const SelectWrap = styled.div`
  .ant-form-item {
    &-label label {
      color: var(--white);
    }

    .ant-select {
      color: var(--white);
      height: 48px;
      background-color: var(--steel);
      border: 1px solid transparent;
      font-size: 18px;
      @media (min-width: ${breakpoint.xxl}) {
        height: ${px2vw(48)};
        font-size: ${px2vw(18)};
      }
      &:focus {
        box-shadow: 0 0 0 0.2rem rgb(77 213 145 / 25%);
        border-color: var(--greenish-teal);
      }

      .ant-select-arrow {
        svg {
          fill: var(--white);
        }
      }
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
      background-color: transparent;
      border: none;
      padding: 0;
      height: 100%;
      padding: 10px 18px;
    }
  }
`;
// Animation

export const rotate = keyframes`
  0%   {}
  100% {transform: rotate(360deg);}
`;

export const dotFlasing = keyframes`
  0%, 100% {
    box-shadow: 0 6px 0 0 rgba(255, 255, 255, 0.25), 0 18px 0 0 rgba(255, 255, 255, 0.25), 0 30px 0 0 rgba(255, 255, 255, 0.25);
  }
  25% {
    box-shadow: 0 6px 0 0 #fff, 0 18px 0 0 rgba(255, 255, 255, 0.25), 0 30px 0 0 rgba(255, 255, 255, 0.25);
  }
  50% {
    box-shadow: 0 6px 0 0 rgba(255, 255, 255, 0.25), 0 18px 0 0 #fff, 0 30px 0 0 rgba(255, 255, 255, 0.25);
  }
  75% {
    box-shadow: 0 6px 0 0 rgba(255, 255, 255, 0.25), 0 18px 0 0 rgba(255, 255, 255, 0.25), 0 30px 0 0 #fff;
  }
`;

export default Layout;
