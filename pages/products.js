import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Router, { useRouter } from 'next/router';

import { Container } from 'components/theme/styles';
import Product from 'views/Products/Item';
import { Radio, Col, Row, Spin, Dropdown, Button, Menu } from 'antd';
import { NavWrap, ProductsSection, Title } from 'views/Products/styles';
import { useFetchApi, messageTypes } from 'services';
import { Colors, FontFamily } from 'components/theme';
import { DownOutlined } from '@ant-design/icons';

export default function Products() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryName, setCategoryName] = useState('All');
  const fetchApi = useFetchApi();
  const [category, setCategory] = useState({ loading: true, items: [] });
  const [product, setProduct] = useState({ loading: true, items: [] });

  const changeCategory = (value) => {
    Router.push(`/products?category_id=${value}`);
    setSelectedCategory(value);
  };

  useEffect(() => {
    fetchApi.call({
      type: messageTypes.product.categories,
      onSuccess: ({ data }) => setCategory(data),
      onFailure: () => setCategory((_state) => ({ ..._state, loading: false }))
    });
  }, []);

  useEffect(() => {
    const query = queryString.parse(router.asPath.split(/\?/)[1]);
    const categoryId = query.category_id || '';
    setSelectedCategory(categoryId);

    console.log(categoryId);

    fetchApi.call({
      type: messageTypes.product.list,
      params: {
        category_id: categoryId
      },
      onSuccess: ({ data }) => setProduct(data),
      onFailure: () => setProduct((_state) => ({ ..._state, loading: false }))
    });
  }, [router.asPath]);

  useEffect(() => {
    const filteredCategory = category.items.filter(
      (a) => a.id === parseInt(selectedCategory)
    )[0];

    if (filteredCategory) {
      setCategoryName(filteredCategory.name);
    }
  }, [selectedCategory, category]);

  return (
    <>
      <Container>
        <ProductsSection>
          <Title
            style={{ letterSpacing: -0.56 }}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            whiteSpace="pre-line"
          >
            RYNAN Products
          </Title>
          <NavWrap>
            <Dropdown
              overlay={
                <Menu>
                  {category.items.map((el, i) => (
                    <Menu.Item
                      key={el.id}
                      style={{ color: '#fff' }}
                      onClick={() => changeCategory(el.id)}
                    >
                      {el.name}
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <Button>
                {categoryName}
                <DownOutlined />
              </Button>
            </Dropdown>
            <Spin spinning={category.loading}>
              <Radio.Group
                value={parseInt(selectedCategory)}
                onChange={(e) => changeCategory(e.target.value)}
              >
                <Radio.Button value="">All</Radio.Button>
                {category.items.map((el, i) => (
                  <Radio.Button key={i} value={el.id}>
                    {el.name}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Spin>
          </NavWrap>

          <Spin spinning={product.loading}>
            <Row gutter={[24, 24]} className="product-row">
              {product.items.map((item, i) => (
                <Col span={24} md={12} lg={8}>
                  <Product data={item} key={item.id} />
                </Col>
              ))}
            </Row>
          </Spin>
        </ProductsSection>
      </Container>
    </>
  );
}
