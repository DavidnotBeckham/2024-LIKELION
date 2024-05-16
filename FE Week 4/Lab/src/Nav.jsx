import './Nav.css'
import bannerImage from './images/header-image.png'

function Nav() {
  return (
    <div className="header-banner">
        <div className='banner-contents'>
          <div className='carrotcarrot'>
            <h1 style={{margin: 0}}>우리 동네에서 찾는<br/>당근알바</h1>
            <p>걸어서 10분 거리의<br/>동네 알바들 여기 다 있어요.</p>
            <div style={{margin: '1.5rem 0 0'}}>
              <button type='button'>공고 올리기</button>
            </div>
          </div>
          <img src={bannerImage} alt='image' className='banner-image' />
        </div>
    </div>
  )
}

export default Nav;