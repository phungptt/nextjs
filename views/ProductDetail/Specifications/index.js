import React from 'react';
import { Container } from 'components/theme/styles';
import { Row, Col } from 'antd';
import {
  ProductSpecifications,
  ListPlus,
  Wrapper,
  Title,
  SolventInks
} from './styles';
import { Colors, FontFamily } from 'components/theme';
import Text from 'components/Text';

import { isHTML } from 'helper';

const specificationFirstColumn = {
  resolution: 'RESOLUTION',
  printSpeed: 'PRINT SPEED',
  lengthTemplate: 'LENGTH TEMPLATE',
  menuLanguage: 'MENU LANGUAGES',
  printability: 'PRINTABILITY'
};

const specificationSecondColumn = {
  printHead: 'PRINT HEADS',
  memory: 'MEMORY',
  inkManagement: 'INK MANAGEMENT',
  advance: 'ADVANCE'
};

export default function Specifications({ data }) {
  const { specifications } = data;

  return (
    <Wrapper>
      <Container>
        <Title
          style={{ letterSpacing: -0.56, textAlign: 'center' }}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          whiteSpace="pre-line"
        >
          Specifications
        </Title>
        <Row gutter={[48, 48]}>
          <Col span={24} lg={12}>
            {Object.keys(specificationFirstColumn).map((key) => {
              if (!specifications[key]) return null;
              return (
                <ProductSpecifications>
                  <Text
                    color={Colors.greenishTeal}
                    size="smallMedium"
                    fontWeight={500}
                    lineHeight={1.5}
                  >
                    {specificationFirstColumn[key]}
                  </Text>
                  {isHTML(specifications[key]) ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: specifications[key]
                      }}
                    />
                  ) : (
                    <ListPlus>
                      <li>{specifications[key]}</li>
                    </ListPlus>
                  )}
                </ProductSpecifications>
              );
            })}
          </Col>
          <Col span={24} lg={12}>
            {Object.keys(specificationSecondColumn).map((key) => {
              if (!specifications[key]) return null;
              return (
                <ProductSpecifications>
                  <Text
                    color={Colors.greenishTeal}
                    size="smallMedium"
                    fontWeight={500}
                    lineHeight={1.5}
                  >
                    {specificationSecondColumn[key]}
                  </Text>
                  {isHTML(specifications[key]) ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: specifications[key]
                      }}
                    />
                  ) : (
                    <ListPlus>
                      <li>{specifications[key]}</li>
                    </ListPlus>
                  )}
                </ProductSpecifications>
              );
            })}
          </Col>
          {specifications.solventInks && (
            <Col span={24}>
              <SolventInks
                dangerouslySetInnerHTML={{
                  __html: specifications.solventInks
                }}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
