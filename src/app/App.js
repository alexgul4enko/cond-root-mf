import Router from 'common/router'
import AppAccess from 'common/session'
import routes from 'routes'


export default function App() {
  return (
    <AppAccess>
        <Router routes={routes}/>
    </AppAccess>
  )
}
