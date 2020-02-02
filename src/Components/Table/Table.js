import React from "react";
import "./table.scss";
import { connect } from "react-redux";
import { getPatientItem } from "../../Actions";

function Table(props) {
  return (
    <table className="my_table">
      <thead>
        <tr>
          <th>{props.title.column1}</th>
          <th>{props.title.column2}</th>
          <th>{props.title.column3}</th>
        </tr>
      </thead>
      <tbody>
        {props.list
          .sort((a, b) => a.historyNumber - b.historyNumber) ///later this sort could cause performance problems, but for now it looks like a premature optimisation, so leaving as is
          .map((patient, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  props.getPatientItem(patient);
                }}>
                <td>{patient.historyNumber}</td>
                <td>
                  {patient.firstName}&nbsp;{patient.lastName}&nbsp;
                  {patient.patrName}
                </td>
                <td>
                  {patient.bedNumber} {patient.cause}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

const mapDispatchToProps = {
  getPatientItem
};
export default connect(null, mapDispatchToProps)(Table);
