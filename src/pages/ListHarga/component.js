import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import SearchBox from '../../components/Search';
import Modal from '../../components/Modal';
import JsonToForm from 'json-reactform';
import model from './schema';
import 'bootstrap/dist/css/bootstrap.min.css';

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

class component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_search: "",
      filter_area: "",
      filter_ukuran: "",
      modal_filter: false,
      modal_add: false
    }
  }
  componentDidMount(){
    this._fetchDataTable();
  }

  _fetchDataTable = () => {
    const {filter_search, filter_ukuran, filter_area} = this.state;
    this.props.actions.fetchData(filter_search, filter_area, filter_ukuran);
  }
  _renderListData = () => {
    const {dataHarga} = this.props;
    return dataHarga?.map((item, idx) => {
      return(
        <tr>
          <td>{item.area_kota}</td>
          <td>{item.area_provinsi}</td>
          <td>{item.komoditas}</td>
          <td>{item.price}</td>
          <td>{item.size}</td>
        </tr>
      );
    })
  }
  _changeSearch = (e) => {
    this.setState({
      filter_search: e.target.value
    });
    this._handleFetchSearch(e.target.value);
  }

  _handleFetchSearch = debounce(() => {
    this._fetchDataTable();
  }, 900);

  _handleSaveFilter = () => {
    this._fetchDataTable();
    this.setState({
      modal_filter: false
    });
  }

  _handleCloseModalFilter = () => {
    this.setState({
      modal_filter: false
    });
  }
  _handleCloseModalAdd = () => {
    this.setState({
      modal_add: false
    });
  }

  _renderFilter = () => {
    const {area, size} = this.props;
    return(
      <Modal onClose={this._handleCloseModalFilter}>
        <h1>Filter</h1>
        <div>
          <label htmlFor="area">Area</label>
          <select id="area" name="area" className="dropdown" value={this.state.filter_area}
            onChange={(e) => {this.setState({filter_area: e.target.value})}}>
            <option value="">Pilih Area</option>
            {
              area?.map((item, idx) => {
                return (
                  <option key={idx}>{`${item.province}-${item.city}`}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <label htmlFor="ukuran">Ukuran</label>
          <select id="ukuran" name="ukuran" className="dropdown" value={this.state.filter_ukuran}
            onChange={(e) => {this.setState({filter_ukuran: e.target.value})}}>
            <option value="">Pilih Ukuran</option>
            {
              size?.map((item, idx) => {
                return (
                  <option key={idx}>{item.size}</option>
                )
              })
            }
          </select>
        </div>
        <button className="button_simpan" onClick={this._handleSaveFilter}>Simpan</button>
      </Modal>
    );
  }
  _renderAdd = () => {
    const {area, size} = this.props;
    return(
      <Modal onClose={this._handleCloseModalAdd}>
        <h1>Tambahkan Data</h1>
        <JsonToForm model={model} onSubmit={this._handleSubmit}/>
      </Modal>
    );
  }

  _deleteChip = (type) => {
    if(type==="area"){
      this.setState({
        filter_area: ""
      }, this._fetchDataTable());
    }else{
      this.setState({
        filter_ukuran: ""
      }, this._fetchDataTable());
    }
  }
  _renderChip = (title, type) => {
    return (
      <div className="chip">
        <div className="chip-content">{title}</div>
        <div className="chip-close">
            <svg className="chip-svg" onClick={() => {this._deleteChip(type)}}
              focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
        </div>
      </div>
    )
  }

  _handleSubmit = (params) => {
    this.props.actions.addData(params, this._handleSuccess);
  }

  _handleSuccess = () => {
    this.setState({
      modal_add: false
    });
    this._fetchDataTable();
  }

  render() {
    const {filter_search, filter_area, filter_ukuran} = this.state;
    return (
      <div className="container_page">
        {/* <button onClick={this.props.actions.fetchData}>tambah</button> */}
        <div className="filter_wrapper">
          <div className="search_container">
            <SearchBox title="Cari Komoditas..." value={filter_search} onChange={this._changeSearch} />
          </div>
          <div className="filter_container">
            <div className="button button--filter" onClick={()=>{this.setState({modal_filter: true})}}>Filter</div>
            <div className="button button--tambah" onClick={()=>{this.setState({modal_add: true})}}>Tambah</div>
          </div>
        </div>
        <div>
          {filter_area !== "" && this._renderChip(filter_area, "area")}
          {filter_ukuran !== "" && this._renderChip(filter_ukuran, "ukuran")}
        </div>
        <div className="table_container">
          <table className="table1">
            <thead>
              <tr>
                <th>Kota</th>
                <th>Provinsi</th>
                <th>Komoditas</th>
                <th>Harga</th>
                <th>Ukuran</th>
              </tr>
            </thead>
            <tbody>
              {this._renderListData()}
            </tbody>
          </table>
        </div>
        {
          this.state.modal_filter && this._renderFilter()
        }
        {
          this.state.modal_add && this._renderAdd()
        }
      </div>
    );
  }
}

export default component;

Component.propTypes = {
  actions: PropTypes.object,
  area: PropTypes.object,
  dataHarga: PropTypes.object,
  size: PropTypes.object,
  value: PropTypes.number
};