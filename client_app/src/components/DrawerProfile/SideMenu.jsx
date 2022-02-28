import React, { Children } from 'react';
import NightModeIcon from '../../common/icons/NightModeIcon';
import SettingsIcon from '../../common/icons/SettingsIcon';
import Ripple from '../../common/Ripple/Ripple';
import './SideMenu.css';

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <SideMenuProfile />
      <SideMenuItem title="Settings">
        <SettingsIcon />
      </SideMenuItem>

      <SideMenuItem title="Night Mode">
        <NightModeIcon />
      </SideMenuItem>

      <SideMenuItem title="Settings">
        <SettingsIcon />
      </SideMenuItem>

      <SideMenuItem title="Night Mode">
        <NightModeIcon />
      </SideMenuItem>
    </div>
  );
}
export function SideMenuProfile() {
  return (
    <div className="sidemenu__profile sidemenu--container">
      <img className="sidemenu__profile__image" src="http://picsum.photos/200/200" alt="Avatar" />
      <div className="sidemenu__profile__info">
        <h3 className="sidemenu__profile__fullname">Jo'rayev Mansur</h3>
        <p className="sidemenu__profile__phone">+998996672106</p>
      </div>
    </div>
  );
}

export function SideMenuItem({ children, title }) {
  return (
    <Ripple style={{ borderRadius: '0px', width: '100%' }}>
      <div className="sidemenu__item sidemenu--container">
        {children}
        <div className="sidemenu__item__name sidemenu--container">{title}</div>
      </div>
    </Ripple>
  );
}
