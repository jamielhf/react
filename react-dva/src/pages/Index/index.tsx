import * as React from 'react';
import { connect } from 'dva';
import { Link} from 'dva/router';
import './index.css';

class Index extends React.Component<any>{
  public add() {
    this.props.dispatch({
      type: 'global/add',
    })
  }
  public continue() {
    this.props.dispatch({
      type: 'global/continue',
    })
  }
  public render() {
    console.log(this.props);
    return (
      <div className='App'>
      <div>
      <Link to='add'>go to add</Link>
      </div>
         <p>
         counter {this.props.global.counter}
         </p>
         <button onClick={ ()=>this.add() }>add</button>
         <button onClick={ ()=>this.continue() }>continue</button>
      </div>
    );
  }
}

export default connect(({ global }: any) => ({
  global,
}))(Index);