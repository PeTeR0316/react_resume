import React, { useState }from 'react';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class ReadContents extends Component {
    shouldComponentUpdate(newProps, newState) {
        //newProps.data 바뀐 후의 데이터
        //this.props.data 바꾸기 전의 데이터
        //둘의 값을 비교하여 새로 랜덩링이 되는 영역과 그렇지 않은 영역을 구분하여
        //부분적으로 렌더링을 하므로써 성능저하 방지 
        
        //console.log(newProps.data + this.props.data);

        if(this.props.data === newProps.data) {
            return false;
        }
        return true; //true면 render() 호출 false면 render() 호출하지 않음
    }

    render() {
        let lists = [];
        let data = this.props.data
        let first = 0;
        
        while(first < data.length) {
            lists.push(
                <li key={data[first].id}
                    data-id={data[first].id}
                    onClick={function(e) {
                    this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                    >
                    {/* Contents 컴포넌트로부터 this.props로 전달받은 onchangePage 함수를 실행  */}
                    {/* <a 
                        href={"/lists/" + data[first].id} 
                        onClick={function(e) {
                            e.preventDefault();
                            this.props.onChangePage();
                        }.bind(this)}
                    >
                        {data[first].desc} 
                    </a> */}
                    {data[first].desc}
                </li>
            );

            first += 1;
        }

        return (
            <main>
                <h4>{this.props.title}</h4>
                <h4>{this.props.desc}</h4>
                <ul>
                    {lists}
                </ul>
                <hr></hr>
                <br></br>
            </main>
        );
    }
}


export default ReadContents;