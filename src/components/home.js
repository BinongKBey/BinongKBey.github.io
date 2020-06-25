import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div className="heropage">
            <div className="maincontent">
                <h1>Hi,</h1>
                <h1>I'm Binong Kiri Bey.</h1>
                <p>I am a Full Stack Web Developer and Machine Learning Enthusiast. Currently, I am in the second year of my Computer Science Engineering degree.</p>
                <br />
                <h3>You can find me on:</h3>
                <div className="iconlist">
                    <a href='https://github.com/BinongKBey'>
                        <FontAwesomeIcon icon={faGithub} size='4x' className='icons' />
                    </a>
                    <a href='https://www.linkedin.com/in/binong-kiri-bey-a38723173/'>
                        <FontAwesomeIcon icon={faLinkedin} size='4x' className='icons' />
                    </a>
                </div>
            </div>
            <div className="userimage">
                <img src={require('../img/user.png')} alt="user pic" />
            </div>
        </div>
    )
}

export default Home;