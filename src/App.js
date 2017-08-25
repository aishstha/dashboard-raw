import React, { Component } from 'react';
import logo from './logo.svg';
import keyolologo from './images/keyolologo.PNG';
import Header from './components/Header'
import Sidebar from './components/Sidebar'



import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {

    return (
      <div className="App">
        <p className="App-intro">
          <div className="container-fluid">
           
           <Header />

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2 marg" styleName="background-color:yellow;">
                  <Sidebar />
                
                </div>
                <div className="col-sm-10 col10  " >
                  <div className="row">
     <div className="container-fluid yellow">
    
      </div>
     </div> 
                  
                  <div className="row" >
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading dark-blue">
                            <i className="fa fa-users fa-fw fa-3x">
                                <img src={keyolologo} className="img-modifiy " alt="chill-logo" />
                            </i>
                          </div>
                        </a>
                        <div className="circle-tile-content dark-blue">
                          <div className="circle-tile-description text-faded">
                            Keyolo
                                </div>
                          <div className="circle-tile-number text-faded">
                            7
                                    <span id="sparklineA"></span>
                          </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading green">
                            <i className="fa fa-money fa-fw fa-3x"></i>
                          </div>
                        </a>
                        <div className="circle-tile-content green">
                          <div className="circle-tile-description text-faded">
                            Drop Box
                                </div>
                          <div className="circle-tile-number text-faded">
                            5
                                </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading orange">
                            <i className="fa fa-bell fa-fw fa-3x"></i>
                          </div>
                        </a>
                        <div className="circle-tile-content orange">
                          <div className="circle-tile-description text-faded">
                            Facebook
                                </div>
                          <div className="circle-tile-number text-faded">
                            9 
                                </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading blue">
                            <i className="fa fa-tasks fa-fw fa-3x"></i>
                          </div>
                        </a>
                        <div className="circle-tile-content blue">
                          <div className="circle-tile-description text-faded">
                            Online Khabar
                                </div>
                          <div className="circle-tile-number text-faded">
                            10
                                    <span id="sparklineB"></span>
                          </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading red">
                            <i className="fa fa-shopping-cart fa-fw fa-3x"></i>
                          </div>
                        </a>
                        <div className="circle-tile-content red">
                          <div className="circle-tile-description text-faded">
                            Hamro Bazar
                                </div>
                          <div className="circle-tile-number text-faded">
                            24
                                    <span id="sparklineC"></span>
                          </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                      <div className="circle-tile">
                        <a href="#">
                          <div className="circle-tile-heading purple">
                            <i className="fa fa-comments fa-fw fa-3x"></i>
                          </div>
                        </a>
                        <div className="circle-tile-content purple">
                          <div className="circle-tile-description text-faded">
                            Ebay
                                </div>
                          <div className="circle-tile-number text-faded">
                            96
                                    <span id="sparklineD"></span>
                          </div>
                          <a href="#" className="circle-tile-footer">View Services <i className="fa fa-chevron-circle-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>

              </div>
            </div>
          </div>

        </p>
      </div>
      
    );
  }
}

export default App;
