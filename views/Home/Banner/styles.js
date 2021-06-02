import { dotFlasing, rotate } from 'components/theme/styles';
import styled from 'styled-components';
import { px2vw } from 'helper';
import { breakpoint } from 'constant';
import { Container } from 'components/theme/styles';

const StyledCointainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const MainBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url('${({ bannerUrl }) => bannerUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  position: relative;

  @media (min-width: ${breakpoint.lg}) {
    padding: ${px2vw(40)} 0;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mouse = styled.div`
  width: 40px;
  height: 60px;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 20px);
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
  }

  &::before {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 6px;
    left: calc(50% - 3px);
    box-shadow: 0 6px 0 0 #fff, 0 18px 0 0 #fff, 0 30px 0 0 #fff;
    animation: ${dotFlasing} 1.2s ease-in-out infinite;
  }

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(40)};
    height: ${px2vw(60)};
    border-radius: 20px;
  }
`;

const CircletypeAnimation = styled.span`
  animation: linear 30s ${rotate} infinite;
  display: inline-block;
  font-size: 10px;
  width: 140px;
  height: 140px;
  vertical-align: top;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${breakpoint.md}) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${breakpoint.lg}) {
    width: ${px2vw(140)};
    height: ${px2vw(140)};
  }
`;

const VideoPlayBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  color: #fff;
  transition: all 0.2s linear 0s;
  right: 20px;

  > img {
    width: 15px;
    position: absolute;
  }

  @media (min-width: ${breakpoint.lg}) {
    right: 0;

    > img {
      width: ${px2vw(20)};
    }
  }
`;

export {
  MainBanner,
  BannerContent,
  CircletypeAnimation,
  Mouse,
  VideoPlayBtn,
  StyledCointainer
};
