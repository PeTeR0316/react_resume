import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Nav extends Component {
    render() {
        return (
            <nav id="nav">
                <ul id="skillList">
                    <li id="html" 
                        onClick={
                            function(e) {
                                this.props.onChangeSkill(e.target.id);
                            }.bind(this)
                        }
                    >
                        HTML, CSS
                    </li>
                    <li id="js" 
                        onClick={
                            function(e) {
                                this.props.onChangeSkill(e.target.id);
                            }.bind(this)
                        }
                    >
                        JS
                    </li>
                    <li id="jQuery" onClick={function(e) {this.setState({listName : "jQuery" });}.bind(this)}>
                        jQuery
                    </li>
                    <li id="vue">
                        Vue
                    </li>
                    <li id="es6">
                        ECMA 2015(ES6)
                    </li>
                    <li id="php">
                        PHP
                    </li>
                    <li id="mysql">
                        MySQL
                    </li>
                    <li id="webPlanning">
                        웹 기획
                    </li>
                </ul>
            </nav>
        );
    }
}


export default Nav;