import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class index extends Component {
  render() {
    return (
      <div className="modal_container">
        <div id="open-modal" className="modal-window">
          <div>
            <p onClick={this.props.onClose} title="Close" className="modal-close">Close</p>
            <div>
              {
                this.props.children
              }
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default index;

Component.propTypes = {
  title: PropTypes.object,
  onClose: PropTypes.func
};