import React from 'react';
import slug from 'slug';
import Link from 'next/link';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { ButtonLink, BlogCardWrap, CardBody, BlogThumb, Title } from './styles';

export default function BlogCard({
  data,
  center,
  firstItem,
  hasDescription = true
}) {
  return (
    <BlogCardWrap>
      <BlogThumb firstItem={firstItem}>
        <img src={data.image} alt={data.title} />
      </BlogThumb>
      <CardBody center={center}>
        <Text
          style={{ letterSpacing: 1.2, textTransform: 'uppercase' }}
          size="smallMedium"
          fontWeight={600}
          lineHeight={1.5}
          color={Colors.greenishTeal}
        >
          {data.createdTime}
        </Text>
        <Title
          style={{ letterSpacing: -0.29 }}
          size="big"
          fontWeight={600}
          lineHeight={1.11}
          color={Colors.dusk}
          fontFamily={FontFamily.montserrat}
        >
          {data.title}
        </Title>
        {hasDescription && (
          <Text size="smallMedium" lineHeight={1.5} color={Colors.steel}>
            {data.shortDescription}
          </Text>
        )}
        <Link href={`blog/${data.id}/${slug(data.title)}`}>
          <ButtonLink>Read more</ButtonLink>
        </Link>
      </CardBody>
    </BlogCardWrap>
  );
}
