import React from 'react';

import { Container } from 'components/theme/styles';
import { Col, Row } from 'antd';
import { services } from 'constant';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { ServiceCardWrap, CartTitle, Wrapper, ItemWrapper } from './styles';

export default function SectionServices() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col span={24}>
            <Text
              style={{ letterSpacing: -0.56 }}
              fontFamily={FontFamily.montserrat}
              color={Colors.greenishTeal}
              size="biggest"
              fontWeight="bold"
              lineHeight={1.14}
              whiteSpace="pre-line"
            >
              What we offer
            </Text>
          </Col>
        </Row>
        <ItemWrapper>
          {services.map((el, i) => (
            <ServiceCardWrap>
              <CartTitle
                style={{ letterSpacing: -0.29 }}
                fontFamily={FontFamily.montserrat}
                color={Colors.dusk}
                size="big"
                fontWeight={600}
                lineHeight={1.11}
                whiteSpace="pre-line"
              >
                {el.title}
              </CartTitle>
              <Text
                color={Colors.warmGrey}
                size="medium"
                fontWeight={300}
                lineHeight={1.5}
                whiteSpace="pre-line"
              >
                {el.description}
              </Text>
            </ServiceCardWrap>
          ))}
        </ItemWrapper>
      </Container>
    </Wrapper>
  );
}
