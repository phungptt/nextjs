import React from 'react';

import axios from 'axios';
import SiderDarkContainer from 'components/SiderDarkContainer';

import {
  Info,
  KeyFeatureAndBenifits,
  Specifications,
  Gallery
} from 'views/ProductDetail';
import Head from 'next/head';
import slug from 'slug';

export default function ProductDetail({ data, sensorRef }) {
  const { galleries } = data;
  console.log(data)
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name='description' content={data.shortDescription} />
        <meta name='og:description' content={data.shortDescription} />
        <meta name='og:title' content={data.name} />
        <meta name='og:url' content={`${data.brochure.url}`} />
        <meta name='og:image' content={data.image} />
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content={process.env.WEBSITE_URL} />
        <meta name='image' property='og:image' content={data.image} />
      </Head>
      <Info data={data} />
      <SiderDarkContainer sensorRef={sensorRef}>
        <KeyFeatureAndBenifits data={data} />
      </SiderDarkContainer>

      {galleries && <Gallery galleries={galleries} />}
      <Specifications data={data} />
    </>
  );
}

export async function getServerSideProps({ res, params }) {
  const response = await axios
    .create()
    .get(`${process.env.API_URL}/api/v1/product-detail/${params.slug[0]}`);

  if (response.data.code === 401 || response.data.code === 403) {
    res.setHeader('Location', '/403');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }
  return {
    props: {
      data: response.data
    }
  };
}
