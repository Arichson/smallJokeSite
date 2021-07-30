import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'

const routes = [
  {
    Component: Home,
    key: 'Home',
    path: '/'
  }
]

export default function App () {
  return (
    <Router>
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}
