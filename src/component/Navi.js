import React, { useState } from 'react';
import logo from '../logo.svg';
import navicss from '../css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
// npm i react-router-dom
// npm install react-bootstrap bootstra
// npm i react-scrollspy

 function Navi() {
    const [ colorMode, updataColor ] = useState(true);
    const [ activenum , naviUpdate ] = useState(-1);
    //하나의 번호만 가지게 되는 랜더링변수

   const naviActive = (e) => {                  
        const navinodes = [...e.target.parentElement.parentElement.children];
        //li들을 담아라
        //index 번호 색출하기위함
        console.log(navinodes.length);
        //li총개수

        const index = navinodes.indexOf(e.target.parentElement);// 타겟 li
        console.log(index); // 그 li의 번호

        naviUpdate(index);
   }
        


  return (
    <div className={  colorMode ? 'lightmode fixed-top' : 'darkmode fixed-top' }>
        <div className={`${navicss.hd} 
                          border-bottom 
                        py-3 px-4 
        d-flex justify-content-between align-items-center
        `}>
        <h1>
            <Link to="/">
                <img src={logo}  />
            </Link>
        </h1>
        <Scrollspy className='d-flex'>
            <li key='navi0'   className={ 'navilist' }  >
                <a href="#top"   onClick={ naviActive  } >뇌새김소개</a>
            </li>
            <li key='navi1'  className={ 'navilist' }>
                <a href='#faq' onClick={ naviActive  } >뇌새김의 학습원리</a>
            </li>
            <li key='navi2'  className={ 'navilist' }>
                <a href='#review' onClick={ naviActive  } >뇌새김의 후기</a>
            </li>
            <li key='navi3'  className={ 'navilist' }>
                <a href='#qna' onClick={ naviActive  }>문의하기</a>
            </li>         
        </Scrollspy>
            <ul id="sns" className='d-flex'>
                <li>
                    <a href="http://www.youtube.com" target="_blank">유튜브</a>
                </li>
                <li>
                    <a href="http://www.youtube.com" target="_blank">자료실</a>
                </li>
                <li>
                    <button onClick={ () =>{
                        updataColor(!colorMode)
                    }}> { colorMode ? '다크' : '라이트' }</button>
                </li>
            </ul>  

        </div>
    </div>
  )
}

export default Navi;
