import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class Control extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/create" 
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('create');
                        }.bind(this)}
                        >
                            CREATE
                        </a>
                    </li>
                    <li>
                        <a href="/update"
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('update');
                        }.bind(this)}
                        >
                            UPDATE
                        </a>
                    </li>
                    <li>
                        <input type="button" value="DELETE"
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangeMode('delete');
                        }.bind(this)}
                        >
                        </input>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Control;