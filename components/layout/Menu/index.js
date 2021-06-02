import React from 'react';
import Router, { useRouter } from 'next/router';
import { socials, rootRouter } from 'constant';
import {
  MenuWrapper,
  SiderMenu,
  SiderWrap,
  ExtraContent,
  SocialList,
  LocationImage,
  ActionWrapper
} from './styles';
import { Dropdown, Menu } from 'antd';
import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { ButtonLogin } from 'components/theme/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SiderLayout({ collapse, setMenuCollapse }) {
  const router = useRouter();

  return (
    <SiderWrap collapse={collapse}>
      <Container style={{ height: '100%' }}>
        <SiderMenu>
          <MenuWrapper>
            {rootRouter.map((el, i) => (
              <a
                onClick={() => {
                  setMenuCollapse(false);
                  Router.push(el.path).then(() => window.scrollTo(0, 0));
                }}
              >
                <Text
                  fontFamily={FontFamily.montserrat}
                  fontWeight={700}
                  size="biggest"
                  color={
                    router.asPath === el.path
                      ? Colors.greenishTeal
                      : Colors.white
                  }
                >
                  {el.text}
                </Text>
              </a>
            ))}
          </MenuWrapper>
          <ExtraContent>
            <ActionWrapper>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="0">
                      <a href={process.env.WEBSIE_URL}>Global</a>
                    </Menu.Item>
                    <Menu.Item key="1">
                      <a
                        href={process.env.INIDIA_WEBSITE_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        India
                      </a>
                    </Menu.Item>
                    <Menu.Divider />
                  </Menu>
                }
                trigger={['click']}
                overlayStyle={{ backgroundColor: '#000' }}
              >
                <LocationImage
                  src="/static/images/icons/ic-languague.svg"
                  alt="error"
                />
              </Dropdown>
              <ButtonLogin href={process.env.LOGIN_URL}>
                Partner Login
              </ButtonLogin>
            </ActionWrapper>
            <SocialList>
              {socials.map((social, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={social.icon}
                  size="xs"
                  onClick={() => window.open(social, '_blank')}
                />
              ))}
            </SocialList>
            <Text color={Colors.coolGrey} size="normal">
              © 2021 RYNAN Technologies Pte Ltd. All rights reserved
            </Text>
          </ExtraContent>
        </SiderMenu>
      </Container>
    </SiderWrap>
  );
}
