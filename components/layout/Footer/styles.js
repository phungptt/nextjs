import styled from 'styled-components';
import { breakpoint } from 'constant';
import { px2vw } from 'helper';
import { Container } from 'components/theme/styles';

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterWrap = styled.footer`
  background-color: var(--gunmetal);
  text-align: center;
  text-align: left;
  padding-top: 60px;
  padding-bottom: 40px;

  @media (min-width: ${breakpoint.lg}) {
    text-align: center;
    padding-top: ${px2vw(120)};
    padding-bottom: ${px2vw(50)};
  }

  .footer-logo {
    margin-bottom: ${px2vw(40)};
  }
`;

const FooterMenu = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-bottom: 40px;
  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: ${px2vw(40)};
  }
`;

const FooterMenuItem = styled.li`
  padding-left: 0;
  list-style: none;
  text-align: left;
  margin: 14px 0;

  @media (min-width: ${breakpoint.lg}) {
    text-align: center;
    margin: ${px2vw(14)} 0;
  }
  > a {
    color: #fff;
    font-size: 16px;
    @media (min-width: ${breakpoint.lg}) {
      font-size: ${px2vw(18)};
    }
  }
`;

export {
  FooterWrap,
  FooterMenu,
  FooterMenuItem,
  ImageSection,
  StyledContainer
};
