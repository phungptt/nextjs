import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import Button from 'components/Button';
import { useFetchApi, messageTypes } from 'services';
import BlogCard from '../BlogCard';
import { BlogListWrap } from '../styles';

export default function BlogList() {
  const fetchApi = useFetchApi();
  const [state, setState] = useState({
    loading: true,
    items: [],
    currentPage: 1,
    totalCount: 0
  });

  const { items, loading, currentPage, totalCount } = state;

  const loadMore = () => {
    fetchApi.call({
      type: messageTypes.blog.list,
      params: {
        page: currentPage + 1
      },
      onSuccess: ({ data }) =>
        setState((_state) => ({
          ...data,
          items: _state.items.concat(data.items)
        })),
      onFailure: () => setState((_state) => ({ ..._state, loading: false }))
    });
  };

  useEffect(() => {
    fetchApi.call({
      type: messageTypes.blog.list,
      params: {
        page: 1
      },
      onSuccess: ({ data }) => setState(data),
      onFailure: () => setState((_state) => ({ ..._state, loading: false }))
    });
  }, []);

  return (
    <BlogListWrap>
      <Spin spinning={loading} tip="Loading data ...">
        <Row gutter={[28, 28]}>
          {items.map((item, index) => (
            <Col span={24} md={index !== 0 ? 12 : 24} key={item.id}>
              <BlogCard
                data={item}
                center={index !== 0 ? false : true}
                firstItem={index === 0}
              />
            </Col>
          ))}
        </Row>
      </Spin>
      {totalCount > items.length && (
        <div className="text-center btn-action">
          <Button
            type="primary"
            color={Colors.greenishTeal}
            onClick={loadMore}
          >Load more</Button>
        </div>
      )}
    </BlogListWrap>
  );
}
