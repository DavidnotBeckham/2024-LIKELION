import "./Main.css";
import Article from "./Article";
import bannerImage from "./images/banner-image.png";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpeg";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.jpeg";
import img10 from "./images/10.jpeg";

function Main() {
  return (
    <div className="main">
      <h2>인기 당근알바</h2>
      <div className="item-container">
        <Article
          image={img1}
          title="문흥 무인아이스크림 매장관리"
          description="단짠아이스크림 . 광주광역시 북구 문흥동"
          pay="월급 150,000"
        />
        <Article
          image={img2}
          title="오늘 6시부터 빵 생산 알바 오실분"
          description="크로플덕오리아가씨 ・ 인천광역시 서구 가좌동"
          pay="시급 9,860"
        />
        <Article
          image={img3}
          title="문흥 무인아이스크림 매장관리"
          description="단짠아이스크림 . 광주광역시 북구 문흥동"
          pay="월급 150,000"
        />
        <Article
          image={img4}
          title="오늘 6시부터 빵 생산 알바 오실분"
          description="크로플덕오리아가씨 ・ 인천광역시 서구 가좌동"
          pay="시급 9,860"
        />
        <Article
          image={img5}
          title="문흥 무인아이스크림 매장관리"
          description="단짠아이스크림 . 광주광역시 북구 문흥동"
          pay="월급 150,000"
        />
        <Article
          image={img6}
          title="오늘 6시부터 빵 생산 알바 오실분"
          description="크로플덕오리아가씨 ・ 인천광역시 서구 가좌동"
          pay="시급 9,860"
        />
        <Article
          image={img7}
          title="문흥 무인아이스크림 매장관리"
          description="단짠아이스크림 . 광주광역시 북구 문흥동"
          pay="월급 150,000"
        />
        <Article
          image={img8}
          title="오늘 6시부터 빵 생산 알바 오실분"
          description="크로플덕오리아가씨 ・ 인천광역시 서구 가좌동"
          pay="시급 9,860"
        />
        <Article
          image={img9}
          title="문흥 무인아이스크림 매장관리"
          description="단짠아이스크림 . 광주광역시 북구 문흥동"
          pay="월급 150,000"
        />
        <Article
          image={img10}
          title="오늘 6시부터 빵 생산 알바 오실분"
          description="크로플덕오리아가씨 ・ 인천광역시 서구 가좌동"
          pay="시급 9,860"
        />
      </div>
      <div className="main-banner">
        <div className="recruit">
          <img src={bannerImage} alt="banner"></img>
          <div>
            대규모 채용이 필요하다면
            <br />
            당근알바 기업용 서비스에 대해 알아보세요!
          </div>
        </div>
        <div className="buttons">
          <button className="orange-btn">7일 무료 체험</button>
          <button className="white-btn">1:1 문의</button>
        </div>
      </div>
    </div>
  );
}

export default Main;