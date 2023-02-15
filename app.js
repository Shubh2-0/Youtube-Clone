
import nvbr from "./componnents/navbar.js"
document.getElementById("navbar").innerHTML =nvbr()


import filterbtn from "./componnents/filter.js"
document.getElementById("filtersdiv").innerHTML=filterbtn()







async function content_show(data){ 

document.querySelector(".container").innerHTML=null

let parent = document.querySelector(".container")



for(let el of data){
let child = document.createElement("div")
child.className="video"

child.addEventListener("click",function(){
store(el)
})

let channel_picture =  await channel(el.snippet.channelId)


child.innerHTML = `
    <img src="${el.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <div class="content">
    <img src="${channel_picture}"  class="channel-icon" alt="">
        <div class="info">
            <h4 class="title">${el.snippet.title}</h4>
            <p class="channel-name">${el.snippet.channelTitle}</p>
        </div>
    </div> `
 parent.append(child)

}
}




const store =(el)=>{

localStorage.setItem("video_data",JSON.stringify(el))
window.location.href="video.html"

}






import jump from "./componnents/redirect.js"

document.getElementById("searchbtn").addEventListener("click" , jump())









const empty=async()=>{
    let data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyBihnXKUmx9h6DHAlTNkrZ-6znzrz3ME1M`)

 data=await data.json()
 
    content_show(data.items)
}

empty()

const channel= async (channelid)=>{
    
let g= await fetch ( ` https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelid}&key=AIzaSyA8HVQEsyROLmeZ4P3GhKRCU2BajTnJUNc` )

g = await g.json()

let url = await g.items[0].snippet.thumbnails.high.url

return await  url

 }


















 
 
const change =async (el)=>{
    


   let value=el.innerHTML 

 let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=AIzaSyCGz_8bE32q4NAkjdAXjpAiigBS6z9ZASU`)
data = await data.json()

let actual_data = data.items

content_show(actual_data)
}




let arr = document.querySelectorAll("#filtersdiv>button")

for(let el of arr){

    el.addEventListener("click",function(){
        change(el)
    })


}









