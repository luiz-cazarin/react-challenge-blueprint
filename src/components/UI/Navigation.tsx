import React, { useState } from "react";
import {
  Alignment,
  AnchorButton,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Icon,
  Menu,
  MenuItem,
  InputGroup,
  Card,
} from "@blueprintjs/core";

export const Navigation = ({ alerts }: any) => {

  const currMenuItems = [{
    text: "Status",
    children: [
      { text: "Close" },
      { text: "Open" },
      { text: "Escalated" }
    ]
  },
  { text: "Circle" },
  { text: "Grid" },
  { text: "History" },
  { text: "Favorites" },
  { text: "Messages" },]
  const newAlerts = alerts.filter((el: any) => el.status.includes(["open closed"]));
  console.log(newAlerts);


  const [menuItems, setMenuItems] = useState(currMenuItems);
  const [filteredStatus, setFilteredStatus] = useState(currMenuItems[0].children?.map((el) => el.text));

  const handleInputProperties = (value: { target: HTMLInputElement }) => {
    setMenuItems(currMenuItems.filter((el) => el.text.toLowerCase().includes(value.target.value.toLowerCase())))
  }

  const setFilterStatus = (value: any) => {
    let defaultList = currMenuItems[0].children?.map((el) => el.text);
    let newValue = value.target.textContent;
    if (filteredStatus?.find(el => el === newValue)) {
      if (!filteredStatus.find(el => el === newValue)) {
        setFilteredStatus([...filteredStatus, newValue]);
      }
    } else if (filteredStatus?.length === 0) {
      setFilteredStatus(defaultList);
    } else {
      setFilteredStatus([newValue]);
    }
  }

  const removeFilterStatus = (value: any) => {
    if (value.target.textContent) setFilteredStatus(filteredStatus?.filter((el) => el !== value.target.textContent));
    if (filteredStatus?.length === 1) setFilteredStatus(currMenuItems[0].children?.map((el) => el.text))
  }

  return (
    <>
      <div style={{ backgroundColor: '#30404D', height: "100%" }}>
        <Navbar className={Classes.DARK} style={{ minWidth: '300px' }}>
          <NavbarGroup align={Alignment.LEFT}>
            <Icon icon="circle" size={22} style={{ paddingRight: "1rem" }}></Icon>
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
        </Navbar>
        <Navbar className={Classes.DARK} style={{ minWidth: '300px' }}>
          <NavbarGroup className="bp4-dark">
            <Button icon="caret-left" text="Sets" minimal />
            <NavbarHeading style={{ fontWeight: "600", paddingLeft: "2rem" }}>OPEN FLAGS</NavbarHeading>
          </NavbarGroup>
        </Navbar>
        <InputGroup className={Classes.DARK} leftIcon="filter" placeholder="Find Properties..." large={true} fill={true} style={{ width: '100%' }} onChange={handleInputProperties}></InputGroup>
        <Menu className={Classes.DARK} style={{ backgroundColor: "#394B59" }}>
          {
            menuItems.map((el, index) => {
              return (
                <>
                  <MenuItem
                    key={index}
                    style={{ color: '#D5DCE2' }}
                    text={el.text}
                    children={
                      el.children ? (
                        <>
                          {el.children?.map((children, index) => {
                            return (
                              <Button key={index} minimal text={children.text} onClick={setFilterStatus} />
                            )
                          })
                          }
                        </>
                      ) : <div /> // just to make an arrow on the front end, not functional
                    }
                  />
                  {el.children &&
                    <Card className={Classes.DARK} style={{ minWidth: '300px', padding: '0px' }}>
                      {filteredStatus?.map((el, index) => {
                        return (
                          <Button key={index} rightIcon="cross" text={el} style={{ margin: '.3rem' }} onClick={removeFilterStatus} />
                        )
                      })}
                    </Card>
                  }
                </>

              )
            })
          }
        </Menu>

      </div>
    </>
  );
};
