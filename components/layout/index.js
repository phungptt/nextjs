import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

// Component
import MenuLayout from './Menu';
import SiderLayout from './Sider';
import FooterLayout from './Footer';
import NavigateFixed from './NavigateFixed';

const { Content } = Layout;

export default function DashboardContainer({ children, sensorRef }) {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <>
      <SiderLayout
        toggleMenu={menuIconClick}
        collapse={menuCollapse}
        ref={sensorRef}
        setMenuCollapse={setMenuCollapse}
      />
      <NavigateFixed />
      <MenuLayout collapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
      <Content>{children}</Content>
      <FooterLayout sensorRef={sensorRef} />
    </>
  );
}
