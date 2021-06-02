import React, { useState, useImperativeHandle, useEffect } from 'react';
import {
  Wrapper,
  LogoBrand,
  HamburgerBtn,
  SocialList,
  SocialIcon
} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { socials } from 'constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from 'react-visibility-sensor';

const darkSider = [
  '/about',
  '/contact',
  '/products',
  '/blogs',
  '/products/[...slug]',
  '/blog/[...slug]',
  '/preview-blog/[...slug]'
];

const HeaderLayout = React.forwardRef(({ toggleMenu, collapse }, ref) => {
  const [element, setElement] = useState(null);
  const [scrolled, setIsScrolled] = useState(null);
  const [forceDarkMode, setForceDarkMode] = useState(false);
  const router = useRouter();

  useImperativeHandle(ref, () => ({
    setElement: (el) => {
      setElement(el);
      setIsScrolled(true);
    },
    forceDarkMode: () => {
      setForceDarkMode(true);
    },
    unforceDarkMode: () => setForceDarkMode(false),
    getForeceDarkModeValue: () => forceDarkMode
  }));

  useEffect(() => {
    setForceDarkMode(false);
  }, [router.asPath]);

  return (
    <Wrapper>
      <VisibilitySensor containment={element}>
        {({ isVisible }) => {
          return (
            <Link href="/">
              <LogoBrand
                dark={
                  forceDarkMode
                    ? false
                    : !scrolled
                    ? darkSider.includes(router.pathname)
                    : !isVisible
                }
              />
            </Link>
          );
        }}
      </VisibilitySensor>
      <VisibilitySensor containment={element}>
        {({ isVisible }) => {
          return (
            <HamburgerBtn
              dark={
                forceDarkMode
                  ? false
                  : !scrolled
                  ? darkSider.includes(router.pathname)
                  : !isVisible
              }
              className={collapse ? 'is-active' : ''}
              onClick={toggleMenu}
            >
              <div className="wrapper">
                <div className="inner"></div>
                <div className="hidden"></div>
              </div>
            </HamburgerBtn>
          );
        }}
      </VisibilitySensor>
      <SocialList>
        {socials.map((item, index) => (
          <VisibilitySensor containment={element}>
            {({ isVisible }) => {
              return (
                <SocialIcon
                  key={index}
                  dark={
                    forceDarkMode
                      ? false
                      : !scrolled
                      ? darkSider.includes(router.pathname)
                      : !isVisible
                  }
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </SocialIcon>
              );
            }}
          </VisibilitySensor>
        ))}
      </SocialList>
    </Wrapper>
  );
});

export default HeaderLayout;
