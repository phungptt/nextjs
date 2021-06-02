import React from 'react';

import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { Title, Wrapper, Image, ItemWrapper, Item } from './styles';

export default function SectionPartner() {
  return (
    <Wrapper>
      <Container>
        <ItemWrapper>
          <Item>
            <Title
              style={{ letterSpacing: -0.56 }}
              fontFamily={FontFamily.montserrat}
              color={Colors.greenishTeal}
              size="biggest"
              fontWeight="bold"
              lineHeight={1.14}
              whiteSpace="pre-line"
            >
              Become a RYNAN partner
            </Title>
            <Text
              color={Colors.warmGrey}
              size="medium"
              fontWeight={300}
              lineHeight={1.5}
              whiteSpace="pre-line"
            >
              RYNAN prioritizes building trustworthy and long-lasting
              relationships with all our partners. By providing quality products
              and technical support, our partners can focus on meeting their
              sales targets and achieve customer satisfaction.
            </Text>
          </Item>
          <Item>
            <Image src="/static/images/pages/about/partner.png" alt="partner" />
          </Item>
        </ItemWrapper>
      </Container>
    </Wrapper>
  );
}
