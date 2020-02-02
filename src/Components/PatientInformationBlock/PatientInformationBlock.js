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
        Информация о пациенте
      </header>
      <div className="patient-information-block__details pacient-details">
        <div className="pacient-details__item">
          <div className="pacient-details__label">Ф.И.О:</div>
          <div className="pacient-details__output">
            {props.patientItem?.firstName}&nbsp;{props.patientItem?.lastName}&nbsp;	
            {props.patientItem?.patrName}
          </div>
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Возраст:</div>
          <div className="pacient-details__output">
            {getCurrentAge(props.patientItem?.birthDate) || ""}
          </div>
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Диагноз:</div>
          <div className="pacient-details__output">
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
