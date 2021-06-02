import React from 'react';
import axios from 'axios';
import {
  Banner,
  ProductSection,
  ProductHeading,
  TextMedia,
  SectionCTA
} from 'views/Home';
import { ProductSectionWrapper, MediaSection } from 'views/Home/styles';
import SiderDarkContainer from 'components/SiderDarkContainer';

export default function Home({ data: { content }, sensorRef }) {
  return (
    <>
      <SiderDarkContainer sensorRef={sensorRef}>
        <Banner data={content.banner} />
      </SiderDarkContainer>
      <ProductHeading data={content.product} />
      <ProductSectionWrapper>
        {content.product.productList.map((product, index) => (
          <ProductSection key={index} data={product} />
        ))}
      </ProductSectionWrapper>

      <SiderDarkContainer sensorRef={sensorRef}>
        <MediaSection>
          {content.introduction.map((item, index) => (
            <TextMedia
              key={index}
              data={item}
              noMargin={index === content.introduction.length - 1}
            />
          ))}
        </MediaSection>
      </SiderDarkContainer>
      <SectionCTA data={content.contact} />
    </>
  );
}

export async function getServerSideProps({ params, req: { headers } }) {
  const response = await axios
    .create()
    .get(`${process.env.API_URL}/api/v1/home-content`, {
      headers: {
        cookie: headers.cookie || ''
      }
    });

  return {
    props: {
      data: response.data
    }
  };
}
