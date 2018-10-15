import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import axios from 'axios';

class Home extends Component {
  render() {
    return <div>This is react component - HOME </div>;
  }
}

export default hot(module)(Home);
