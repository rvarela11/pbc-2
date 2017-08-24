const initialState = {
  navOption: 'Alumni',
  results: [],
  filterButtonOptions: [],
  filterNames: ['TECHSTARS', 'COHORT', 'STATUS', 'BRANCH'],
  techstarsFilterOptions: ['Yes', 'No', 'Both'],
  techstarsFilterButtonClickedStatus: false,
  cohortFilterButtonClickedStatus: false,
  statusFilterButtonClickedStatus: false,
  branchFilterButtonClickedStatus: false,
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GetResultsOnLoad':
    return {
          ...state,
          results: action.payload.data,
          filterButtonOptions: action.payload.data
        };
    case 'NavOption':
    return {
          ...state,
          navOption: action.navOption
        };
    case 'SearchBarName':
    return {
          ...state,
          results: action.payload.data
        };
    case 'GetResultsFromFilterButtons':
    return {
        ...state,
        results: action.payload.data
    };
    case 'techstarsFilterClickAnswer':
    return {
          ...state,
          techstarsFilterButtonClickedStatus: action.answer
        };
    case 'cohortFilterClickAnswer':
    return {
          ...state,
          cohortFilterButtonClickedStatus: action.answer
        };
    case 'statusFilterClickAnswer':
    return {
          ...state,
          statusFilterButtonClickedStatus: action.answer
        };
    case 'branchFilterClickAnswer':
    return {
          ...state,
          branchFilterButtonClickedStatus: action.answer
        };
    default:
        return state;
  }
}
