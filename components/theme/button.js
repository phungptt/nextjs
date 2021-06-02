import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import styled from 'styled-components';

const ButtonLogin = styled.a`
  font-size: 18px;
  color: var(--greenish-teal);
  display: flex;
  align-items: center;
  margin: 0 30px;
  &::before {
    content: '';
    display: block;
    background: url('/static/images/icons/ic-login.svg') no-repeat center center;
    background-size: contain;
    height: 36px;
    width: 36px;
    line-height: 36px;
    margin-right: 10px;
  }

  @media (min-width: ${breakpoint.lg}) {
    &::before {
      font-size: ${px2vw(20)};
      height: ${px2vw(36)};
      width: ${px2vw(36)};
      margin: 0 ${px2vw(15)};
      margin-right: ${px2vw(10)};
    }
  }
`;

const ButtonLink = styled.a`
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  color: var(--greenish-teal);
  font-size: 20px;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    background: var(--greenish-teal);
    transition: 300ms;
  }

  &:hover {
    color: var(--dusk);
    &::after {
      background: var(--dusk);
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${px2vw(20)};
  }
`;

export {
  ButtonLogin,
  ButtonLink
};
