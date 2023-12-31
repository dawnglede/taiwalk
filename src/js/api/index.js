import axios from 'axios'

const tdx = axios.create({
    baseURL: 'https://tdx.transportdata.tw/api/basic',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

export const getCityList = () => {
    return tdx.get('/v2/Basic/City?%24format=JSON')
}

export const getScenicSpot = (query) => {
    const {
        city = '', // '/Taipei'
        topQty = '100'
    } = query
    return tdx.get(`/v2/Tourism/ScenicSpot${city}?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${topQty}&$format=JSON`)
}

export const getRestaurant = (query) => {
    const {
        city = '',
        topQty = '100'
    } = query
    return tdx.get(`/v2/Tourism/Restaurant${city}?$filter=Picture%2FPictureUrl1%20ne%20null&$top=${topQty}&$format=JSON`)
}

export const getActivity = (query) => {
    const date = new Date().toJSON()
    const {
        city = '',
        topQty = '100'
    } = query
    return tdx.get(`/v2/Tourism/Activity${city}?$filter=date(EndTime)%20gt%20${date}&$orderby=EndTime&$top=${topQty}&$format=JSON`)
}

