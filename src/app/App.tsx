
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react'
import '../css/App.css';
import '../css/navbar.css';
import './css/index.css';
import { Box, Stack, Button} from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';


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
import { NavbarHome } from './components/header/index';
import { NavbarRestaurants } from './components/header/restaurants';
import { NavbarOthers } from './components/header/others';



function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;


  return (
    <Router>

      {main_path == '/' ? (<NavbarHome setPath={setPath} />) : main_path.includes('/restaurants') ? (<NavbarRestaurants setPath={setPath} />) : (<NavbarOthers setPath={setPath} />)
      }


      {/* <nav>
        <ul>
          <li> <Link to="/restaurant">RestaurantPage</Link></li>
          <li> <Link to="/comunity">ComunityPage</Link></li>
          <li> <Link to="/orders">OrdersPage</Link></li>
          <li> <Link to="/member-page">MemberPage</Link></li>
          <li> <Link to="/help">HelpPage</Link></li>
          <li> <Link to="/login">LoginPage</Link></li>
          <li> <Link to="/">Home</Link></li>

        </ul>
      </nav> */}

        <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
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
  </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
