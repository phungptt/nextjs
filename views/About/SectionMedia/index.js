import React from 'react';
import Link from 'next/link';
import { Container } from 'components/theme/styles';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { Wrapper, Image, SectionWrapper, Title } from './styles';
import Button from 'components/Button';

export default function TextMedia(props) {
  return (
    <Wrapper>
      <Container>
        <SectionWrapper>
          <Title
            style={{ letterSpacing: -0.56, textAlign: 'center' }}
            whiteSpace="pre-line"
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
          >
            Private Label
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
            RYNAN offer private label services to OEM partners. Have your brand
            and logo customised on hardware, software, ink products, spare
            parts, and packaging.
          </Text>
          <Image
            src="/static/images/pages/about/img-5.png"
            alt="drop-shipping"
          />
        </SectionWrapper>
        <SectionWrapper>
          <Title
            style={{ letterSpacing: -0.56, textAlign: 'center' }}
            whiteSpace="pre-line"
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
          >
            Drop-shipping Worldwide
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
            Drop-shipping services to worldwide locations for partner’s
            convenience. Ship customized orders to specified locations or
            customers’ sites around the world.
          </Text>
          <Image src="/static/images/drop-shipping.png" alt="drop-shipping" />

          <Link href="/contact">
            <Button
              type="primary"
              color={Colors.greenishTeal}
            >Let’s Connect</Button>
          </Link>
        </SectionWrapper>
      </Container>
    </Wrapper>
  );
}


