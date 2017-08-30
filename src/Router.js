import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Breadcrum from './components/Breadcrum';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Addnewproject from './components/Addnewproject';


const Router = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid wrapall">
        <Header />
        <Switch>
          <Route  path="/" component={Wrapper}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default Router;