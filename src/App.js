/* eslint-disable */

import React, { useState }from 'react';
import logo from './logo.svg'; //이미지를 logo라는 이름으로 가져옴
import './App.css';
import { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function App() {

  let [list, listChange] = useState(["레이아웃 및 입력양식 구현",
                                    "semantic 요소와 float, display flex, display table, display grid를 사용한 레이아웃 구현",
                                    "transform과 transition을 적용한 애니메이션 구현",
                                    "미디어 쿼리를 사용한 반응형 웹 구현"]);

  let [skillName, skillNameChange] = useState('');

  function listChangeBtn() {
    // skillNameChange(e.target.id);

    alert(changeValue);

    let changeListArray = [...list];
    changeListArray = ["연산자, 제어문 배열, 함수, 객체를 사용하여 데이터 입출력 및 처리",
                        "함수를 사용한 모듈 기술 구현",
                        "객체를 활용한 애니메이션 및 일괄처리, 수치처리 기술 구현",
                        "GET, POST 방식을 사용한 데이터 전달",
                        "정규표현식 객체를 사용한 아이디, 패스워드 및 입력 데이터 유효성 검사",
                        "제품 옵션 추가 및 수량 변경에 따른 주문 총금액 계산",
                        "날짜 관련 객체를 사용한 데이터 처리",
                        "쿠키를 사용한 데이터 활용"];

    listChange(changeListArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>준비된 프론트엔드 개발자 박지호</div>
      </div>

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
                https://github.com/PeTeR0316/portfolio_201116
                <hr />
              </li>
            </ul>
          </div>
        </li>
        </ul>
      </div>

      <div className="skills">
        <div className="skillList">
          <ul>
            <li id="html" onClick={() => skillNameChange(html)}>
              HTML, CSS
            </li>
            <li id="js" onClick={listChangeBtn}>
              JS
            </li>
            <li id="jQuery" onClick={listChangeBtn}>
              jQuery
            </li>
            <li id="vue" onClick={listChangeBtn}>
              Vue
            </li>
            <li id="es6" onClick={listChangeBtn}>
              ECMA 2015(ES6)
            </li>
            <li id="php" onClick={listChangeBtn}>
              PHP
            </li>
            <li id="mysql" onClick={listChangeBtn}>
              MySQL
            </li>
            <li id="webPlanning" onClick={listChangeBtn}>
              웹 기획
            </li>
          </ul>
        </div>

        <ul>
          <li>
            HTML, CSS
          </li>
          <li>
            {list[0]}
          </li>
          <li>
            {list[1]}
          </li>
          <li>
            {list[2]}
          </li>
          <li>
            {list[3]}
          </li>
        </ul>
      </div>

      {/* <ul>
        <li>
          HTML, CSS
          <ul>
            <li>
              {list[0]}
            </li>
            <li>
              {list[1]}
            </li>
            <li>
              {list[2]}
            </li>
            <li>
              {list[3]}
            </li>
          </ul>
        </li>
        <li>
          JS
          <ul>
            <li>
              연산자, 제어문 배열, 함수, 객체를 사용하여 데이터 입출력 및 처리
            </li>
            <li>
              함수를 사용한 모듈 기술 구현
            </li>
            <li>
              객체를 활용한 애니메이션 및 일괄처리, 수치처리 기술 구현
            </li>
            <li>
              GET, POST 방식을 사용한 데이터 전달
            </li>
            <li>
              정규표현식 객체를 사용한 아이디, 패스워드 및 입력 데이터 유효성 검사
            </li>
            <li>
              제품 옵션 추가 및 수량 변경에 따른 주문 총금액 계산
            </li>
            <li>
              날짜 관련 객체를 사용한 데이터 처리
            </li>
            <li>
              쿠키를 사용한 데이터 활용
            </li>
          </ul>
        </li>
        <li>
          jQuery
          <ul>
            <li>
              객체를 활용한 애니메이션 및 일괄처리, 수치처리 기술 구현
            </li>
            <li>
              모달레이어 팝업 구현
            </li>
            <li>
              스크롤 이벤트 활용
            </li>
            <li>
              멀티탭 기능 구현
            </li>
            <li>
              아코디언 패널 효과 구현
            </li>
          </ul>
        </li>
        <li>
          react
        </li>
        <li>
          ECMA 2015(ES6)
          <ul>
            <li>
              변수제어(let, const)
            </li>
            <li>
              Babel
            </li>
          </ul>
        </li>
        <li>
          PHP
        </li>
        <li>
          MySQL
        </li>
        <li>
          웹 기획
        </li>
      </ul> */}
      
      {/* <div className="list">
        <h3>
          {title[0]}
          <span onClick={()=>{likeChange(like + 1);}}>👍</span>
          {like}
        </h3>
        <p>2월 17일 발행</p>
        <button onClick={textBtn}>변경</button>
        <hr/>
      </div> */}

      {/* <Modal /> */}

    </div>
  );
}

//component
// function Modal() {
//   return (
//     <div className="modal">
//       <h2>제목</h2>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

export default App;
