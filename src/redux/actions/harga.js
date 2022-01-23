import {INCREMENT} from '../types/counter';
import axios from 'axios';

export function fetchData(filter_search, filter_area, filter_size) {
  return (dispatch) => {
    let link = `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list?`;
    let filter = {};
    if(filter_search !== ''){
      Object.assign(filter, {"komoditas": filter_search});
    }
    if(filter_area !== '') {
      let area = filter_area.split('-');
      Object.assign(filter, {"area_kota": area[1]});
    }
    if(filter_size !== ''){
      Object.assign(filter, {"size": filter_size});
    }

    if(filter) {
      link = link+`search=${JSON.stringify(filter)}`
    }
    axios.get(link)
      .then(response => {
        dispatch(setData(response.data));
      });
  };
}
export function addData(params, handleSuccess) {
  return (dispatch) => {
    let link = `https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/list`;
    let payload = [{
      komoditas: params.komoditas,
      price: params.price,
      size: params.size.value,
      area_provinsi: params.area_provinsi.value,
      area_kota: params.area_kota.value,
    }]
    axios.post(link, payload)
      .then(response => {
        handleSuccess();
      });
  };
}

export const increment = () => ({
  type: INCREMENT,
});
export const setData = (payload) => ({
  type: INCREMENT,
  payload
});