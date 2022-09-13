import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import LoadingSpinner from './components/LoadingSpinner'
import MainNavigation from './shared/Navigation/MainNavigation'
import Footer from './shared/Navigation/Footer'

import './App.css'
import 'antd/dist/antd.css'

export enum PATHS {
  MISSIONS = '/missions',
}

const LandingPage = React.lazy(() => import(/* webpackChunckName: "LandingPage" */ './pages/LandingPage'))
const NotFound = React.lazy(() => import(/* webpackChunckName: "NotFound" */ './pages/ErrorPage/NotFound'))
const Mission1HomePage = React.lazy(
  () => import(/* webpackChunckName: "Mission1HomePage" */ './pages/Mission1HomePage'),
)
const Mission1ContentPage = React.lazy(
  () => import(/* webpackChunckName: "Mission1ContentPage" */ './pages/Mission1ContentPage'),
)

function App() {
  useEffect(() => {
    // To bring user to the op of the page on first render
    window.scrollTo(0, 0)
  }, [])
  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path={`${PATHS.MISSIONS}/1`} exact component={Mission1HomePage} />
      <Route path={`${PATHS.MISSIONS}/1/:name&link=:submissionLink`} exact component={Mission1ContentPage} />
      <Route component={NotFound} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <main>
          <MainNavigation />
          {routes}
        </main>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
