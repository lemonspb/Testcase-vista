export const  setQuittingList = list => {
  return {
    type: "SET_QUITTING_LIST",
    quittingList: list
  };
};

export const setPresentList = list => {
  return {
    type: "SET_PRESENT_LIST",
    presentList: list
  };
};

export const getPatientItem = item => {
  return {
    type: "GET_PATIENT_ITEM",
    patientItem: item
  };
};
