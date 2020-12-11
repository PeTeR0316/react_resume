/* eslint-disable */

import React, { useState }from 'react';
import logo from './logo.svg'; //이미지를 logo라는 이름으로 가져옴
import './App.css';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Header from './components/header';
import PersonInfo from './components/PersonInfo';
import SkillList from './components/skillList';
import ReadContents from './components/ReadContents';
import CreateContents from './components/CreateContents';
import Control from './components/Control';



// function App() {
//     function Welcome(props) {
//         return <h1>Hello, {props.name}</h1>;
//     }

//     let [test, testChange] = useState("");

//     function clickEvent(props) {
//         // testChange = props.id;

//         alert(testChange);
//     }

//     return (
//         <div className="App">
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//             <p id="html" onClick={clickEvent}>html</p>

//         </div>
//     );
// }

class App extends Component {
    //component가 랜더링 되기 전에 props 초기화를 담당
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode : "create",
            listName : "HTML, CSS",
            selectedSkill_id : 3,
            selectSkill : {title: "HTML, CSS", desc:"HTML, CSS"},
            titles : {title: "Skills"},
            contents : [
                {id:1, title:"HTML, CSS", desc: "레이아웃 및 입력양식 구현"},
                {id:2, title:"JS", desc: "Javascript"},
                {id:3, title:"jQuery", desc: "jQuery"}
            ]
        }
    }

    render() {
        let _title, _desc = null;
        let _article = null;

        if(this.state.listName === "HTML, CSS") {
            _title = this.state.selectSkill.title;
            _desc = this.state.selectSkill.desc;
            _article = <ReadContents 
                            data={this.state.contents}
                            title= {_title}
                            desc={_desc}
                            onChangePage={function(id) {
                                this.setState({
                                    listName : this.state.contents[id - 1].title,
                                    selectedSkill_id : Number(id)
                                })
                            }.bind(this)} 
                        />;
            // let i = 0;
            // while(i < this.state.contents.length) {
            //     let data = this.state.contents[i];

            //     if(data.id === this.state.selectedSkill_id) {
            //         _title = data.title;
            //         _desc = data.desc;
            //         break
            //     }

            //     i += 1;
            // }
        } 
        else if(this.state.listName === "JS") {
            _title = this.state.contents[1].title;
            _desc = this.state.contents[1].desc;
            _article = <ReadContents 
                            data={this.state.contents}
                            title= {_title}
                            desc={_desc}
                            onChangePage={function(id) {
                                this.setState({
                                    listName : this.state.contents[id - 1].title,
                                    selectedSkill_id : Number(id)
                                })
                            }.bind(this)} 
                        />;
        } else if(this.state.listName === "jQuery") {
            _title = this.state.contents[2].title;
            _desc = this.state.contents[2].desc;
        }

        if(this.state.mode === "create") {
            _article = <CreateContents onSubmit={function(_title, _desc) {
                        if(_title === "" || _desc === "") {
                            alert("내용을 입력하세요");
                            return 0;
                        }
                        this.max_content_id += 1;

                        //새로운 배열을 생성하여 덮어씌우는 방법(Array.from()으로 복사)
                        //*객체는 Object.assign()으로 복사
                        // var newContents = Array.from(this.state.contents);
                        // newContents.push({
                        //     id: this.max_content_id,
                        //     title: _title,
                        //     desc: _desc
                        // });

                        let _contents = this.state.contents.concat ({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc
                        });

                        this.setState({
                            contents: _contents
                        });
                        }.bind(this)}></CreateContents>
        }


        return (
            <div className="App">
                <Header />

                <PersonInfo />

                {/* <SkillList title={this.state.titles.title} /> */}
                <nav id="nav">
                    <ul id="skillList">
                        <li id="html" onClick={function(e) {this.setState({listName : "HTML, CSS" });}.bind(this)}>
                            HTML, CSS
                        </li>
                        <li id="js" onClick={function(e) {this.setState({listName : "JS" });}.bind(this)}>
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


                {/* <ReadContents 
                    data={this.state.contents}
                    title= {_title}
                    desc={_desc}
                    onChangePage={function(id) {
                        this.setState({
                            listName : this.state.contents[id - 1].title,
                            selectedSkill_id : Number(id)
                        })
                    }.bind(this)} 
                /> */}
                {_article}

                <Control
                    onChangeMode={function(_mode) {
                        this.setState({
                            mode: _mode
                        })
                    }.bind(this)}
                >

                </Control>

                {/* <ReadContents 
                        data={this.state.contents}
                        title= {_title}
                        desc={_desc}
                        onChangePage={function(id) {
                            this.setState({
                                listName : this.state.contents[id - 1].title,
                                selectedSkill_id : Number(id)
                            })
                        }.bind(this)} 
                    /> */}

                    {/* {this.getContent()}

                    <Control
                        onChangeMode={function(_mode) {
                            if(_mode === "delete") {
                                if(window.confirm("삭제하시겠습니까?")) {
                                    let i = 0;
                                    let _contents = Array.from(this.state.contents)
                                    while(i < this.state.contents.length) {
                                        if(_contents[i].id === this.state.selectedSkill_id) {
                                            _contents.splice(i,1);
                                            break;
                                        }

                                        i += 1
                                    }
                                }
                            } else {
                                this.setState({
                                    mode: "read",
                                    contents: _contents
                                })
                            }
                        }.bind(this)}
                    >

                    </Control> */}
            </div>
        );
    }
}


export default App;
