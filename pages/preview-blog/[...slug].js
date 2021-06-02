import React from 'react';
import axios from 'axios';

import { Heading, HashTag } from 'views/BlogDetail/';
import { Wrapper, Divider } from 'views/BlogDetail/styles';

export default function BlogDetail({ data }) {
  return (
    <Wrapper>
      <Heading data={data} />
      <Divider />
      <HashTag hashtag={data.hashtag} />
    </Wrapper>
  );
}

export async function getServerSideProps({ res, params, req: { headers } }) {
  const response = await axios
    .create()
    .get(`${process.env.API_URL}/api/v1/preview-blog/${params.slug[0]}`, {
      headers: {
        cookie: headers.cookie || ''
      }
    });

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
