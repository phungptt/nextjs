import React from 'react';
import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { Wrapper, Title, Item, ItemWrapper } from './styles';

export default function SectionIntro() {
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
              About
            </Title>
            <Text
              color={Colors.warmGrey}
              size="medium"
              fontWeight={300}
              lineHeight={1.5}
              whiteSpace="pre-line"
            >
              RYNAN Printing is one of the business entities of RYNAN
              Technologies. Founded in 2015, the company is based in Vietnam,
              Singapore and India. RYNAN creates and develops industrial thermal
              inkjet technology and has been paving the way for the industry
              since. Serving a global community of customers in multiple sectors
              including industrial coding and marking, packaging, and
              pharmaceuticals.
            </Text>
          </Item>
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
              Vision
            </Title>
            <Text
              color={Colors.warmGrey}
              size="medium"
              fontWeight={300}
              lineHeight={1.5}
              whiteSpace="pre-line"
            >
              RYNAN is devoted to creating the most effective and
              environmentally conscious solutions for the market. Helping
              partners and customers achieve their business targets, by
              supplying reliable and cost-effective products.
            </Text>
          </Item>
        </ItemWrapper>
      </Container>
    </Wrapper>
  );
}
