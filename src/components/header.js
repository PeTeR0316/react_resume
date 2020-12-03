import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <h4>준비된 프론트엔드 개발자 박지호</h4>
            </header>
        );
    }
}


export default Header;