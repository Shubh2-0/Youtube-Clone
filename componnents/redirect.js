

const jump =()=>{

return function redirect(){

    let search_term=document.getElementById("videoname").value
   
    localStorage.setItem("search_term",search_term)

    window.location.href="content.html"

}


}

export default jump 

