import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

import reactSVG from '../assets/react.svg';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={reactSVG} alt="image" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));