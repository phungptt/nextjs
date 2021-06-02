import styled, { css } from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';

const SiderWrap = styled.div`
  height: 120vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: var(--gunmetal);
  transition: all 0.2s linear 0s;
  padding: 130px 0 0;
  opacity: 0;
  z-index: -10;
  ${({ collapse }) =>
    collapse &&
    css`
      opacity: 1;
      z-index: 98;
    `}

  @media (min-width: ${breakpoint.lg}) {
    height: 100vh;
    padding: ${px2vw(194)} 0 ${px2vw(64)} 0;
  }
`;

const SiderMenu = styled.div`
  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(20)}vw;
    font-size: ${px2vw(70)}vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExtraContent = styled.div`
  .copyright {
    margin-top: 31px;
    @media (min-width: ${breakpoint.lg}) {
      margin-bottom: ${px2vw(31)}vw;
    }
  }
`;

const LoginWrapper = styled.div`
  margin-bottom: 3rem !important;
  .btn-login {
    font-size: 18px;
    line-height: 26px;
    color: #4dd591;
  }
`;

const SocialList = styled.div`
  display: flex;
  margin: 32px 0;
  > * {
    width: 25px;
    margin: 0 10px;
    path {
      fill: var(--greenish-teal);
    }
  }
  svg {
    &:first-child {
      width: 15px;
      margin-left: 0;
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    display: none;
  }
`;

const IconItem = styled.a`
  width: 20px;
  text-align: center;
  width: 36px;
  height: 36px;
  display: inline-block;
  color: #4d5f66;
  border: #4d5f66 solid 1.5px;
  font-size: 1.5rem;
  margin: 4px;
  border-radius: 100%;
  line-height: 33px;
`;

const LocationImage = styled.img`
  width: 38px;
  height: 38px;
  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(38)};
    height: ${px2vw(38)};
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-top: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(33)};
  }
`;

export {
  SiderWrap,
  SiderMenu,
  ExtraContent,
  LoginWrapper,
  SocialList,
  MenuWrapper,
  IconItem,
  LocationImage,
  ActionWrapper
};
