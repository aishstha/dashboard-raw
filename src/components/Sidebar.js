import React , {Component} from 'react';
import logoCheck from '../images/logocheck.png';
import profilepictures from '../images/profilepictures.png';

class Sidebar extends Component{
    render()
    {
        return(
  <nav className="navbar navbar-inverse navbar-fixed" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                      <li className="sidebar-brand">
                        <a href="#">
                          Chill
                    </a>
                      </li>
                      <li>
                        <a href="#">Dashboard</a>
                      </li>
                      <li>
                        <a href="#">Add Project</a>
                      </li>
                      <li>
                        <a href="#">Project List</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="dropdown-header">Dropdown heading</li>
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li><a href="#">Separated link</a></li>
                          <li><a href="#">One more separated link</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="https://twitter.com/maridlcrmn">Follow me</a>
                      </li>
                    </ul>
                  </nav>




        );
    }
}
export default Sidebar;