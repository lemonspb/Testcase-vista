const initialState = {
  quittingList: [],
  presentList: [],
  titleTableNameQuitting: {
    column1: "№ИБ",
    column2: "ФИО",
    column3: "Причина выбытия"
  },
  titleTableNamePresent: {
    column1: "№ИБ",
    column2: "ФИО",
    column3: "Палата"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PATIENT_ITEM":
      return {
        ...state,
        patientItem: action.patientItem
      };

    case "SET_QUITTING_LIST":
      return {
        ...state,
        quittingList: action.quittingList
      };
    case "SET_PRESENT_LIST":
      return {
        ...state,
        presentList: action.presentList
      };

    default: {
      return state;
    }
  }
};

export default reducer;
