const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        isCoach: !state.isCoach,
      };
    default:
      return state;
  }
};

export default reducer;
