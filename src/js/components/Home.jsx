import anchorIcon from '../../assets/image/anchor.svg'
import searchIcon from '../../assets/image/search.svg'
import noImage from '../../assets/image/noimage.svg'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getScenicSpot, getRestaurant, getActivity } from '../api/index.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [scenicSpot, setScenicSpot] = useState([])
  const [restaurant, setRestaurant] = useState([])
  const [activity, setActivity] = useState()

  const getRandomNum = () => {
    const nums = []
    const randomNum = (max) => Math.floor(Math.random() * max)
    return function() {
      while(nums.length < 6) {
        const newNum = randomNum(100)
        if (nums.indexOf(newNum) === -1) {
          nums.push(newNum)
        } else {
          continue
        }
      }
      return nums
    }
  }

  const random = getRandomNum()

  const getScenicSpotData = () => {
    getScenicSpot({city: '', topQty: '100'})
      .then(res => {
        if (res.data) setScenicSpot(res.data)
      })
      .catch(err => console.log(err))
  }
  const getRestaurantData = () => {
    getRestaurant({city: '', topQty: '100'})
      .then(res => {
        if (res.data) setRestaurant(res.data)
      })
      .catch(err => console.log(err))
  }

  const getActivityData = () => {
    getActivity({city: '', topQty: '100'})
      .then(res => {
        if (res.data) setActivity(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getScenicSpotData()
    getRestaurantData()
    getActivityData()
  }, [])

  const cardTitleEllipsis = (title, length) => title.length > length ? title.slice(0, length+1) + '...' : title
  const convertDate = (date) => new Date(date).toLocaleDateString()

  const renderScenicSpot = () => {
    const data = scenicSpot?.slice(0, 4)
    return data && data?.map(data => (
      <div className="card__list--card">
        <div className="cover"><img src={data?.Picture.PictureUrl1} alt={data?.Picture.PictureDescription1}/></div>
        <div className="desc">
          <div className="name">{cardTitleEllipsis(data?.ScenicSpotName, 11)}</div>
          <div className="location">{data.Address.slice(0, 3)}</div>
        </div>
      </div>
    ))
  }
  const renderRestaurant = () => {
    const data = restaurant?.slice(0, 4)
    return data?.map(data => (
      <div className="card__list--card">
        <div className="cover"><img src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1}/></div>
        <div className="desc">
          <div className="name">{cardTitleEllipsis(data.RestaurantName, 11)}</div>
          <div className="location">{data.Address.slice(0, 3)}</div>
        </div>
      </div>
    ))
  }

  const renderActivity = () => {
    if (!activity) return
    const data = activity?.slice(0, 4)
    return data?.map(data => (
      <div className="item__list--item">
        <div className="cover"><img src={data.Picture.PictureUrl1 ?? noImage} /></div>
        <div className="desc">
          <div className="date">{convertDate(data.StartTime)} - {convertDate(data.EndTime)}</div>
          <div className="act-name">{cardTitleEllipsis(data.ActivityName, 28)}</div>
          <div className="location">{data?.City?.slice(0, 3)}</div>
          <a className="link">詳細介紹</a>
        </div>
      </div>
    ))
  }
  const renderSwiper = () => {
    const randomNum = random()
    return randomNum?.map(num => (
      <SwiperSlide>
        <img src={scenicSpot[num]?.Picture?.PictureUrl1}/>
        <div className='swiper-title'>{scenicSpot[num]?.ScenicSpotName + ' | ' + scenicSpot[num]?.Address.slice(0, 3)}</div>
      </SwiperSlide>
    ))
  }
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
          {
            scenicSpot &&
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              {renderSwiper()}
            </Swiper>
          }
        </section>
        <section className="home__activity content">
          <div className="title">
            <div>近期活動</div>
            <div className="link">查看更多活動</div>
          </div>
          <div className="item__list">
            {activity && renderActivity()}
          </div>
        </section>
        <section className="home__spot content">
          <div className="title">
            <div>熱門打卡景點</div>
            <div className="link">查看更多景點</div>
          </div>
          <div className="card__list">
            {scenicSpot && renderScenicSpot()}
          </div>
        </section>
        <section className="restuarant content">
          <div className="title">
            <div>一再回訪美食</div>
            <div className="link">查看更多美食</div>
          </div>
          <div className="card__list">
            {restaurant && renderRestaurant()}
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