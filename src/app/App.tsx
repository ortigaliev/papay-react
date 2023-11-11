
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../css/App.css';
import { Box, Stack, Button} from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import Dishes from '../app/components/dishes';
import Users from '../app/components/users';

/* REACT ROUTER DOM */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { MemberPage } from './screens/MemberPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li> <Link to="/restaurant">RestaurantPage</Link></li>
          <li> <Link to="/comunity">ComunityPage</Link></li>
          <li> <Link to="/orders">OrdersPage</Link></li>
          <li> <Link to="/member-page">MemberPage</Link></li>
          <li> <Link to="/help">HelpPage</Link></li>
          <li> <Link to="/login">LoginPage</Link></li>
          <li> <Link to="/">Home</Link></li>

        </ul>
      </nav>

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/comunity">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
