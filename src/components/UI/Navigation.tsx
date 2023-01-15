import React from "react";
import {
  Alignment,
  AnchorButton,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon
} from "@blueprintjs/core";

export interface NavigationProps { }

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <Navbar className={Classes.DARK} style={{ minWidth: '300px' }}>
        <NavbarGroup align={Alignment.LEFT}>
          <Icon icon="circle" size={22} style={{ paddingRight: "1rem"}}></Icon>
          <NavbarHeading style={{ fontWeight: "600" }}>RADAR</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton
            href="/"
            minimal
            icon="user"
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
        <NavbarGroup>
          <Button icon="caret-left" minimal />
          <NavbarHeading style={{ fontWeight: "600" }}>OPEN FLAGS</NavbarHeading>
        </NavbarGroup>
      </Navbar>
      <div style={{ height: '100%' }}>
        <ul className="bp4-menu bp4-elevation-1" style={{ height: '100%' }}>
          <li>
            <Button minimal className="bp4-menu-item">Status</Button>
          </li>
          <li>
            <Button minimal className="bp4-menu-item">Circle</Button>
          </li>
          <li>
            <Button minimal className="bp4-menu-item">Grid</Button>
          </li>
          <li>
            <Button minimal className="bp4-menu-item">History</Button>
          </li>
          <li>
            <Button minimal className="bp4-menu-item">Favorites</Button>
          </li>
          <li>
            <Button minimal className="bp4-menu-item">Messages</Button>
          </li>
        </ul>
      </div>
    </>
  );
};
