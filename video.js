




import nvbr from "./componnents/navbar.js"
document.getElementById("navbar").innerHTML=nvbr()
let child1=document.getElementById("first-child")


import filterbtn from "./componnents/filter.js"
document.getElementById("filtersdiv").innerHTML=filterbtn()




let data= JSON.parse(localStorage.getItem("video_data"))

console.log(data)
let bag = "";
let tag = data.snippet.tags;
let g =0;
for(let el of tag){
    if(g<5){
bag+="#"+el+" "
    }
    else{
        break
    }
    g++
}

let video_id = data.id.videoId || data.id

let channel_picture =  await channel(data.snippet.channelId)


child1.innerHTML=`
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`


let display_data=data.snippet




 let info_container=document.getElementById("container")


 info_container.innerHTML=`
  <div id="video_heading2">${bag}</div>
 <div id="video_heading">${display_data.title}</div>


<div id="info-section">

<div id="section-1">

<div id="channel_image">  <img src="${channel_picture}"  class="channel-icon" alt=""></div>
<div id="channel_name"><p id="chnlname">${display_data.channelTitle}</p>
    <p id="subscribers"><span>99.7k</span>subscribers</p>
</div>
<div id="sunscribbtn">
    <button>Subscribe</button>
</div>

</div>

<div id="section-2">
 <button id="like"><i class="fa-regular fa-thumbs-up"></i> Like</button>
 <button id="dislike"><i class="fa-regular fa-thumbs-down"></i></button>
<button><i class="fa-solid fa-share"></i> Share</button>
<button><i class="fa-solid fa-circle-down"></i> Download</button>
<button><i class="fa-solid fa-ellipsis"></i></button>
</div>
</div>
<div id="decription">
PUBLISH AT : ${data.snippet.publishedAt}
<br>
${display_data.description}
</div>
`
 







import jump from "./componnents/redirect.js"

document.getElementById("searchbtn").addEventListener("click" , jump())








 const show= async ()=>{

let API_KEYS =["AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyBihnXKUmx9h6DHAlTNkrZ-6znzrz3ME1M","AIzaSyA8HVQEsyROLmeZ4P3GhKRCU2BajTnJUNc","AIzaSyAgE8JOY06kJSUxBYYXCGKhQnhx1qD8jdA"]

let num= Math.floor(Math.random()*2)
 
let API_KEY = API_KEYS[num]

let search = localStorage.getItem("search_term")


let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=${API_KEY}`)

data = await data.json()

let actual_data = data.items

content_show(actual_data)

 }



show()


const change =async (el)=>{

   let value=el.innerHTML 

 let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&key=AIzaSyCGz_8bE32q4NAkjdAXjpAiigBS6z9ZASU`)
data = await data.json()

let actual_data = data.items

content_show(actual_data)
console.log(el)
}




let arr = document.querySelectorAll("#filtersdiv>button")

for(let el of arr){

    el.addEventListener("click",function(){
        change(el)
    })


}





function content_show(data){ 

let parent = document.querySelector("#append_data")

document.querySelector("#append_data").innerHTML=null

for(let el of data){

let child = document.createElement("div")

child.id="datahere"

child.addEventListener("click",function(){
store(el)
})



child.innerHTML = `
 <div id="chnl_image">
<img src="${el.snippet.thumbnails.medium.url}" alt="">
    </div>

<div id="infohere">
    <h4>${el.snippet.title}</h4>
    <p>${el.snippet.channelTitle}</p>
</div> `

 parent.append(child)

}
}


const store =(el)=>{

localStorage.setItem("video_data",JSON.stringify(el))
window.location.href="video.html"

}



const channel= async (channelid)=>{
    
let g= await fetch ( ` https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelid}&key=AIzaSyA8HVQEsyROLmeZ4P3GhKRCU2BajTnJUNc` )

g = await g.json()

let url = await g.items[0].snippet.thumbnails.high.url

return await  url

 }




// `


// let iframe = document.createElement("iframe")

// iframe.src=`https://www.youtube.com/embed/${video_id}`
// iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowfullscreen" 

// child1.append(iframe)


// ` <iframe width="560" height="315" src="https://www.youtube.com/${video_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>`
// console.log(video_id)