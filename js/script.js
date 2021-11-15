function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
        let AppID = '';
        let AppKey = '';
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }


//取得觀光景點資料
const getScenicSpot = async() => {
    try{
        const response = await fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null&$top=500&$format=JSON'/*, { headers: getAuthorizationHeader() }*/); 
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log(jsonResponse)
            getSpotInfo(jsonResponse);
            slider(jsonResponse);
        }
    } catch(error) {
        console.log(error);
    }

}


//取得景點圖片、名稱和地址
function getSpotInfo(data) {
    let id = [];
  
    for (let i = 0; i < 4 ; i++) {
      
        const random = Math.floor(Math.random() * data.length);
      
        if( id[i-1] !== data[random].ID) {
        id.push(data[random].ID);
          
        let newCard = document.createElement("div");
        newCard.className = "card";
        let createCard = document.getElementById("attraction-card").appendChild(newCard);
        let newCardInfo = `
          <a href="#">
          <div class="img-card">
            <img src="${data[random].Picture.PictureUrl1}">
          </div>  
          <p class="img-title spot-name">${data[random].Name.length < 11 ? data[random].Name : data[random].Name.slice(0, 11) + "..." }</p>
          <p class="img-location">
            <img src="./src/images/icon/Vector.png">
            ${data[random].Address.slice(0,3)}
          </p>
          </a>
        `;
         newCard.innerHTML = newCardInfo;
        }
    }
    //console.log(id);
}

//取得活動資料
const getActivity = async() => {
    try{
        const response = await fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=Picture%2FPictureUrl1%20ne%20null&$format=JSON'/*, { headers: getAuthorizationHeader() }*/); 
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log(jsonResponse)
            getActivityInfo(jsonResponse);
        }
    } catch(error) {
        console.log(error);
    }

}

function getActivityInfo(data) {
  
    for (let i = 0; i < 4 ; i++) {
      
    
          
        const dateStart = new Date(data[i].StartTime);
        const dateEnd = new Date(data[i].EndTime);
          
        let newActCard = document.createElement("div");
        createCard = document.getElementById("activities-card").appendChild(newActCard);
        let newActCardInfo = `
          <img src="${data[i].Picture.PictureUrl1}" class="act-img">
          <p class="date inline">${dateStart.toLocaleDateString()}-${dateEnd.toLocaleDateString()}</p>
          <p class="act-name inline">${data[i].Name.length < 28 ? data[i].Name : data[i].Name.slice(0, 28) + "..." }</p>
          <p class="inline act-city">
            <img src="./src/images/icon/Vector.png">
            ${data[i].City}
          </p>
          <p class="inline act-detail"><a href="#">詳細介紹 ></a></p>
        `;
         newActCard.innerHTML = newActCardInfo;
    }

}




//取得餐廳資料

const getRestaurant = async() => {
    try{
        const response = await fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=Picture%2FPictureUrl1%20ne%20null&$format=JSON'/*, { headers: getAuthorizationHeader() }*/); 
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            getRestaurantInfo(jsonResponse);
        }
    } catch(error) {
        console.log(error);
    }

}

function getRestaurantInfo(data) {
    let id = [];
  
    for (let i = 0; i < 4 ; i++) {
      
        const random = Math.floor(Math.random() * data.length);
      
        if( id[i-1] !== data[random].ID) {
        id.push(data[random].ID);
          
        let newResCard = document.createElement("div");
        newResCard.className = "card";
        let createResCard = document.getElementById("restaurant-card").appendChild(newResCard);
        let newResCardInfo = `
          <a href="#">
          <div class="img-card">
            <img src="${data[random].Picture.PictureUrl1}">
          </div>  
          <p class="img-title spot-name">${data[random].Name.length < 11 ? data[random].Name : data[random].Name.slice(0, 11) + "..." }</p>
          <p class="img-location">
            <img src="./src/images/icon/Vector.png">
            ${data[random].Address.slice(0,3)}
          </p>
          </a>
        `;
         newResCard.innerHTML = newResCardInfo;
        }
    }
    console.log(id);
}

//Slider

function slider(data) {
   const random = Math.floor(Math.random() * 100);
   const bannerImage = document.getElementsByClassName('banner-img')[0];
   const bannerTitle = document.getElementsByClassName('banner-title')[0];
  
   bannerImage.style.backgroundImage = `url('${data[random].Picture.PictureUrl1}')`;
   bannerTitle.innerHTML = `
     <p>
       ${data[random].Address.slice(0,3)} | ${data[random].Name}
     </p>
   `;
  console.log(bannerTitle);
}







//implement
getScenicSpot();
getActivity();
getRestaurant();
