import React from "react";
import "./PatientInformationBlock.scss";
import { connect } from 'react-redux';


function PatientInformationBlock(props) {
  return (
    <section className="patient-information-block">
      <header className="patient-information-block__title">
        Информация о пациенте
      </header>
      <div className="patient-information-block__details pacient-details">
        <div className="pacient-details__item">
          <div className="pacient-details__label">Ф.И.О:</div>
            <div className="pacient-details__output">{props.patientItem?.firstName} {props.patientItem?.lastName} {props.patientItem?.patrName}</div>
          
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Возраст:</div>
            <div className="pacient-details__output">{props.patientItem?.birthDate}</div>          
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Диагноз:</div>
            <div className="pacient-details__output">{ props.patientItem?.diagnosis}</div>
        </div>
      </div>
    </section>
  );
}


const mapStateToProps = ({ patientItem}) => {
    return {patientItem};
  };
  

  export default
    connect(mapStateToProps)
      (PatientInformationBlock);


