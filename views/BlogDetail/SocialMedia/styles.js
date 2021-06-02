import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { Colors } from 'components/theme';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${px2vw(32)};
  @media (min-width: ${breakpoint.lg}) {
    position: absolute;
    left: -60px;
    display: block;
  }
`;

const SocialButtonContent = styled.div`
  font-size: 0.75em;
  background: ${Colors.greenishTeal};
  display: block;
  height: 30px;
  text-align: left;
  padding-left: 24px;
  padding-right: 18px;
  line-height: 30px;
  color: #242424;
  border-radius: 0 15px 15px 0;
  transform: translate3d(-100%, 0, 0);
  transition: transform 175ms ease;
`;


const SocialButton = styled.a`
    display: block;
    position: relative;
    height: 30px;
    margin-bottom: 10px;
    &:hover ${SocialButtonContent}{
        transform: translate3d(0, 0, 0);
    }
`;



const SocialList = styled.div`
  display: flex;
  margin-bottom: ${px2vw(32)};
  width: 300px;
  @media (min-width: ${breakpoint.lg}) {
    position: absolute;
    display: block;
  }
`;



const SocialButtonSecondary = styled.div`
    overflow: hidden;
    margin-left: 15px;
    height: 30px;
    position: absolute;
    top: 0;
    z-index: 2;
`;


const SocialIcon = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    background: ${Colors.white};
    border: 1px solid ${Colors.greenishTeal};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: block;
      color: ${Colors.greenishTeal};
      width: 30px;
      line-height: 30px;
      font-size: 16px;
      margin-top: 1px;
      width: 12px;
    }
`;

export {
  SocialList,
  SocialButton,
  Wrapper,
  SocialButtonSecondary,
    SocialButtonContent,
    SocialIcon
};
