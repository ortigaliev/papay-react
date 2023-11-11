
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


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Container>
            <Link to="/">Home</Link>
            </Container>
          </li>
          <li>
           <Container>
           <Link to="/dishes">Dishes</Link>
           </Container>
          </li>
          <li>
           <Container>
           <Link to="/users">Users</Link>
           </Container>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/dishes">
          <Dishes />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
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
