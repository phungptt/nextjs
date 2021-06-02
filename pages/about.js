import React from 'react';
import { Wrapper, ImageThumbRight } from 'views/About/styles';
import SiderDarkContainer from 'components/SiderDarkContainer';

import {
  SectionHeading,
  SectionIntro,
  SectionTeam,
  SectionPartner,
  SectionServices,
  SectionMedia
} from 'views/About';

export default function About({ sensorRef }) {
  return (
    <Wrapper>
      <SectionHeading />
      <ImageThumbRight
        src="/static/images/pages/about/about-banner.png"
        alt="error"
      />
      <SectionIntro />
      <SiderDarkContainer sensorRef={sensorRef}>
        <SectionTeam />
      </SiderDarkContainer>
      <SectionPartner />
      <SectionServices />
      <SiderDarkContainer sensorRef={sensorRef} forceBelowSectionDarkMode>
        <SectionMedia />
      </SiderDarkContainer>
    </Wrapper>
  );
}
