import React from 'react';
import axios from 'axios';

import { Heading, HashTag, SectionRelated } from 'views/BlogDetail/';
import { Wrapper, Divider } from 'views/BlogDetail/styles';
import Head from 'next/head';

export default function BlogDetail({ data, relatedItems }) {
  return (
    <Wrapper>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.shortDescription} />
        <meta name='og:description' content={data.shortDescription} />
        <meta name='og:title' content={data.title} />
        <meta name='og:url' content={`${process.env.WEBSITE_URL}/blog/${data.slug}`} />
        <meta name='og:image' content={data.image} />
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content={process.env.WEBSITE_URL} />
        <meta name='image' property='og:image' content={data.image} />
      </Head>
      <Heading data={data} />
      <Divider />
      <HashTag hashtag={data.hashtag} />
      {relatedItems.length > 0 && <SectionRelated items={relatedItems} />}
    </Wrapper>
  );
}

export async function getServerSideProps({ res, params }) {
  const response = await axios
    .create()
    .get(`${process.env.API_URL}/api/v1/blog-detail/${params.slug[0]}`);

  if (response.data.code === 401 || response.data.code === 403) {
    res.setHeader('Location', '/403');
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: {
      data: response.data.item,
      relatedItems: response.data.relatedItems
    }
  };
}
