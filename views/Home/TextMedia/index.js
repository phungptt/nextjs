import { Container } from 'components/theme/styles';
import React from 'react';
import Text from 'components/Text';
import { FontFamily, Colors } from 'components/theme';
import { ButtonWrapper, Wrapper, Image, Title } from './styles';
import Button from 'components/Button';

export default function TextMedia({ data, noMargin, ...props }) {
  const { title, description, imageUrl, link } = data;

  return (
    <Container>
      <Wrapper noMargin={noMargin}>
        <Title
          style={{ letterSpacing: -0.56, textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
        >
          {title}
        </Title>
        <Text
          style={{ textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          customSize={{
            desktop: 32,
            mobile: 20
          }}
          fontWeight={300}
          lineHeight={1.44}
          color={Colors.whiteThree}
        >
          {description}
        </Text>
        {link && (
          <ButtonWrapper>
            <Button
              type="primary"
              color={Colors.greenishTeal}
              href="/products"
            >All Products</Button>
          </ButtonWrapper>
        )}
        <Image src={imageUrl} alt={title} />
      </Wrapper>
    </Container>
  );
}
