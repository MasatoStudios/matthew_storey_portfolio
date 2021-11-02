

import Home from './pages/Home'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Error from './pages/Error'

import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
