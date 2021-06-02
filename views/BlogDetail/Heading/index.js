import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'components/theme/styles';
import { BlogBanner, Title, BlockContent, BlogDetailWrap } from './styles';
import {SocialMedia } from 'views/BlogDetail/';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';

export default function Heading({ data }) {
  const ref = useRef(null);
  const [topPosition, setTopPosition] = useState(0);

  useEffect( () => {
    if (ref.current) {
      let height = ref.current.offsetHeight;
      setTopPosition(height);
    }
  }, [ref]);
  console.log(data)

  return (
    <Container>
      <BlogDetailWrap>
        <BlogBanner ref={ref}>
          <img src={data.image} alt={data.title} />
        </BlogBanner>
        <SocialMedia style={{ top: topPosition }} data={data}/>
        <Text
          style={{ letterSpacing: 1.2, textTransform: 'uppercase' }}
          whiteSpace="pre-line"
          size="smallMedium"
          fontWeight={600}
          lineHeight={1.5}
          color={Colors.greenishTeal}
        >
          {data.createdTime}
        </Text>
        <Title
          customSize={{
            desktop: 50,
            mobile: 30
          }}
          fontWeight={400}
          lineHeight={1.2}
          fontFamily={FontFamily.montserrat}
          color={Colors.dusk}
        >
          {data.title}
        </Title>
        <BlockContent
          dangerouslySetInnerHTML={{
            __html: data.content
          }}
        />
      </BlogDetailWrap>
    </Container>
  );
}
