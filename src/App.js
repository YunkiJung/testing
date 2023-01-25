import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TestComponent from './componets/TestComponent';

//jsx
function App() {
  // 2022-01-07
  // April/02/22

  //state
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  const arr = [1, 5];

  //deep copy 2016
  const [first, second] = [...arr];
  const third = 3;

  const event = new Date();

  //console.log(event.toString());

  //react hook
  const [timer, setTimer] = useState(event.toString());

  var myfunc = () => {
    
      setInterval(function() {
        
          setTimer(new Date().toString());
        
      }, 1000);
    
  }

  //react hook
  // []일때 처음 컴포넌트가 생성되고 나서 단 한번 실행
  useEffect(()=>{
    myfunc();
  }, [])

  // [count]일때 처음 컴포넌트가 생성되고 나서 한번 실행, 그리고 count state가 변경되서 컴포넌트가 재랜더링 될때마다 실행
  useEffect(()=>{
    console.log('count 변경 됬습니다.');
  }, [count, toggle])


  return (
    <div className="App">
      {
        toggle ? 
        <div>
          <h2>Timer {timer}</h2>
          <h1>{count}</h1>
          <ChildComponent />
          <TestComponent />
          <div>ssksjdkfnaosdknfoaksndf</div>
          <button onClick={()=>{setCount(count + 1); }}>up</button>
        </div> : <div>asdfoasfjhaidjfbiasdbfiasjbdifjasdbfijabsdfoff</div>
      }
      {/* <h1>React project.</h1> */}
      <button onClick={()=>{setToggle(!toggle)}} >Toggle</button>

      
    <div class="header">
      <div class="header__inner">
        <div class="logo">
          <img class="logo" src="img/logo.png" />
        </div>
        <div class="search">
          <input type="search_space" placeholder="" aria-label="Search" />
          <i class="bi bi-search"></i>
        </div>
        <div class="link">
          <a href="/#"><span class="word">네이버를 시작페이지로</span></a>
          <a href="/#"><span class="word">쥬니버네이버</span></a>
          <a href="/#"><span class="word">해피빈</span></a>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li><a class="nav_green" href="/">메일</a></li>
        <li><a class="nav_green"  href="/">카페</a></li>
        <li><a class="nav_green"  href="/">블로그</a></li>
        <li><a class="nav_green" href="/">지식iN</a></li>
        <li><a class="nav_green" href="/">쇼핑</a></li>
        <li><a class="nav_green"  href="/">Pay</a></li>
        <li><a class="nav_green"  href="/">TV</a></li>
        <li><a href="/">사전</a></li>
        <li><a href="/">뉴스</a></li>
        <li><a href="/">증권</a></li>
        <li><a href="/">부동산</a></li>
        <li><a href="/">지도</a></li>
        <li><a href="/">영화</a></li>
        <li><a href="/">뮤직</a></li>
        <li><a href="/">책</a></li>
        <li><a href="/">웹툰</a></li>
        <li><a href="/">더보기</a></li>
      </ul>
    </div>
    <div class="container">
      <div class="box">
        <img class="adv" src="img/adv.png" />
      </div>
      <div class="box" id="login_box">
        <br />
        <p>네이버를 더 안전하고 편리하게 이용하세요</p>
        <div class="login">
          <a href="/#">
            <span>NAVER </span> 
          </a>로그인
        </div>
        <p id="p_tag">아이디 * 비밀번호 찾기 &nbsp;&emsp;&emsp;&emsp;&emsp;회원가입 </p> 
      </div>
       
      <div class="box">
        <div class="box3-1">
          <div class="small_news">
          <span>연합뉴스   특수본 '이태원 참사' 박희영 용산구청장 구속 
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;뉴스홈&emsp;*&emsp;연예 &emsp;&emsp;스포츠&emsp;&emsp;경제</span>
          
          </div>
         
          <div class="news_bar">
           <b>뉴스스탠드</b>  구독한 언론사 * <b>전체 언로사</b>
          </div>
        </div>
        <div class="box3-2">
          <div class="inner-box">한국경제</div>
          <div class="inner-box">국민일보</div>
          <div class="inner-box">동아일보</div>
          <div class="inner-box">일간스포츠</div>
          <div class="inner-box">한국일보</div>
          <div class="inner-box">노컷뉴스</div>
          <div class="inner-box">스포츠동아</div>
          <div class="inner-box">세계일보</div>
          <div class="inner-box">서울경제</div>
          <div class="inner-box">SBS</div>
          <div class="inner-box">MBC</div>
          <div class="inner-box">EBS</div>
          <div class="inner-box">KBS</div>
          <div class="inner-box">JTBC</div>
          <div class="inner-box">서울신문</div>
          <div class="inner-box">전기신문</div>
          <div class="inner-box">경향신문</div>
          <div class="inner-box">전자신문</div>
          <div class="inner-box">매일경제</div>
          <div class="inner-box">아이뉴스24</div>
          <div class="inner-box">스포츠서울</div>
          <div class="inner-box">ELLE</div>
          <div class="inner-box">이데일리</div>
          <div class="inner-box">데일리안</div>
        </div>
      </div>
      <div class="box">
        <div class="box4-1">
          <div class="adv_word">
            <span>증시 | 코스닥 695.2  </span>
            <button>ㅁ</button>
            <button>ㅇ</button>
          </div>
        </div>
        <div class="box4-2">
          <img class="small_adv" src="img/small_adv.png" />
        </div>
        <br/>
      </div>
      
      <div class="box">
        <div class="nav_box">
          <div class=" nav_box_word">
            <div class="nav_box_small_word1">
              <span><b>오늘 읽을만한 글 </b>주제별로 분류된 다양한 글 모음</span>
            </div>
            <div class="nav_box_small_word2">
              <span>684 개의 글</span>
            </div>
            <div class="nav_box_small_word3">관심주제 설정</div>
          </div>
          <div class="nav_box_item">엔터</div>
          <div class="nav_box_item">스포츠</div>
          <div class="nav_box_item">자동차</div>
          <div class="nav_box_item">웹툰</div>
          <div class="nav_box_item">경제</div>
          <div class="nav_box_item">추천*구독</div>
          <div class="nav_box_item">레시피</div>
          <div class="nav_box_item">리빙</div>
        </div>
      <div class="main_information">
        <div class="nav_list">전체</div>
        <div class="nav_list">인기</div>
        <div class="nav_list">게임</div>
        <div class="nav_list">건강</div>
        <div class="nav_list">어학</div>
        <div class="nav_list">육아</div>
        <div class="nav_list">과학</div>
        <div class="nav_list_last">구독 새글 보기 ></div>
      </div>
      <div class="information">
        <div class="information_image">
          <img class="info_image" src="img/image1.jpeg" />
          <a href=""> <span><br/>초등학교 교육비 후회한것과 잘한 것</span> </a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image2.jpeg"/>
          <a href=""><span><br/>'쇼미더머니11' 출연 러블리즈 출신 이수정</span> </a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image3.jpeg"/>
          <a href=""> <span><br/>한소희, '톱스타 비주얼'</span> </a>
        </div>

        <div class="information_image">
          <img class="info_image" src="img/image4.jpeg"/>
          <a href=""> <span><br/>승마살 빼는 운동 3가지</span></a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image5.jpeg"/>
        <a href=""><span><br/>베트남 자유여행 나트랑 아이리조트 머드온천 스파 투어 후기 할인 예약
          </span> </a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image6.jpeg"/>
          <a href=""> <span>
           <br/>수영덕후의 여자실내수영복 수모 추천 및&emsp;자랑 ft 빌랩</span> </a>
        </div>

        <div class="information_image">
          <img class="info_image" src="img/image7.jpeg"/>
          <a href=""> <span><br/>
            직장인 한달 단기다이어트 성공적 완료! &emsp;&emsp;일주일 일반식 다이어트 식단 마지막편</span> </a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image8.jpeg"/>
          <a href=""> <span><br/>"오늘 우리 울지 말자"…박수홍·김다예&emsp;&emsp;&emsp; 결혼식 대공개</span> </a>
        </div>
        <div class="information_image">
          <img class="info_image" src="img/image9.jpeg"/>
          <a href=""> <span><br/>
            손흥민 카타르월드컵 출전 공격수 순위&emsp;&emsp; 9위 벤제마 메시 음바페 레반도프스키</span> </a>
        </div>
        </div>
        <div class="information2">
          <div class="information_image">
            <img class="info_image" src="img/image6.jpeg"/>
            <a href=""> <span>
             <br/>수영덕후의 여자실내수영복 수모 추천 및&emsp;자랑 ft 빌랩</span> </a>
          </div>
          <div class="information_image">
            <img class="info_image" src="img/image5.jpeg"/>
          <a href=""><span><br/>베트남 자유여행 나트랑 아이리조트 머드온천 스파 투어 후기 할인 예약
            </span> </a>
          </div>
          <div class="information_image">
            <img class="info_image" src="img/image2.jpeg"/>
            <a href=""><span><br/>'쇼미더머니11' 출연 러블리즈 출신 이수정</span> </a>
          </div>
          <div class="information_image">
            <img class="info_image" src="img/image3.jpeg"/>
            <a href=""> <span><br/>한소희, '톱스타 비주얼'</span> </a>
          </div>
          <div class="information_image">
            <img class="info_image" src="img/image6.jpeg"/>
            <a href=""> <span>
             <br/>수영덕후의 여자실내수영복 수모 추천 및&emsp;자랑 ft 빌랩</span> </a>
          </div>
          <div class="information_image">
            <img class="info_image" src="img/image4.jpeg"/>
            <a href=""> <span><br/>승마살 빼는 운동 3가지</span></a>
          </div>
      </div>
    </div>
      <div class="box">
        <div class="shoppinglist">
          <div class="shopping_link">쿠팡</div>
          <div class="shopping_link">G마켓</div>
          <div class="shopping_link"> 옥션</div>  
          <div class="shopping_link">11번가</div>  
          <div class="shopping_link">SSG닷컴</div>  
          <div class="shopping_link">티몬</div>
          <div class="shopping_link">올리브영</div>   
          <div class="shopping_link">위메프</div>   
          <div class="shopping_link">GS샵</div>   
          <div class="shopping_link">온스타일</div>   
        </div>

        <div class="page">
          <div class="page-link">
            1/18
          <button>ㄴ</button>
          <button>ㅇ</button>
        </div>
        <div class="shoping_image">
          <div class="shopping_itme">
          <img class="item_image" src="img/item1.jpg" />
          <span><b>시술 소리나오는</b></span>
          <p>역대급 아이크림</p>
          </div> 
          <div class="shopping_itme">
            <img class="item_image" src="img/item2.jpg"/>
            <span><b>난방비 확 주네?</b></span>
            <p>2만원대 초특가</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item3.jpg"/>
            <span><b>고품격연말룩</b></span>
            <p>시선사로잡아</p>
            </div> 

            <div class="shopping_itme">
            <img class="item_image" src="img/item4.jpg"/>
            <span><b>24k 순금 초특가!</b></span>
            <p>금테크~35%SALE</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item5.jpg"/>
            <span><b>1만원대200셋한정</b></span>
            <p>통영생굴무침 1+1</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item6.jpg"/>
            <span><b>허리아픈 울엄마</b></span>
            <p>변기청소이제그만</p>
            </div>
            
            <div class="shopping_itme">
            <img class="item_image" src="img/item7.jpg"/>
            <span><b>예쁜라인맑은얼굴</b></span>
            <p>괄사 1+1 행사중</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item8.jpg"/>
            <span><b>연말 선물같은</b></span>
            <p>초대 90% SALE</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item9.jpg"/>
            <span><b>러블리 예뻐요!</b></span>
            <p>이번주 특가 SALE</p>
            </div>  
            
            <div class="shopping_itme">
            <img class="item_image" src="img/item10.jpg"/>
            <span><b>딱 붙이면~ 끝?</b></span>
            <p>미간 주름 패치~</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item11.jpg"/>
            <span><b>지금~56%특가</b></span>
            <p>일반or기모</p>
            </div> 
            <div class="shopping_itme">
            <img class="item_image" src="img/item12.jpg"/>
            <span>ALDO 전품목 SALE </span>
            <p>최대76% 시즌오프</p>
            </div>  
            
            <button class="shopping_button1">ㅇ</button>
            &emsp;1/18&emsp;
            <button class="shopping_button2">ㅁ</button>
        </div>
      </div>
   </div>
   </div>
  
    </div>
  );
}

function ChildComponent(){
  return (
    <>
      <h1>Child Component</h1>
    </>
  )
}


export default App;
