import React from 'react';
import Slider from 'react-slick';
import { Container } from 'components/theme/styles';
import { Title, Wrapper, Image, ImageWrapper } from './styles';
import { Colors, FontFamily } from 'components/theme';

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false
      }
    }
  ]
};

export default function Gallery({ galleries }) {
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
          Gallery
        </Title>
        <Slider {...settings}>
          {galleries.map((el, i) => (
            <ImageWrapper>
              <Image key={el.id} src={el.url} alt="error" />
            </ImageWrapper>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
}
