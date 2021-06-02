import React from 'react';
import ModalVideo from 'react-modal-video';
import { Container } from 'components/theme/styles';
import { GroupButton, Wrapper, Image, Title } from './styles';
import { useState } from 'react';
import { youtubeUrl2Id } from 'helper';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import Button from 'components/Button';

export default function ProductDetail({ data }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper className="text-center">
        <Title
          style={{ letterSpacing: -0.56, textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
        >
          {data.name}
        </Title>
        <Text
          style={{ textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          customSize={{
            desktop: 50,
            mobile: 28
          }}
          lineHeight={1.2}
          color={Colors.dusk}
        >
          {data.heading}
        </Text>
        <Image src={data.image} alt={data.name} />
        <Text
          style={{ textAlign: 'center' }}
          whiteSpace="pre-line"
          customSize={{
            desktop: 32,
            mobile: 22
          }}
          fontWeight={300}
          lineHeight={1.44}
        >
          {data.shortDescription}
        </Text>
        <GroupButton>
          {data.videoUrl && (
            <Button
              type="blue"
              color={Colors.brightSkyBlue}
              onClick={() => setOpen(true)}
            >Watch Video</Button>
          )}
          {data.brochure && (
              <Button
                type="primary"
                color={Colors.greenishTeal}
                href={data.brochure.url}
                target="_blank"
              >Product Brochure</Button>
          )}
        </GroupButton>
        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={isOpen}
          videoId={youtubeUrl2Id(data.videoUrl)}
          onClose={() => setOpen(false)}
        />
      </Wrapper>
    </Container>
  );
}
