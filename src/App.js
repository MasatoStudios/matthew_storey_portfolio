

import Home from './pages/Home'
import Work from './pages/Work'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error from './pages/Error'

import './App.css';
import { Route, Switch } from 'react-router';
import UniSite from './pages/UniSite'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/work" exact component={Work}></Route>
        <Route path="/work/portfolio" exact component={Portfolio}></Route>
        <Route path="/work/uni-site" exact component={UniSite}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
