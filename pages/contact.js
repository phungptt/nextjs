import React, { useRef } from 'react';

import SiderDarkContainer from 'components/SiderDarkContainer';
import { ContactForm, Heading } from 'views/Contact';

export default function Contact({ sensorRef }) {
  const formRef = useRef();

  return (
    <>
      <Heading />
      <SiderDarkContainer sensorRef={sensorRef}>
        <ContactForm formRef={formRef} />
      </SiderDarkContainer>
      <SiderDarkContainer
        sensorRef={sensorRef}
        onCallback={() => {
          sensorRef.current.forceDarkMode();
          return sensorRef.current.setElement(formRef.current);
        }}
      />
    </>
  );
}
