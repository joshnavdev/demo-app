import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Books from './Books';

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/books'>Books</Link>
        </li>
        <li>
          <Link to='/invoices'>Invoices</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

const App = () => {
  const loggedIn = true;
  return (
    <Router basename='/app'>
      <div>
        {loggedIn ? <Nav /> : null}
        <Switch>
          <Route exact path='/'>
            {loggedIn ? <Home /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/books'>
            <Books />
          </Route>
          <Route exact path='/invoices'>
            <div>Invoices</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
