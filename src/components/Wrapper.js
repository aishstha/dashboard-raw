import React, { Component } from 'react';
import logoCheck from '../images/caputre.PNG';
import Header from './Header';
import Sidebar from './Sidebar'
import Container from './Container';

import profilepictures from '../images/profilepictures.png';

class Wrapper extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Container />
                </div>
            </div>
        );
    }
}
export default Wrapper;