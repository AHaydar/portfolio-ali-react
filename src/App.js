import React, { Component } from 'react';
import './App.css';
import PageTitle from './components/page_title';
import ProfilePicture from './components/profile_pic';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <PageTitle name="&mdash; ABOUT &mdash;"/>
        </div>
        <div>
          <div className="col-md-6 logoCol">
            <ProfilePicture name="Ali Haydar" title="Software Tester"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
