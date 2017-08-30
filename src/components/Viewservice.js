import React, { Component } from 'react';
import logoCheck from '../images/caputre.PNG';
import profilepictures from '../images/profilepictures.png';

class Viewservice extends Component {
    render() {
        return (
            <div className="row yellow" >
                <div class="container">
                    <h2>List Group With Linked Items</h2>
                    {/* <div class="list-group">
                        <a href="#" class="list-group-item">First item</a>
                        <a href="#" class="list-group-item">Second item</a>
                        <a href="#" class="list-group-item">Third item</a>
                    </div> */}
                      <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>

                </div>
            </div>
        );
    }
}
export default Viewservice;