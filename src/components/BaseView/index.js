import React, { Component } from 'react';
import Header from '../Header';
import ListHarga from '../../pages/ListHarga';

class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListHarga />
      </div>
    );
  }
}

export default index;