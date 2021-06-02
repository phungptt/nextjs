import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'config/axiosConfig';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faSortDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import css from '!!raw-loader!aos/dist/aos.css';
import 'node_modules/react-modal-video/css/modal-video.min.css';
import configureStore from 'config/store';
import { Provider } from 'react-redux';

import GlobalStyle from 'components/theme/globalStyles';
import DashboardContainer from 'components/layout';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

library.add(
  fab,
  faSortDown,
  faSearch,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faTwitter
);
const store = configureStore();

const App = ({ Component, pageProps }) => {
  const sensorRef = useRef();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: -100
    });
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>RYNAN Printing</title>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico"
        />
      </Head>
      <GlobalStyle />
      <DashboardContainer sensorRef={sensorRef}>
        <Component {...pageProps} sensorRef={sensorRef} />
      </DashboardContainer>
    </Provider>
  );
};

export default App;
