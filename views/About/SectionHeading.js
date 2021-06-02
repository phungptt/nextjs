import React from 'react';
import { Container } from 'components/theme/styles';
import { IconQuotes } from './styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';

export default function SectionHeading() {
  return (
    <Container>
      <IconQuotes />
      <Text
        style={{ letterSpacing: -0.56 }}
        fontFamily={FontFamily.montserrat}
        color={Colors.dusk}
        size="biggest"
        fontWeight="bold"
        lineHeight={1.14}
        whiteSpace="pre-line"
      >
        RYNAN Printing develops sustainable coding & marking hardware and
        software solutions that are efficient for our customers
      </Text>
    </Container>
  );
}
