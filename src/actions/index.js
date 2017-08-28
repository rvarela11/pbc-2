import axios from 'axios';

// API URLs
const ROOT_URL = 'http://alumniapi.pp2epi6m2i.us-east-1.elasticbeanstalk.com/api/founders';
const ROOT_URL_COMPANY = 'http://alumniapi.pp2epi6m2i.us-east-1.elasticbeanstalk.com/api/companies';

export const GetResultsOnLoad = 'GetResultsOnLoad';
export function getResultsOnLoad () {
  const request = axios.get(ROOT_URL);
  return {
    type: GetResultsOnLoad,
    payload: request
  }
}
export const GetCompanyResultsOnLoad = 'GetResultsOnLoad';
export function getCompanyResultsOnLoad () {
  const request = axios.get(ROOT_URL_COMPANY);
  return {
    type: GetCompanyResultsOnLoad,
    payload: request
  }
}

export const NavOption = 'NavOption';
export function navClickedOption (navOption) {
  return {
    type: NavOption,
    navOption
  }
}

export const SearchBarName = 'SearchBarName';
export function searchBarName (name) {
  const request = axios.get(`${ROOT_URL}/search/${name}`);
      return {
        type: SearchBarName,
        payload: request
      }
}
export const SearchBarNameCompany = 'SearchBarNameCompany';
export function searchBarNameCompany (name) {
  console.log(name);
  const request = axios.get(`${ROOT_URL_COMPANY}/search/${name}`);
      return {
        type: SearchBarNameCompany,
        payload: request
      }
}

export const GetResultsFromFilterButtons = 'GetResultsFromFilterButtons';
export function getResultsFromFilterButtons (data) {
  const request = axios.post(`${ROOT_URL}/filters/`, data);
  return {
    type: GetResultsFromFilterButtons,
    payload: request
  }
}



export const techstarsFilterClickAnswer = 'techstarsFilterClickAnswer';
export function techstarsFilterButtonClicked (answer) {
  return {
    type: techstarsFilterClickAnswer,
    answer
  }
}
export const cohortFilterClickAnswer = 'cohortFilterClickAnswer';
export function cohortFilterButtonClicked (answer) {
  return {
    type: cohortFilterClickAnswer,
    answer
  }
}
export const statusFilterClickAnswer = 'statusFilterClickAnswer';
export function statusFilterButtonClicked (answer) {
  return {
    type: statusFilterClickAnswer,
    answer
  }
}
export const branchFilterClickAnswer = 'branchFilterClickAnswer';
export function branchFilterButtonClicked (answer) {
  return {
    type: branchFilterClickAnswer,
    answer
  }
}
export const pastFundingFilterClickAnswer = 'pastFundingFilterClickAnswer';
export function pastFundingFilterButtonClicked (answer) {
  return {
    type: pastFundingFilterClickAnswer,
    answer
  }
}
export const stageFilterClickAnswer = 'stageFilterClickAnswer';
export function stageFilterButtonClicked (answer) {
  return {
    type: stageFilterClickAnswer,
    answer
  }
}
