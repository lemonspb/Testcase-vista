export const choiceQuittingList = (list) => {
    return {
      type: 'CHOICE_QUITTING_LIST',
      payload: list,
    };
  };
 
  

  export const choicePresentList = (list) => {
    return {
      type: 'CHOICE_PRESENT_LIST',
      payload: list,
    };
  };
 
  export const getPatientItem = (item) => {
    return {
      type: "R",
      payload: item,
    };
  };
 