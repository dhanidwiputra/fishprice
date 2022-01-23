const area =[{"province":"ACEH","city":"ACEH KOTA"},{"province":"BALI","city":"BULELENG"},{"province":"BANTEN","city":"PANDEGLANG"},{"province":"DKI JAKARTA","city":"KOTA TUA"},{"province":"JAWA BARAT","city":"BANDUNG"},{"province":"JAWA BARAT","city":"CIREBON"},{"province":"JAWA TENGAH","city":"PEMALANG"},{"province":"JAWA TENGAH","city":"CILACAP"},{"province":"JAWA TENGAH","city":"PURWOREJO"},{"province":"JAWA TENGAH","city":"TEGAL"},{"province":"JAWA TIMUR","city":"JEMBER"},{"province":"JAWA TIMUR","city":"BANYUWANGI"},{"province":"JAWA TIMUR","city":"SITUBONDO"},{"province":"JAWA TIMUR","city":"PROBOLINGGO"},{"province":"KALIMANTAN TIMUR","city":"BORNEO"},{"province":"LAMPUNG","city":"LAMPUNG TIMUR"},{"province":"SULAWESI BARAT","city":"MAMUJU UTARA"},{"province":"SUMATERA BARAT","city":"PADANG PARIAMAN"},{"province":"SUMATERA UTARA","city":"MEDAN"},{"province":"JAWA BARAT","city":"DEPOK"},{"province":"JAWA BARAT","city":"CIMAHI"}];
const size =[{"size":"30"},{"size":"40"},{"size":"50"},{"size":"60"},{"size":"70"},{"size":"80"},{"size":"90"},{"size":"100"},{"size":"110"},{"size":"120"},{"size":"130"},{"size":"140"},{"size":"150"},{"size":"160"},{"size":"170"},{"size":"180"},{"size":"190"},{"size":"200"}];
let ukuran = [];
let area_province = [];
let area_city = [];
size.map(itm => {
  ukuran.push({"value": itm.size, "label": itm.size});
});
area.map(itm => {
  area_province.push({"value": itm.province, "label": itm.province});
  area_city.push({"value": itm.city, "label": itm.city});
});
export default {
  "price": {
    "type": "number",
    "required": true
  },
  "size": {
    "type": "number",
    "required": true
  },
  "komoditas": {
    "type": "text",
    "required": true
  },
  "size": {
    "type": "select",
    "required": true,
    "options": ukuran
  },
  "area_provinsi": {
    "type": "select",
    "required": true,
    "options": area_province
  },
  "area_kota": {
    "type": "select",
    "required": true,
    "options": area_city
  },
  "Save": { // button submit
    "type": "submit",
  }
}