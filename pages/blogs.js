import React from 'react';
import { Container } from 'components/theme/styles';
import { Colors, FontFamily } from 'components/theme';
import { Title, Wrapper } from 'views/Blogs/styles';
import BlogList from 'views/Blogs/BlogList';

export default function Blog() {
  return (
    <Wrapper>
      <Container>
        <Title
          style={{ letterSpacing: -0.56 }}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          whiteSpace="pre-line"
        >
          RYNAN News
        </Title>
        <BlogList />
      </Container>
    </Wrapper>
  );
}
