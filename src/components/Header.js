// Kalian bisa menambahkan CSS di src/components/Header.css
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h6>{this.props.desc}</h6>
                <hr />
            </header>
        )
    }
}

export default Header;