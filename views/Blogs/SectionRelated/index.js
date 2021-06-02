import React from 'react';
import BlogCard from 'components/BlogCard';

import { RelatedList } from '../style';

import { Row, Col } from 'antd';
import { Container, SectionWhite } from 'components/theme/styles';
import { TextStyle3 } from 'components/theme/text';

export default function SectionRelated({ items }) {
  return (
    <SectionWhite className="text-center">
      <Container>
        <TextStyle3>More articles</TextStyle3>
        <RelatedList>
          <Row gutter={[20, 20]}>
            {items.map((ele, index) => (
              <Col span={24} md={12} key={index}>
                <BlogCard data={ele} hasDescription={false} />
              </Col>
            ))}
          </Row>
        </RelatedList>
      </Container>
    </SectionWhite>
  );
}
