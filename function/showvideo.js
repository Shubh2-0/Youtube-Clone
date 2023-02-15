

const show1 = () =>{

  return  async function show (){

let API_KEYS =["AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyASPLAWmjCPDRoiMtt1AHGQ0TGyRx9wTRU","AIzaSyBihnXKUmx9h6DHAlTNkrZ-6znzrz3ME1M","AIzaSyA8HVQEsyROLmeZ4P3GhKRCU2BajTnJUNc","AIzaSyAgE8JOY06kJSUxBYYXCGKhQnhx1qD8jdA"]

let num= Math.floor(Math.random()*2)
 
let API_KEY = API_KEYS[num]

let search=document.getElementById("videoname").value

let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyCGz_8bE32q4NAkjdAXjpAiigBS6z9ZASU`)

data = await data.json()

let actual_data = data.items

console.log(actual_data)

content_show(actual_data)

 }




const store =(el)=>{

localStorage.setItem("video_data",JSON.stringify(el))
window.location.href="video.html"

}

function content_show(data){ 

let parent = document.querySelector(".container")

document.querySelector(".container").innerHTML=null

for(let el of data){
let child = document.createElement("div")
child.className="video"

child.addEventListener("click",function(){
store(el)

})



child.innerHTML = `
    <img src="${el.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <div class="content">
    <img src="https://th.bing.com/th/id/OIP.Y6P1GkxkEoLoIRsS1wMZiwHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  class="channel-icon" alt="">
        <div class="info">
            <h4 class="title">${el.snippet.title}</h4>
            <p class="channel-name">${el.snippet.channelTitle}</p>
        </div>
    </div> `
 parent.append(child)

}
}


}

export  default show1 