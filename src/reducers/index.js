const initialState = {
  navOption: 'Alumni',
  results: [],
  filterButtonOptions: [],
  filterNamesAlumni: ['TECHSTARS', 'COHORT', 'STATUS', 'BRANCH'],
  filterNamesCompany: ['TECHSTARS', 'PAST FUNDING', 'STAGE'],
  techstarsFilterOptions: ['Yes', 'No', 'Both'],
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GetResultsOnLoad':
    return {
          ...state,
          results: action.payload.data,
          filterButtonOptions: action.payload.data
        };
    case 'GetCompanyResultsOnLoad':
    return {
          ...state,
          results: action.payload.data
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
    case 'SearchBarNameCompany':
    return {
          ...state,
          results: action.payload.data
        };
    case 'GetResultsFromFilterButtons':
    return {
        ...state,
        results: action.payload.data
    };
    case 'GetResultsFromFilterButtonsCompany':
    return {
        ...state,
        results: action.payload.data
    };
    default:
        return state;
  }
}
