import styled, { css } from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { Colors } from 'components/theme';

const Wrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  box-shadow: 0 2px 30px rgb(0 0 0 / 50%);
  border-bottom: 1px solid var(--white-three);
  padding: 20px;
  background: ${Colors.gunmetal};

  @media (min-width: ${breakpoint.lg}) {
    background: transparent;
    width: 90px;
    flex-direction: column;
    height: 100vh;
    box-shadow: none;
    border-right: 1px solid #ebebee;
    border-bottom: 0;
    padding: 0;
  }
`;

const LogoBrand = styled.a`
  background-image: url('/static/images/logo-white.png');
  background-size: 100% 100%;
  width: 45px;
  height: 45px;

  @media (min-width: ${breakpoint.lg}) {
    width: 50px;
    height: 50px;
    margin-top: 25px;
    background-image: url(${({ dark }) =>
      dark ? '/static/images/logo-dark.png' : '/static/images/logo-white.png'});
  }
`;

const HamburgerBtn = styled.div`
  padding: 15px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  background-color: transparent;
  text-align: left;

  &:hover {
    .hidden {
      opacity: 1;
      transform: translate(0, -50%);
      &::before,
      &::after {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    .inner {
      transform: translate(-51px, 50%);
      opacity: 0;
      &::before,
      &::after {
        transform: translate(102px, 0);
        opacity: 0;
      }
    }
  }

  &.is-active {
    .inner {
      display: none;
    }

    .hidden {
      opacity: 1;
      transform: rotate(45deg);

      &::before {
        transform: translate(0, 13px) rotate(90deg);
        transform-origin: center;
      }

      &::after {
        transform-origin: center;
        transform: translate(0, -13px) rotate(0);
      }
    }
  }

  .wrapper {
    width: 36px;
    height: 24px;
    position: relative;
  }

  .inner {
    cursor: pointer;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-duration: 0.4s;
    top: 50%;
    transform: translate(5px, -50%);
    opacity: 1;
    position: relative;
    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      transform: translate(-5px, 0);
      transition: ease 0.4s;
      opacity: 1;
    }

    &::before {
      top: -13px;
    }

    &::after {
      top: 13px;
    }
  }

  .hidden {
    opacity: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition: ease 0.4s;
    background-color: var(--greenish-teal);
    top: 50%;
    transform: translate(51px, -50%);
    &::before {
      top: -13px;
    }

    &::after {
      top: 13px;
    }

    &::before,
    &::after {
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      transition: ease 0.4s;
      background-color: var(--greenish-teal);
      content: '';
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    width: 100%;
    display: flex;
    justify-content: center;

    ${({ dark }) =>
      dark &&
      css`
        .inner::before,
        .inner::after,
        .inner {
          background-color: #4d5f66;
        }
      `}
  }
`;

const SocialIcon = styled.a`
  border: solid 1.5px var(--white);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoint.lg}) {
    width: 36px;
    height: 36px;
    margin-bottom: 8px};

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      width: 15px !important;
      color: var(--white);
    }

  ${({ dark }) =>
    dark &&
    css`
      border-color: #4d5f66;

      svg {
        color: #4d5f66;
      }
    `}
  }

`;

const SocialList = styled.div`
  display: none;
  @media (min-width: ${breakpoint.lg}) {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${px2vw(32)};
  }
`;

export { Wrapper, LogoBrand, HamburgerBtn, SocialList, SocialIcon };
