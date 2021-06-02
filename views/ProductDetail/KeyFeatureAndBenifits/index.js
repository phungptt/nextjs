import React from 'react';
import { Container } from 'components/theme/styles';
import { Colors, FontFamily } from 'components/theme';
import Text from 'components/Text';

import { Row, Col } from 'antd';
import {
  SectionTextBlock,
  SectionTextBlockContent,
  ProductGroupText,
  Title,
  Wrapper,
  Description,
  Divider,
  Image
} from './styles';

const BenefitItem = ({ label, value }) => (
  <Row gutter={[12, 36]}>
    <Col span={24} md={6}>
      <Text
        style={{ letterSpacing: -0.19 }}
        color={Colors.brightSkyBlue}
        size="medium"
        fontWeight={500}
        lineHeight={1.5}
      >
        {label}
      </Text>
    </Col>
    <Col span={24} md={18}>
      <Text
        color={Colors.whiteThree}
        customSize={{
          desktop: 32,
          mobile: 24
        }}
        fontWeight={300}
        lineHeight={1.44}
      >
        {value}
      </Text>
    </Col>
  </Row>
);

const FeatureItem = ({ label, value }) => (
  <ProductGroupText>
    <Text
      style={{ letterSpacing: -0.19 }}
      color={Colors.brightSkyBlue}
      size="medium"
      fontWeight={500}
      lineHeight={1.5}
    >
      {label}
    </Text>
    <Text
      color={Colors.whiteThree}
      customSize={{
        desktop: 32,
        mobile: 24
      }}
      fontWeight={300}
      lineHeight={1.44}
    >
      {value}
    </Text>
  </ProductGroupText>
);

export default function ProductDetail({ data }) {
  const { feature, benefits } = data;
  return (
    <Wrapper>
      <Container>
        <SectionTextBlock>
          <Title
            style={{ letterSpacing: -0.56 }}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            whiteSpace="pre-line"
          >
            Key Features
          </Title>
          <SectionTextBlockContent>
            <Row align="middle">
              <Col span={24} lg={16}>
                <Description
                  color={Colors.whiteThree}
                  customSize={{
                    desktop: 32,
                    mobile: 24
                  }}
                  fontWeight={300}
                  lineHeight={1.44}
                >
                  {feature.introduction}
                </Description>
                {feature.bestSuited && (
                  <FeatureItem
                    label="Best Suited For"
                    value={feature.bestSuited}
                  />
                )}
                {feature.touchScreen && (
                  <FeatureItem
                    label="Touch Screen Area"
                    value={feature.touchScreen}
                  />
                )}
                {feature.printQuality && (
                  <FeatureItem
                    label="Print Quality"
                    value={feature.printQuality}
                  />
                )}
                {feature.printHead && (
                  <FeatureItem label="Print heads" value={feature.printHead} />
                )}
              </Col>
              {feature.icon && (
                <Col
                  span={24}
                  lg={8}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Image src={feature.icon} alt="keydata" />
                </Col>
              )}
            </Row>
          </SectionTextBlockContent>
        </SectionTextBlock>
        <SectionTextBlock>
          <Divider />
        </SectionTextBlock>
        <SectionTextBlock>
          <Title
            style={{ letterSpacing: -0.56 }}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            whiteSpace="pre-line"
          >
            Benefits
          </Title>
          <SectionTextBlockContent>
            {benefits.sleek && (
              <BenefitItem
                label="Sleek & Compact Design"
                value={benefits.sleek}
              />
            )}
            {benefits.multiple && (
              <BenefitItem
                label="Multiple Resolution Choices"
                value={benefits.multiple}
              />
            )}
            {benefits.productDesign && (
              <BenefitItem
                label="Product Design"
                value={benefits.productDesign}
              />
            )}
            {benefits.userInterface && (
              <BenefitItem
                label="User Interface"
                value={benefits.userInterface}
              />
            )}
            {benefits.linkSelection && (
              <BenefitItem
                label="Ink Selection"
                value={benefits.linkSelection}
              />
            )}
            {benefits.warranty && (
              <BenefitItem label="Warranty" value={benefits.warranty} />
            )}
          </SectionTextBlockContent>
        </SectionTextBlock>
      </Container>
    </Wrapper>
  );
}
