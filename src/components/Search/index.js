import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class component extends Component {
  render() {
    const {title, value, onChange} = this.props;
    return (
      <div className="search_box">
        <input type="text" className="box-search" value={value} placeholder={title} onChange={(e) => onChange(e)} />
      </div>
    );
  }
}

export default component;

Component.propTypes = {
  title: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func
};