import axios from "axios";

import * as actionTypes from "./config";

export function fetchData() {
  const response = axios.get("http://pb-api.herokuapp.com/bars");

  return {
    type: actionTypes.FETCH_DATA,
    payload: response,
  };
}

export function changeSelectedBar(selectedBarIndex) {
  return {
    type: actionTypes.CHANGE_PROGRESS_BAR,
    payload: selectedBarIndex,
  };
}

export function changeBarValue(newValue) {
  return {
    type: actionTypes.CHANGE_BAR_VALUE,
    payload: newValue,
  };
}
