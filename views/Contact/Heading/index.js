import React from 'react';
import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { Wrapper, Title } from './styles';

export default function Heading() {
  return (
    <Wrapper>
      <Container style={{ display: 'flex', flexDirection: 'column' }}>
        <Title
          style={{ letterSpacing: -0.56 }}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          whiteSpace="pre-line"
        >
          Let's Connect
        </Title>
        <Text
          color={Colors.dusk}
          customSize={{
            desktop: 50,
            mobile: 30
          }}
          fontWeight={300}
          lineHeight={1.2}
          whiteSpace="pre-line"
        >
          Whether you have a question about product features, partnership
          opportunities, pricing and demos, our RYNAN Printing team is ready to
          answer all your questions.
        </Text>
      </Container>
    </Wrapper>
  );
}
