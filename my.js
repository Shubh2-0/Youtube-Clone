
document.getElementById("searchbtn").addEventListener("click",show)


 async function show (){

let API_KEYS =["AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyBihnXKUmx9h6DHAlTNkrZ-6znzrz3ME1M","AIzaSyA8HVQEsyROLmeZ4P3GhKRCU2BajTnJUNc","AIzaSyAgE8JOY06kJSUxBYYXCGKhQnhx1qD8jdA"]

let num= Math.floor(Math.random()*3)
 
let API_KEY = API_KEYS[num]

let search=document.getElementById("videoname").value

let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=${API_KEY}`)

data = await data.json()

console.log(data)

}

https://www.googleapis.com/youtube/v3/channels?&


const ghy = async  (data)=> {
  


}






// empty()




// function empty(){

// let api_key="AIzaSyCGz_8bE32q4NAkjdAXjpAiigBS6z9ZASU";
// let channel_http="https://www.googleapis.com/youtube/v3/channels?&"


// async function empty(){

// let contebt= await fetch(`https://www.googleapis.com/youtube/v3/videos?&key=${api_key}&part=snippet&chart=mostPopular&maxResults=50&regionCode=IN`)

// let d= await contebt.json()
 
// console.log(d)

// // getChannelIcon(d.items)
// }




// // const getChannelIcon = (video_data) => {
// // fetch(channel_http + new URLSearchParams({
// //   key: api_key,
// //   part: "snippet",
// //   id: video_data.snippet.channelId
// // }))
// // .then(res => res.json())
// // .then(data => {
// //     video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url
// //     videosicon(video_data)
// // })
// // }
// // }





// const videosicon = (data) => {
    
// for(let el of data){

// let child=document.createElement("div")
// child.className="video"

// child.innerHTML=`
//  <img src="${el.snippet.thumbnails.high.url}" class="thumbnail" alt="">
//     <div class="content">
//         <img src="${el.channelThumbnail}"  class="channel-icon" alt="">
//         <div class="info">
//             <h4 class="title">${el.snippet.title}</h4>
//             <p class="channel-name">${el.snippet.channelTitle}</p>
//         </div>
//     </div>
// `

// parent.append(child)
// }
// }




