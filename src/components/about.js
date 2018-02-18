import React, { Component } from 'react';
import '../App.css';
import PageTitle from './page_title';
import ProfilePicture from './profile_pic';
import BioSection from './bio_section';
import NavBar from './nav-bar';

class About extends Component {
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

export default About;
