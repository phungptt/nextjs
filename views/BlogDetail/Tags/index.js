import React from 'react';
import { Container } from 'components/theme/styles';
import { BlogDetailWrap, TagList, BlogTagList, StyledTag } from './styles';
import Text from 'components/Text';
import { Colors } from 'components/theme';

export default function HashTag({ hashtag }) {
  return (
    <Container>
      <BlogDetailWrap>
        <TagList>
          <Text
            style={{ letterSpacing: 1.2 }}
            whiteSpace="pre-line"
            size="smallMedium"
            fontWeight={600}
            lineHeight={1.5}
            color={Colors.greenishTeal}
          >
            Tags
          </Text>
          <BlogTagList>
            {hashtag.map((tag, index) => (
              <StyledTag key={index}>{tag}</StyledTag>
            ))}
          </BlogTagList>
        </TagList>
      </BlogDetailWrap>
    </Container>
  );
}
