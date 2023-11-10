import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import LoadingSpinner from './components/LoadingSpinner'
import MainNavigation from './shared/Navigation/MainNavigation'
import Footer from './shared/Navigation/Footer'

import './App.css'
import 'antd/dist/antd.css'
import store from './store/store'

export enum PATHS {
  MISSIONS = '/missions',
  PLAYGROUND = '/playground',
}

const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ './pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ './pages/ErrorPage/NotFound'))
const Mission1HomePage = React.lazy(
  () => import(/* webpackChunckName: "Mission1HomePage" */ './pages/Mission1HomePage'),
)
const ReduxPlayground = React.lazy(() => import(/* webpackChunckName: "ReduxPlayground" */ './pages/ReduxPlayground'))
const SL_Example = React.lazy(() => import(/* webpackChunckName: "Example" */ './pages/YourShoppingListsHere/Example'))
const SL_VikramGoyal = React.lazy(
  () => import(/* webpackChunckName: "VikramGoyal" */ './pages/YourShoppingListsHere/VikramGoyal'),
)
const SL_Example_redux = React.lazy(
  () => import(/* webpackChunckName: "Example_redux" */ './pages/YourShoppingListsHere/Example_redux'),
)
// Add your Page here!

function App() {
  useEffect(() => {
    // To bring user to the op of the page on first render
    window.scrollTo(0, 0)
  }, [])
  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path={`${PATHS.MISSIONS}/1`} exact component={Mission1HomePage} />
      <Route path={`${PATHS.PLAYGROUND}/redux_playground`} exact component={ReduxPlayground} />
      <Route path={`${PATHS.MISSIONS}/1/Example`} exact component={SL_Example} />
      <Route path={`${PATHS.MISSIONS}/1/VikramGoyal`} exact component={SL_VikramGoyal} />
      <Route path={`${PATHS.MISSIONS}/1/Example_redux`} exact component={SL_Example_redux} />
      {/* Add your Route here! */}

      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <MainNavigation />
            {routes}
          </main>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
