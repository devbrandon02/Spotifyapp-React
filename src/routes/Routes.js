import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomeApp from '../components/HomeApp';
import SearchArtist from '../components/SearchArtist';
import AlbumsArtists from '../components/AlbumsArtists';
import { NavbarUI } from '../layouts/NavbarUI'
import FooterUI from '../layouts/FooterUI';

const Routes = () => {
  return (
    <Router>
      <NavbarUI/>
      <Switch>
        <Route
          exact
          path={'/'}
          component={ HomeApp }
        />

        <Route
          exact 
          path={'/Search-artists'}
          component={ SearchArtist }
        />

        <Route
          exact 
          path={'/albums'}
          component={ AlbumsArtists }
        />

        <Redirect to={'/'}/>
      </Switch>
      
      <FooterUI/>
    </Router>
  )
}

export default Routes