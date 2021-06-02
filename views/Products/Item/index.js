import React from 'react';
import Link from 'next/link';
import slug from 'slug';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';
import { ProductCard, Image, ProductBody, Description, Title } from './styles';

export default function Product({ data }) {
  return (
    <Link href={`/products/${data.id}/${slug(data.name)}`}>
      <ProductCard>
        <Image src={data.image} alt={data.name} />
        <ProductBody>
          <Text
            style={{ letterSpacing: 1.2 }}
            whiteSpace="pre-line"
            size="smallMedium"
            fontWeight={600}
            lineHeight={1.5}
            color={Colors.greenishTeal}
          >
            {data.category}
          </Text>
          <Title
            style={{ letterSpacing: -0.29 }}
            whiteSpace="pre-line"
            size="big"
            fontWeight={600}
            lineHeight={1.1}
            color={Colors.dusk}
            fontFamily={FontFamily.montserrat}
          >
            {data.name}
          </Title>
          <Description>{data.heading}</Description>
        </ProductBody>
      </ProductCard>
    </Link>
  );
}
