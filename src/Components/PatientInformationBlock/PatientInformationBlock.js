import React from "react";
import "./PatientInformationBlock.scss";
import { connect } from "react-redux";

function PatientInformationBlock(props) {

  function getCurrentAge(date) {
    return (
      ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0); 
  }

  return (
    <section className="patient-information-block">
      <header className="patient-information-block__title">
        <span>Информация о пациенте </span> <span>&#8249;</span>
      </header>
      <div className="patient-information-block__details patient-details">
        <div className="patient-details__item">
          <div className="patient-details__label">ФИО:</div>
          <div className="patient-details__output">
            {props.patientItem?.firstName}&nbsp;
            {props.patientItem?.lastName}&nbsp;	
            {props.patientItem?.patrName}
          </div>
        </div>
        <div className="patient-details__item">
          <div className="patient-details__label">Возраст:</div>
          <div className="patient-details__output">
            {getCurrentAge(props.patientItem?.birthDate) || ""}
          </div>
        </div>
        <div className="patient-details__item">
          <div className="patient-details__label">Диагноз:</div>
          <div className="patient-details__output">
            {props.patientItem?.diagnosis}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = ({ patientItem }) => {
  return { patientItem };
};

export default connect(mapStateToProps)(PatientInformationBlock);
