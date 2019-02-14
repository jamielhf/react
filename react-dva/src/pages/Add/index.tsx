import * as React from 'react';
import './index.css';
import { Link } from 'dva/router';

class Index extends React.Component {
  public render() {
    return (
      <div className='App'>
          <Link to='/'>go to index</Link>
      </div>
    );
  }
}

export default Index;
