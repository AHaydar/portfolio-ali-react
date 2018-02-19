import React from 'react';
import '../App.css';
import Signature from './signature';
import BlockButton from './block_button';

const BioSection = (props) => {
    return (
        <div className="bio">
            <div>
                <p>Hi there! I'm Ali Haydar, Software Tester and Quality enabler. 
                    I have over 9 years of experience 
                    in the software industry. I am detail-oriented and solution driven.</p>
                <p>I try to find bugs, but I prefer to prevent them. 
                    I sometimes code and I like it. 
                    My work usually involves testing (manual and automated),
                    setting up QA strategies and processes, 
                    participating in the software architecture and 
                    helping in the integration and deployment.
                </p>
                <p>The main goal is to deliver high quality products.
                    This involves people, processes, and code.
                    I keep myself motivated by learning new things, 
                    and I enjoy providing support and guidance to the team.
                    In my free time I do yoga, browse the internet or watch TV series.
                </p>
                <br/>
                <Signature name="Ali Haydar"/>
            </div>
            <BlockButton name="DOWNLOAD MY RESUME" url={require("../documents/Ali_Haydar_resume.pdf")} target="_blank"/>
        </div>
    );
}

export default BioSection;