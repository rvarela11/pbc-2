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
  const request = axios.get(`${ROOT_URL_COMPANY}/search/${name}`);
      return {
        type: SearchBarNameCompany,
        payload: request
      }
}

// Data collected from the filter button option.

export const GetResultsFromFilterButtons = 'GetResultsFromFilterButtons';
export function getResultsFromFilterButtons (data) {
  const request = axios.post(`${ROOT_URL}/filters/`, data);
  return {
    type: GetResultsFromFilterButtons,
    payload: request
  }
}
export const GetResultsFromFilterButtonsCompany = 'GetResultsFromFilterButtonsCompany';
export function getResultsFromFilterButtonsCompany (data) {
  const request = axios.post(`${ROOT_URL_COMPANY}/filters/`, data);
  return {
    type: GetResultsFromFilterButtonsCompany,
    payload: request
  }
}
