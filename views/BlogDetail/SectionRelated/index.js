import React from 'react';
import { Row, Col } from 'antd';

import BlogCard from 'views/Blogs/BlogCard';
import { RelatedList, Title, Wrapper } from './styles';
import { Container } from 'components/theme/styles';
import { Colors, FontFamily } from 'components/theme';

export default function SectionRelated({ items }) {
  return (
    <Wrapper>
      <Container>
        <Title
          style={{ letterSpacing: -0.56, textAlign: 'center' }}
          whiteSpace="pre-line"
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
        >
          More articles
        </Title>
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
    </Wrapper>
  );
}
