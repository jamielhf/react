import * as React from 'react';
import { Link} from 'dva/router';
import './index.css';

class Index extends React.Component {
  public render() {
    return (
      <div className='App'>
         <Link to='add'>go to add</Link>
      </div>
    );
  }
}

export default Index;
