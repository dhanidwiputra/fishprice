import {INCREMENT} from '../types/counter';

const initialState = {
  value: 1,
  dataHarga: [],
  area: [{"province":"ACEH","city":"ACEH KOTA"},{"province":"BALI","city":"BULELENG"},{"province":"BANTEN","city":"PANDEGLANG"},{"province":"DKI JAKARTA","city":"KOTA TUA"},{"province":"JAWA BARAT","city":"BANDUNG"},{"province":"JAWA BARAT","city":"CIREBON"},{"province":"JAWA TENGAH","city":"PEMALANG"},{"province":"JAWA TENGAH","city":"CILACAP"},{"province":"JAWA TENGAH","city":"PURWOREJO"},{"province":"JAWA TENGAH","city":"TEGAL"},{"province":"JAWA TIMUR","city":"JEMBER"},{"province":"JAWA TIMUR","city":"BANYUWANGI"},{"province":"JAWA TIMUR","city":"SITUBONDO"},{"province":"JAWA TIMUR","city":"PROBOLINGGO"},{"province":"KALIMANTAN TIMUR","city":"BORNEO"},{"province":"LAMPUNG","city":"LAMPUNG TIMUR"},{"province":"SULAWESI BARAT","city":"MAMUJU UTARA"},{"province":"SUMATERA BARAT","city":"PADANG PARIAMAN"},{"province":"SUMATERA UTARA","city":"MEDAN"},{"province":"JAWA BARAT","city":"DEPOK"},{"province":"JAWA BARAT","city":"CIMAHI"}],
  size: [{"size":"30"},{"size":"40"},{"size":"50"},{"size":"60"},{"size":"70"},{"size":"80"},{"size":"90"},{"size":"100"},{"size":"110"},{"size":"120"},{"size":"130"},{"size":"140"},{"size":"150"},{"size":"160"},{"size":"170"},{"size":"180"},{"size":"190"},{"size":"200"}]
};

function reducer(state=initialState, action){
  const { type, payload } = action;
  switch(type) {
    case INCREMENT:
      return {
        ...state,
        dataHarga: payload
      };
    default:
      return state;
  }
}

export default reducer;