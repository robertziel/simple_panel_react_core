/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from 'components/Navbar/index';
import Footer from 'components/Footer/index';
import Sidebar from 'components/Sidebar/index';

import HomePage from 'containers/_pages/HomePage/Loadable';
import ProfilePage from 'containers/_pages/ProfilePage/Loadable';
import NotFoundPage from 'containers/_pages/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
