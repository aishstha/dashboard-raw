import React , {Component} from 'react';
import logoCheck from '../images/logocheck.png';
import profilepictures from '../images/profilepictures.png';

class Header extends Component{
    render()
    {
        return(
 <nav className="navbar navbar-default navbar-custom nomargin">
              <div className="container-fluid">
                <div className="navbar-header ">
                  <a className="navbar-brand nopadding" href="#">
                    <img src={logoCheck} className="img-modifiy " alt="chill-logo" />
                  </a>
                </div>
                <div className="profile">
                  <div className="profile-img">

                    <a className="navbar-brand" href="#">
                      <img src={profilepictures} className="img-modifiy fright" alt="individual-pofile-image" />
                    </a>
                  </div>
                  <span className="profile-info">Aishwarya Shrestha</span>
                </div>
              </div>
            </nav>




        );
    }
}
export default Header;