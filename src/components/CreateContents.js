import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class CreateContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:this.props.data.title,
            desc: this.props.data.desc
        }

        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <main>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e) {
                        e.preventDefault();
                        // onSubmit()은 App.js의 CreateContents 컴포넌트에 명시된 onSubmit(_title, _desc)이 실행 됨
                        this.props.onSubmit(
                            e.target.title.value, //input name title의 값을 _title로 전달
                            e.target.desc.value, //textarea name desc의 값 _desc로 전달
                            this.state.id
                        );
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <input type="text" name="title" placeholder="title"
                        value={this.state.title}
                        onChange={this.inputFormHandler}
                    >
                    </input>
                    <br />
                    <br />
                    <textarea name="desc" placeholder="description"
                        value={this.state.desc}
                        onChange={this.inputFormHandler}
                    >
                    </textarea>
                    <br />
                    <input type="submit"></input>
                    <br />
                    <br />
                </form>
            </main>
        );
    }
}


export default CreateContents;