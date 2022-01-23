import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import * as actions from '../../redux/actions/harga';

function mapStateToProps(state) {
  const { value, dataHarga, area, size } = state.harga;
  return {
    value,
    dataHarga,
    area,
    size
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
