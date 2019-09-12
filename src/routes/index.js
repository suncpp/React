import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AllComponents from '../components/index'
import routesConfig from './config';


export default class CRouter extends Component {
  render() {
    return (
      <Switch>
      {Object.keys(routesConfig).map(key =>
        routesConfig[key].map(r => {
            const route = r => {
                const Component = AllComponents[r.component];
                return (
                    <Route
                        key={r.route || r.key}
                        exact
                        path={r.route || r.key}
                        render={() =>{
                          return  <Component />;
                        }}
                    />
                );
            };
            return r.component ? route(r) : '';
        })
    )}
    </Switch>
    )
  }
}
