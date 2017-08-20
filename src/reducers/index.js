const initialState = {
  navOption: "Alumni"
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'NAVOPTION':
    return {
          ...state,
          navOption: action.navOption
        }
    default:
        return state;
  }
}
