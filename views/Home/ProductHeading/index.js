import React from 'react';
import { Container } from 'components/theme/styles';
import { Row, Col } from 'antd';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { Image, EndCol, StyledLayout } from './styles';

export default function ProductHeading({ data }) {
  return (
    <StyledLayout>
      <Container>
        <Row>
          <Col xs={24} md={24} lg={16}>
            <Text
              fontWeight="bold"
              whiteSpace="pre-line"
              fontFamily={FontFamily.montserrat}
              size="biggest"
              lineHeight={1.14}
              color={Colors.greenishTeal}
            >
              {data.heading}
            </Text>
          </Col>
          <EndCol xs={24} md={24} lg={8}>
            <Image
              src="/static/images/products/product-heading.png"
              alt="error"
            />
          </EndCol>
        </Row>
        <Row gutter={0}>
          <EndCol span={24}>
            <Text
              lineHeight={1.2}
              style={{ textAlign: 'right' }}
              whiteSpace="pre-line"
              fontFamily={FontFamily.montserrat}
              customSize={{
                desktop: 50,
                mobile: 25
              }}
              color={Colors.warmGrey}
            >
              {data.description}
            </Text>
          </EndCol>
        </Row>
      </Container>
    </StyledLayout>
  );
}
