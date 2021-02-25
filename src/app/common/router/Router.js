import { RouterConfig, Redirect, Router } from '@cranium/router'
import { CheckAccess } from '@cranium/access'
import { Suspense } from 'react'
import { createBrowserHistory } from 'history'

const configs = new RouterConfig()
configs.addInterceptor(
  function(props) {
    return props.access
      ? (
      <CheckAccess level= {props.access} fallback={props.fallback || <Redirect to={props.accessRedirectTo }/>} >{props.children}</CheckAccess>
        )
      : props.children
  }
)

configs.addInterceptor(
  function(props) {
    return props.lazy
      ? (
          <Suspense fallback="Loading...">{props.children}</Suspense>
        )
      : props.children
  }
)

const history = createBrowserHistory({
  basename: '/u',
})

export default function AppRouter({ routes }) {
  return (
    <Router routes={routes} notFountUrl="404" configs={configs} history={history}/>
  )
}
