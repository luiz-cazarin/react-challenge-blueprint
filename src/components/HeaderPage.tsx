// import { useSelector } from "react-redux";
import { InputGroup, Button, Icon, Tag } from "@blueprintjs/core";
import { data } from '../app/DATA'
export const HeaderPage = ({ alerts, handleTitleAlerts }: any) => {
    const filterByTitle = (event: { target: HTMLInputElement }) => {
        handleTitleAlerts(data.filter((el) => el.title.toLowerCase().includes(event.target.value.toLowerCase())));
    }

    const resultAlerts = <Tag minimal={true}>{alerts.length}</Tag>;

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', height: '50px', backgroundColor: '#EBF1F5' }}>
                <div style={{ paddingLeft: "20px" }}>
                    <InputGroup
                        round
                        leftElement={<Icon icon="search" />}
                        placeholder="Search for Alerts..."
                        rightElement={resultAlerts}
                        onChange={filterByTitle}
                    />
                </div>
                <Button
                    minimal
                    icon="list"
                    text="List"
                />
                <Button
                    minimal
                    icon="grid-view"
                    text="Group by Trader"
                />
                <div style={{ marginLeft: "auto", marginRight: "20px" }}>
                    <Button
                        minimal
                        text="Take action"
                    />
                </div>
            </div>
        </>
    );
};