import React from 'react';
import { Dropdown, Menu } from 'antd';
import Text from 'components/Text';
import { Colors } from 'components/theme';
import { NavigateFixedWrap, Image } from './style';
import { ButtonLogin } from 'components/theme/button';

export default function NavigateFixed() {
  return (
    <NavigateFixedWrap>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="0">
              <a href={process.env.WEBSIE_URL}>
                <Text color={Colors.white}>Global</Text>
              </a>
            </Menu.Item>
            <Menu.Item key="1">
              <a
                href={process.env.INIDIA_WEBSITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                <Text color={Colors.white}>India</Text>
              </a>
            </Menu.Item>
            <Menu.Divider />
          </Menu>
        }
        trigger={['click']}
        overlayStyle={{ backgroundColor: Colors.steel, marginTop: 10 }}
      >
        <Image
          src="/static/images/icons/ic-languague.svg"
          className="ic-language"
          alt="error"
        />
      </Dropdown>
      <ButtonLogin href={process.env.LOGIN_URL}>Partner Login</ButtonLogin>
    </NavigateFixedWrap>
  );
}
