import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Button
} from "@blueprintjs/core";

export interface NavigationProps { }

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <Navbar className={Classes.DARK} style={{ minWidth: '300px' }}>
        <NavbarGroup align={Alignment.LEFT}>
          <AnchorButton
            href="/"
            minimal
            icon="circle"
          />
          <NavbarHeading>RADAR</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton
            href="/"
            minimal
            icon="person"
          />
          <AnchorButton
            href="/"
            minimal
            icon="notifications"
          />
          <AnchorButton
            href="/"
            minimal
            icon="help"
          />
        </NavbarGroup>
      </Navbar>
      <div style={{ height: '100%' }}>
        <ul className="bp4-menu bp4-elevation-1" style={{ height: '100%' }}>
          <li className="bp4-menu-header"><h6 className="bp4-heading">OPEN FLAGS</h6></li>
          <li><button type="button" className="bp4-menu-item">Status</button></li>
          <li><button type="button" className="bp4-menu-item">Circle</button></li>
          <li><button type="button" className="bp4-menu-item">Grid</button></li>
          <li><button type="button" className="bp4-menu-item">History</button></li>
          <li><button type="button" className="bp4-menu-item">Favorites</button></li>
          <li><button type="button" className="bp4-menu-item">Messages</button></li>
        </ul>
      </div>
    </>
  );
};
