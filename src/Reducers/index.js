const initialState = {
  quittingList: [],
  presentList: [],
 titleTableNameQuitting:{
  column1:'№ИБ',
  column2:'ФИО',
  column3:  'Причина выбытия' 
 },
 titleTableNamePresent:{
    column1:'№ИБ',
  column2:'ФИО',
  column3: "Палата"   
}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "R":

            console.log(action.payload);
            return {
                ...state,
               patientItem: action.payload
            };

    case "CHOICE_QUITTING_LIST":
      return {
        ...state,
        quittingList: action.payload
      };
    case "CHOICE_PRESENT_LIST":

    return {
        ...state,
        presentList: action.payload
      };
   

    default: {
      return state;
    }
  }
};

export default reducer;
