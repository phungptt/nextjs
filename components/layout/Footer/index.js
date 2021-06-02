import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import Text from 'components/Text';
import { useRouter } from 'next/router';
import {
  FooterWrap,
  FooterMenu,
  FooterMenuItem,
  ImageSection,
  StyledContainer
} from './styles';
import { useFetchApi, messageTypes } from 'services';
import SiderDarkContainer from 'components/SiderDarkContainer';
import { socials } from 'constant';
import { Colors } from 'components/theme';

export default function FooterLayout({ sensorRef }) {
  const fetchApi = useFetchApi();
  const [category, setCategory] = useState({ loading: true, items: [] });
  useEffect(() => {
    fetchApi.call({
      type: messageTypes.product.categories,
      onSuccess: ({ data }) => setCategory(data),
      onFailure: () => setCategory((_state) => ({ ..._state, loading: false }))
    });
  }, []);

  return (
    <SiderDarkContainer sensorRef={sensorRef}>
      <FooterWrap>
        <StyledContainer>
          <ImageSection>
            <img
              src="/static/images/logo-mark-white.svg"
              alt="logo-mark-white.svg"
            />
          </ImageSection>
          <Row gutter={[15, 15]} style={{ width: '100%' }}>
            <Col className="gutter-row" span={24} md={8}>
              <Text
                size="smallMedium"
                lineHeight={1.5}
                color={Colors.greenishTeal}
              >
                Company
              </Text>
              <FooterMenu>
                <FooterMenuItem>
                  <a href="/">About</a>
                </FooterMenuItem>
                <FooterMenuItem>
                  <a href="/">Products</a>
                </FooterMenuItem>
                <FooterMenuItem>
                  <a href="/">Contact</a>
                </FooterMenuItem>
                <FooterMenuItem>
                  <a href="/">Privacy</a>
                </FooterMenuItem>
              </FooterMenu>
            </Col>
            <Col className="gutter-row" span={24} md={8}>
              <Text
                size="smallMedium"
                lineHeight={1.5}
                color={Colors.greenishTeal}
              >
                Products
              </Text>
              <FooterMenu>
                {category.items.map((item) => (
                  <FooterMenuItem>
                    <Link href={`/products?category_id=${item.id}`}>
                      {item.name}
                    </Link>
                  </FooterMenuItem>
                ))}
              </FooterMenu>
            </Col>
            <Col className="gutter-row" span={24} md={8}>
              <Text
                size="smallMedium"
                lineHeight={1.5}
                color={Colors.greenishTeal}
              >
                Follow RYNAN
              </Text>
              <FooterMenu>
                {socials.map((item) => (
                  <FooterMenuItem key={item.name}>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </FooterMenuItem>
                ))}
              </FooterMenu>
            </Col>
          </Row>
          <Text
            style={{ textAlign: 'center', width: '100%' }}
            fontWeight={300}
            color={Colors.coolGrey}
          >
            © RYNAN Technologies Pte Ltd. All rights reserved.
          </Text>
        </StyledContainer>
      </FooterWrap>
    </SiderDarkContainer>
  );
}
