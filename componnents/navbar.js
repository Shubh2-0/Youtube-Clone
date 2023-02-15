


const navbar = () =>{

return `
        <!-- list icon  -->
  <div class="toggle-btn">
   <span></span>
   <span></span>
   <span></span>
  </div>

  <!-- youtube logo  -->
  <a href="index.html"> <img src="/images/logo.png" alt="" class="logo"></a>
 

  


  <!-- search box where the user search videos  -->
<div class="search-box"> 
<input type="text" class="search-bar" placeholder="search" id="videoname">
  <!-- button when the user click on these button video are appear-->
<button class="search-btn" id="searchbtn"><img src="/images/search.png" alt="" ></button>
</div> 


<!-- user info button  -->
<div class="user-options"> 
    <img src="images/video.png" class="icon" alt="">
    <img src="images/grid.png" class="icon" alt="">
    <img src="images/bell.png" class="icon" alt="">
    <div class="user-dp">
        <img src="/images/profile-pic.png" alt="">
    </div>
</div>

`


}


export default navbar