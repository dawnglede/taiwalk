import anchorIcon from '../../assets/image/anchor.svg'
import searchIcon from '../../assets/image/search.svg'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <>
      <div className='home container'>
        <section className='home__title'>
          <div className='home__title--text'>
            <div className='main-text'>
              探索<span className='underline'>台灣之美</span><br/>
              讓我們更親近這片土地
            </div>
            <div className="sub-text">
              <div className="vector-icon"><img src={anchorIcon} alt=""/></div>
              <div>台灣旅遊景點導覽 <span className="eng">Taiwan Travel Guide</span></div>
            </div>
          </div>
          <div className='home__title--input'>
            <select className="input input--select" id="spot">
              <option value="spot">探索景點</option>
              <option value="activities">節慶活動</option>
              <option value="restaurant">品嚐美食</option>
            </select>
            <input className="input input--text" type="text" placeholder="你想去哪裡？請輸入關鍵字" value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}/>
            <div className="input btn btn--search"><span className="search-icon"><img src={searchIcon}/></span>搜尋</div>
          </div>
        </section>
        <section className="home__swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide><img src="https://fakeimg.pl/1920x1080/" /></SwiperSlide>
            <SwiperSlide><img src="https://fakeimg.pl/1920x1080/" /></SwiperSlide>
            <SwiperSlide><img src="https://fakeimg.pl/1920x1080/" /></SwiperSlide>
          </Swiper>
        </section>
        <section className="home__activity content">
          <div className="title">
            <div>近期活動</div>
            <div className="link">查看更多活動</div>
          </div>
          <div className="item__list">
            <div className="item__list--item">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="date">2021/10/30 - 2021/11/13</div>
                <div className="act-name">2021日月潭花火音樂嘉年華</div>
                <div className="location">南投縣</div>
                <a className="link">詳細介紹</a>
              </div>
            </div>
            <div className="item__list--item">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="date">2021/10/30 - 2021/11/13</div>
                <div className="act-name">2021日月潭花火音樂嘉年華</div>
                <div className="location">南投縣</div>
                <a className="link">詳細介紹</a>
              </div>
            </div>
            <div className="item__list--item">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="date">2021/10/30 - 2021/11/13</div>
                <div className="act-name">2021日月潭花火音樂嘉年華</div>
                <div className="location">南投縣</div>
                <a className="link">詳細介紹</a>
              </div>
            </div>
            <div className="item__list--item">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="date">2021/10/30 - 2021/11/13</div>
                <div className="act-name">2021日月潭花火音樂嘉年華</div>
                <div className="location">南投縣</div>
                <a className="link">詳細介紹</a>
              </div>
            </div>
          </div>
        </section>
        <section className="home__spot content">
          <div className="title">
            <div>熱門打卡景點</div>
            <div className="link">查看更多景點</div>
          </div>
          <div className="card__list">
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/500x500/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
          </div>
        </section>
        <section className="restuarant content">
          <div className="title">
            <div>一再回訪美食</div>
            <div className="link">查看更多美食</div>
          </div>
          <div className="card__list">
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
            <div className="card__list--card">
              <div className="cover"><img src="https://fakeimg.pl/200x200/" /></div>
              <div className="desc">
                <div className="name">龜山島牛奶海</div>
                <div className="location">南投縣</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div>#The F2E 3rd Week01 #Breakfast</div>
      </footer>
    </>
  )
}

export default Home