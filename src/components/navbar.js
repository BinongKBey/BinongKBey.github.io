import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {

    state = {
        active: false
    }

    navstyle = {
        color: 'white',
        textDecoration: 'none',
    }

    handletoggle = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return (
            <nav className="navbar" >
                <Link style={this.navstyle} to='/'>
                    <div><h1 className='brand'>BKB</h1></div>
                </Link>
                <ul className={this.state.active ? 'burgerActive' : 'nav-links'}>
                    <Link style={this.navstyle} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={this.navstyle} to='/skills'>
                        <li>Skills</li>
                    </Link>
                    <Link style={this.navstyle} to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <li><a style={this.navstyle} href="mailto:binongkbey1@gmail.com">Contact Me</a></li>

                </ul>
                <div className="burger" onClick={this.handletoggle}>
                    <div className={this.state.active ? 'line1' : 'none'}></div>
                    <div className={this.state.active ? 'line2' : 'none'}></div>
                    <div className={this.state.active ? 'line3' : 'none'}></div>
                </div>
            </nav>
        )
    }
}
export default Nav;