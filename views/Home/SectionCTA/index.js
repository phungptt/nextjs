import React from 'react';
import { Container } from 'components/theme/styles';
import Button from 'components/Button';
import { FontFamily, Colors } from 'components/theme';
import { ButtonWrapper, Wrapper, Title } from './styles';

export default function SectionCTA({ data }) {
  return (
    <Wrapper>
      <Container>
        <Title
          style={{ letterSpacing: -0.56, textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
        >
          {data.title}
        </Title>
        <ButtonWrapper>
          <Button
              type="dark"
              color={Colors.gunmetal}
            >Let’s Connect</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}
