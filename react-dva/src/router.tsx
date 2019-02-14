
import dynamic from 'dva/dynamic';
import { Route,routerRedux,Switch} from 'dva/router';
import * as React from 'react';

const { ConnectedRouter } = routerRedux;





function RouterConfig({ history, app }: any) {
  const routes = [
    {
      path: '/',
      name: 'Index',
      component: () => import('./pages/Index/index'),
    },
    {
      path: '/add',
      name: 'Add',
      models: () => [import('./models/add')],
      component: () => import('./pages/Add/index'),
    }
  ]
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routes.map(({path, name, ...dynamics}: any)=>{
            console.log(...dynamics);
            return (
              <Route path={path} key={name} exact={true} component={dynamic({app, ...dynamics})} />
            )
          })
        }
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;


