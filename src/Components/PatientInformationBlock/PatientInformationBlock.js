import React from "react";
import "./PatientInformationBlock.scss";

function PatientInformationBlock() {
  return (
    <section className="patient-information-block">
      <header className="patient-information-block__title">
        Информация о пациенте
      </header>
      <div className="patient-information-block__details pacient-details">
        <div className="pacient-details__item">
          <div className="pacient-details__label">Ф.И.О:</div>
            <div className="pacient-details__output"></div>
          
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Возраст:</div>
            <div className="pacient-details__output"></div>          
        </div>
        <div className="pacient-details__item">
          <div className="pacient-details__label">Диагноз:</div>
            <div className="pacient-details__output"></div>
        </div>
      </div>
    </section>
  );
}

export default PatientInformationBlock;
