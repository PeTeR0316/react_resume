import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


class PersonInfo extends Component {
    render() {
        return(
            <div className="personInfo">
                <ul>
                    <li>
                        <img src="" />
                        <div>
                        <ul>
                            <li>
                                박지호
                            </li>
                            <li>
                                param0341@naver.com
                            </li>
                            <li>
                                010-2515-0341
                            </li>
                            <li>
                                <a href="https://github.com/PeTeR0316/portfolio_201116">
                                    https://github.com/PeTeR0316/portfolio_201116
                                </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PersonInfo;