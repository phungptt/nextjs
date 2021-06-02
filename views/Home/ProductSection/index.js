import React from 'react';
import Link from 'next/link';
import { Col } from 'antd';
import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { FontFamily, Colors } from 'components/theme';
import Button from 'components/Button';
import {
  ProductSectionWrap,
  Image,
  SectionContent,
  InforItem,
  StyledRow
} from './styles';

export default function ProductSection({ data }) {
  const { imageUrl, name, theme, featureList, link, buttonText } = data;

  const getColorByTheme = (theme) => {
    switch (theme) {
      case 'blue':
        return Colors.brightSkyBlue;
      case 'yellow':
        return Colors.macaroniAndCheese;
      case 'purple':
        return Colors.easterPurple;
      default:
        return '';
    }
  };

  const checkColorBtn = (theme, content, href) => {
    switch (theme) {
      case 'blue':
        return (
          <Link href={href}>
            <Button
              type="blue"
              color={Colors.brightSkyBlue}
            >{buttonText}</Button>
          </Link>
        );
      case 'yellow':
        return (
          <Link href={href}>
            <Button
              type="yellow"
              color={Colors.macaroniAndCheese}
            >{buttonText}</Button>
          </Link>
        );
      case 'purple':
        return (
          <Link href={href}>
            <Button
              type="purple"
              color={Colors.easterPurple}
            >{buttonText}</Button>
          </Link>
        );
      default:
        return (
          <Link href={href}>
            <Button
              type="primary"
              color={Colors.greenishTeal}
            >{buttonText}</Button>
          </Link>
        );
    }
  };

  return (
    <ProductSectionWrap>
      <Container>
        <SectionContent>
          <Image src={imageUrl} alt={name} />
          <Text
            style={{ letterSpacing: -1.65, textAlign: 'center' }}
            fontWeight="bold"
            lineHeight={1.45}
            fontFamily={FontFamily.montserrat}
            customSize={{
              desktop: 110,
              mobile: 50
            }}
            color={getColorByTheme(theme)}
          >
            {name}
          </Text>
          <StyledRow gutter={15} justify="center">
            {featureList.map((item, index) => (
              <Col span={24} md={8} key={index}>
                <InforItem>
                  <Text
                    size="medium"
                    fontWeight={300}
                    lineHeight={1.5}
                    color={getColorByTheme(theme)}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ textAlign: 'center', marginTop: 10 }}
                    whiteSpace="pre-line"
                    size="big"
                    fontWeight={600}
                    lineHeight={1.11}
                    color={Colors.warmGrey}
                  >
                    {item.text}
                  </Text>
                </InforItem>
              </Col>
            ))}
          </StyledRow>
          {checkColorBtn(theme, name, link || '')}
        </SectionContent>
      </Container>
    </ProductSectionWrap>
  );
}
