// lib imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// app imports
import { MainLayout } from './layouts/main-layout'
import { HomeContainer } from './containers/home-container/index'
import NotFoundContainer from './containers/not-found/index'

import { store } from './store/index'

// switch between browser history or hash history
import { browserHistory } from 'react-router'
const history = syncHistoryWithStore(browserHistory, store)
// import { hashHistory } from 'react-router';
// const history = syncHistoryWithStore(hashHistory, store) as any;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={MainLayout}>
          <Route path='/' component={HomeContainer} />
          <Route path='*' component={NotFoundContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

function render() {
  return ReactDOM.render(
    <App />, document.getElementById('app-container'),
  )
}

render()

const hotModule: any = module

// Hot Module Replacement API
if (hotModule.hot) {
  hotModule.hot.accept(render)
}
