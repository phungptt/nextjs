import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Container, InputWrap, SelectWrap } from 'components/theme/styles';
import { SectionGrey, Wrapper, ButtonWrapper, Title } from './style';
import Button from 'components/Button';
import { coutries } from 'constant';
import { useFetchApi, messageTypes } from 'services';
import { Colors, FontFamily } from 'components/theme';

const { Option } = Select;

const validate = {
  required: {
    required: true,
    message: 'This field is required.'
  },
  email: {
    type: 'email',
    message: 'Please enter a valid email address.'
  }
};

export default function ContactForm({ formRef }) {
  const fetchApi = useFetchApi();
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    setSubmitting(true);
    fetchApi.call({
      type: messageTypes.contact.submit,
      params: {
        contact: values
      },
      onSuccess: ({ data }) => {
        form.resetFields();
        setSubmitting(false);
      },
      onFailure: () => setSubmitting(false)
    });
  };

  return (
    <SectionGrey ref={formRef}>
      <Container>
        <Wrapper>
          <Title
            style={{ letterSpacing: -0.56 }}
            fontFamily={FontFamily.montserrat}
            color={Colors.greenishTeal}
            size="biggest"
            fontWeight="bold"
            lineHeight={1.14}
            whiteSpace="pre-line"
          >
            Drop us a line
          </Title>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={[55, 0]}>
              <Col span={24} md={12}>
                <InputWrap>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[validate.required]}
                  >
                    <Input />
                  </Form.Item>
                </InputWrap>
              </Col>
              <Col span={24} md={12}>
                <InputWrap>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[validate.required]}
                  >
                    <Input />
                  </Form.Item>
                </InputWrap>
              </Col>
              <Col span={24} md={12}>
                <InputWrap>
                  <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[validate.required]}
                  >
                    <Input />
                  </Form.Item>
                </InputWrap>
              </Col>
              <Col span={24} md={12}>
                <InputWrap>
                  <Form.Item
                    label="Email address"
                    name="emailAddress"
                    rules={[validate.required, validate.email]}
                  >
                    <Input />
                  </Form.Item>
                </InputWrap>
              </Col>
              <Col span={24} md={12}>
                <InputWrap>
                  <Form.Item
                    label="Contact number"
                    name="contactNumber"
                    rules={[validate.required]}
                  >
                    <Input />
                  </Form.Item>
                </InputWrap>
              </Col>
              <Col span={24} md={12}>
                <SelectWrap>
                  <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[validate.required]}
                  >
                    <Select>
                      <Option value="Product Enquiry">Product Enquiry</Option>
                      <Option value="Technical Support">
                        Technical Support
                      </Option>
                      <Option value="RYNAN Partnership">
                        RYNAN Partnership
                      </Option>
                      <Option value="Feedback">Feedback</Option>
                    </Select>
                  </Form.Item>
                </SelectWrap>
              </Col>
              <Col span={24}>
                <Row gutter={[55, 0]}>
                  <Col span={24} md={12}>
                    <SelectWrap>
                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[validate.required]}
                      >
                        <Select>
                          {coutries.map((item) => (
                            <Option value={item.name} key={item.name}>
                              {item.name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </SelectWrap>
                    <SelectWrap>
                      <Form.Item
                        label="How did you find about us? "
                        name="hear"
                        rules={[validate.required]}
                      >
                        <Select>
                          <Option value="Facebook">Facebook</Option>
                          <Option value="Google Search">Google Search</Option>
                          <Option value="Google Ads">Google Ads</Option>
                          <Option value="Word of Mouth">Word of Mouth</Option>
                          <Option value="Tradeshow">Tradeshow</Option>
                          <Option value="Linkedin">Linkedin</Option>
                          <Option value="Youtube">Youtube</Option>
                          <Option value="Others">Others</Option>
                        </Select>
                      </Form.Item>
                    </SelectWrap>
                  </Col>
                  <Col span={24} md={12}>
                    <InputWrap>
                      <Form.Item
                        label="Your message"
                        name="message"
                        rules={[validate.required]}
                      >
                        <Input.TextArea rows={4} />
                      </Form.Item>
                    </InputWrap>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Form.Item>
              <ButtonWrapper>
                <Button
                  type="primary"
                  color={Colors.greenishTeal}
                  onClick={() => !submitting && form.submit()}
                >{submitting ? 'Submitting...' : 'Submit'}</Button>
              </ButtonWrapper>
            </Form.Item>
          </Form>
        </Wrapper>
      </Container>
    </SectionGrey>
  );
}
