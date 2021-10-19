import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'
import DashBoard from './view/Dashboard'
import Home from './view/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/dashboard'>
            <DashBoard />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>{ 'Not Found' }</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
