import React from 'react';
import Slider from 'react-slick';

import { Container } from 'components/theme/styles';
import { SectionTeamWrap, TeamList, TeamContent, TeamItem } from './styles';
import { teamMembers } from 'constant';
import Text from 'components/Text';
import { Colors, FontFamily } from 'components/theme';

export default function SectionTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
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

  return (
    <SectionTeamWrap>
      <Container>
        <Text
          style={{ letterSpacing: -0.56 }}
          fontFamily={FontFamily.montserrat}
          color={Colors.greenishTeal}
          size="biggest"
          fontWeight="bold"
          lineHeight={1.14}
          whiteSpace="pre-line"
        >
          RYNAN Team
        </Text>
        <TeamList>
          <Slider {...settings}>
            {teamMembers.map((el, i) => (
              <TeamItem key={i}>
                <img src={el.urlImage} alt="error" />
                <TeamContent>
                  <Text
                    style={{ letterSpacing: -0.19 }}
                    color={Colors.greenishTeal}
                    size="medium"
                    fontWeight={500}
                    lineHeight={1.5}
                  >
                    {el.title}
                  </Text>
                  <Text
                    color={Colors.whiteTwo}
                    size="smallMedium"
                    lineHeight={1.5}
                    whiteSpace="pre-line"
                  >
                    {el.name}
                  </Text>
                </TeamContent>
              </TeamItem>
            ))}
          </Slider>
        </TeamList>
      </Container>
    </SectionTeamWrap>
  );
}
