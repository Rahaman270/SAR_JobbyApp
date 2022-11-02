import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import Mainrouter from './components/MainRouter'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Mainrouter exact path="/" component={Home} />
      <Mainrouter exact path="/jobs" component={Jobs} />
      <Mainrouter exact path="/jobs/:id" component={JobItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
