import {
    Button,
    Text,
} from "@blueprintjs/core";

const getDanger = (level: number) => {
    if (level === 0) return "#d1d1d1"
    if (level === 1) return "#ee8104"
    if (level === 2) return "#f50404"
}

// import { useSelector } from "react-redux";
export const TableAlerts = ({ alerts }: any) => {
    return (
        <table className='table'>
            <thead className='header__row'>
                <tr>
                    <th><Text>TITLE</Text></th>
                    <th style={{ textAlign: "center" }}>
                        <Button className='bp4-intent-primary' icon="issue" minimal></Button>
                    </th>
                    <th><Text>STATUS</Text></th>
                    <th><Text>TRADER</Text></th>
                    <th><Text>COUNTERPARTY</Text></th>
                    <th><Text>BOOK</Text></th>
                    <th><Text>SOURCE</Text></th>
                </tr>
            </thead>
            <tbody className='body'>
                {
                    alerts.map((el: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td style={{ width: "300px" }}>{el.title}</td>
                                <td style={{ width: "20px" }} >
                                    <div style={{ height: "25px", textAlign: "center", width: "25px", borderRadius: "3px", backgroundColor: `${getDanger(el.danger)}` }}></div>
                                </td>
                                <td style={{ width: "120px" }}>
                                    <div style={{ border: "1px solid rgb(209, 209, 209)", fontSize: "10px", textAlign: "center", padding: ".3rem 1rem", borderRadius: "5px" }}>
                                        {el.status.toUpperCase()}
                                    </div>
                                </td>
                                <td>{el.trader}</td>
                                <td>{el.couterParty}</td>
                                <td>{el.book}</td>
                                <td>{el.source}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};
