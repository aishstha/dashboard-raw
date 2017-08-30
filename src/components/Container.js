import React, { Component } from 'react';
import Breadcrum from './Breadcrum';
import Addnewservice from './Addnewservice';
import Addnewproject from './Addnewproject';

import Projectlist from './Projectlist';
import Viewservice from './Viewservice';
import keyolologo from '../images/keyolologo.PNG';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class Container extends Component {
    render() {
        return (
            <div className="col10">
                <Breadcrum />
                <BrowserRouter>
                    <div >
                        <div >
                            <Link to="/" >Dashboard</Link>
                            <Link exact to="/addproject" className="btn btn-primary floatr">Add Project </Link>
                        </div>
                        <Switch>
                            <Route exact path="/" component={Projectlist} />
                            <Route path="/addproject" component={Addnewproject} />
                            <Route path="/viewservices" component={Viewservice} />
                            <Route path="/addservice" component={Addnewservice} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );

    }
}

export default Container;