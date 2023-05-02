import React from 'react';
import me from '../../images/me.jpg'
import './Intro.css';

function Intro() {
    return (
        <div className="Intro">
            <h3 className="IntroMe_Header">Hi, My name is Clare!<br />
                 Welcome to my Blog site 👋🏻 </h3>
            <p className="IntroMe_Para">This is me</p>
            <img src={ me } alt="me" className="Image2"/>
        </div>
     );
}

export default Intro