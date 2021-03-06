/* eslint-disable */

import React, { useState }from 'react';
import logo from './logo.svg'; //이미지를 logo라는 이름으로 가져옴
import './App.css';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Header from './components/header';
import PersonInfo from './components/PersonInfo';
import Nav from './components/Nav';
import HtmlContents from './components/HtmlContents';
import JsContents from './components/JsContents';
import JQueryContents from './components/jQueryContents';
import VueContents from './components/VueContents';
import Es6Contents from './components/Es6Contents';
import PhpContents from './components/PhpContents';
import MysqlContents from './components/MysqlContents';
import WebPlanningContents from './components/WebPlanningContents';
import ReadContents from './components/ReadContents';
import CreateContents from './components/CreateContents';
import Control from './components/Control';
import UpdateContents from './components/UpdateContents';

class App extends Component {
    //component가 랜더링 되기 전에 props 초기화를 담당
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode : "create",
            listName : "HTML, CSS",
            selectedSkill_id : 3,
            selectSkill : "html",
            titles : {title: "Skills"},
            contents : [
                {id:1, title:"HTML, CSS", desc: "레이아웃 및 입력양식 구현"},
                {id:2, title:"JS", desc: "Javascript"},
                {id:3, title:"jQuery", desc: "jQuery"}
            ]
        }
    }

    getReadContent() {
        let i = 0;
        while(i < this.state.contents.length) {
            let data = this.state.contents[i];
            if(data.id === this.state.selectedSkill_id) {
                return data;
                break;
            }

            i += 1;
        }
    }

    getContent() {
        let _article = null;
        let _content = this.getReadContent();

        if(this.state.mode === "create") {
            _article = <CreateContents data={this.state.contents} 
                        onSubmit={function(_title, _desc) {
                        if(_title === "" || _desc === "") {
                            alert("내용을 입력하세요");
                            return 0;
                        }
                        this.max_content_id += 1;

                        //새로운 배열을 생성하여 덮어씌우는 방법(Array.from()으로 복사본 생성)
                        //*객체는 Object.assign()으로 복사본 생성
                        // let newContents = Array.from(this.state.contents);
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
        } else if(this.state.mode === "update") {
            _article = <UpdateContents
                        data={_content}
                        onSubmit={function(_title, _desc) {

                        }.bind(this)}
                        >
                        </UpdateContents>
        } else {
            _article = <ReadContents title={_content.title} desc={_content.desc}></ReadContents>
        }

        return _article;
    }

    skillContents() {
        let skillContentsComponent = null;

        if(this.state.selectSkill === "html") {
            skillContentsComponent = <HtmlContents></HtmlContents>;
        } else if(this.state.selectSkill === "js") {
            skillContentsComponent = <JsContents></JsContents>;
        } else if(this.state.selectSkill === "jQuery") {
            skillContentsComponent = <JQueryContents></JQueryContents>;
        } else if(this.state.selectSkill === "vue") {
            skillContentsComponent = <VueContents></VueContents>;
        } else if(this.state.selectSkill === "es6") {
            skillContentsComponent = <Es6Contents></Es6Contents>;
        } else if(this.state.selectSkill === "php") {
            skillContentsComponent = <PhpContents></PhpContents>;
        } else if(this.state.selectSkill === "mysql") {
            skillContentsComponent = <MysqlContents></MysqlContents>;
        } else {
            skillContentsComponent = <WebPlanningContents></WebPlanningContents>;
        }

        return skillContentsComponent;
    }

    render() {
        let _title, _desc = null;

        if(this.state.listName === "HTML, CSS") {
            _title = this.state.selectSkill.title;
            _desc = this.state.selectSkill.desc;
            // _article = <ReadContents 
            //                 data={this.state.contents}
            //                 title= {_title}
            //                 desc={_desc}
            //                 onChangePage={function(id) {
            //                     this.setState({
            //                         listName : this.state.contents[id - 1].title,
            //                         selectedSkill_id : Number(id)
            //                     })
            //                 }.bind(this)} 
            //             />;
        } 
        else if(this.state.listName === "JS") {
            _title = this.state.contents[1].title;
            _desc = this.state.contents[1].desc;
            // _article = <ReadContents 
            //                 data={this.state.contents}
            //                 title= {_title}
            //                 desc={_desc}
            //                 onChangePage={function(id) {
            //                     this.setState({
            //                         listName : this.state.contents[id - 1].title,
            //                         selectedSkill_id : Number(id)
            //                     })
            //                 }.bind(this)} 
            //             />;
        } else if(this.state.listName === "jQuery") {
            _title = this.state.contents[2].title;
            _desc = this.state.contents[2].desc;
        }


        return (
            <div className="App">
                <Header></Header>

                <PersonInfo></PersonInfo>

                <Nav onChangeSkill={
                    function(selectSkillName) {
                        this.setState({
                            selectSkill : selectSkillName
                        })
                    }.bind(this)   
                }
                ></Nav>

                <main>
                    {this.skillContents()}
                </main>
            </div>
        );
    }
}


export default App;
