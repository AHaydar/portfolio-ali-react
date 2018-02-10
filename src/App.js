import React, { Component } from 'react';
import './App.css';
import PageTitle from './components/page_title';
import ProfilePicture from './components/profile_pic';
import BioSection from './components/bio_section';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <PageTitle name="&mdash; ABOUT &mdash;"/>
        </div>
        <div>
          <div className="col-sm-4 logoCol">
            <ProfilePicture name="Ali Haydar" title="QA Engineer"/>
          </div>
          <div className="col-sm-8 logoCol">
            <BioSection />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
