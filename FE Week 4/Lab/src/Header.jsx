import './Header.css'
import logo from './images/logo.jpeg'
import magnifier from './images/Magnifier.PNG'

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="logo">
          <img src={logo} alt='logo' style={{cursor: 'pointer'}}/>
        </div>
        <div className="navigation-bar">
          <ul>
            <li>중고거래</li>
            <li>동네업체</li>
            <li>알바</li>
            <li>부동산</li>
            <li>중고차 직거래</li>
          </ul>
        </div>

        <nav class="magnifier-button">
          <img src={magnifier} alt='magnifier-button' style={{cursor: 'pointer'}}/>
        </nav>

        <div className="search-bar">
          <input type='search' placeholder="물품이나 동네를 검색해보세요"></input>
          <button>채팅하기</button>
        </div>
      </div>
    </div>
  )
}

export default Header;