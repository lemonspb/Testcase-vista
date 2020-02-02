import React from "react";
import "./table.scss";
import { connect } from "react-redux";
import { getPatientItem } from "../../Actions";

function Table(props) {
  return (
    <table className="my_table">
      <tr>
        <th>{props.title.column1}</th>
        <th>{props.title.column2}</th>
        <th>{props.title.column3}</th>
      </tr>

      {props.list.map(patient => {
        return (
          <tr
            onClick={() => {
              props.getPatientItem(patient);
            }}>
            <td>{patient.historyNumber}</td>
            <td>
              {patient.firstName}&nbsp;{patient.lastName}&nbsp;{patient.patrName}
            </td>
            <td>
              {patient.bedNumber} {patient.cause}
            </td>
          </tr>
        );
      })}
    </table>
  );
}

const mapDispatchToProps = {
  getPatientItem
};
export default connect(null, mapDispatchToProps)(Table);
