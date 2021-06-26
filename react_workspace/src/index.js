import React from 'react';
import ReactDOM from 'react-dom';

import Function from './App'


class ClassFunction extends React.Component {
  render() {
    return <div><Function/> <h1>Gopi</h1></div>
  }
}

ReactDOM.render(<ClassFunction/>,document.getElementById('root'));
