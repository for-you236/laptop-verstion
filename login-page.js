         /* login password seting */ 
            
const CORRECT_PASSWORd = "0013";


         /* adding pasword number */ 
         
function loginNumber(number) 
{
    const input = document.getElementById("login-password");
    
    if (input.value.length < 4) 
    {
        input.value += number;
    }
}


         /* to clear the pasword */
         
function clearLoginPassword() 
{
    
    document.getElementById("login-password").value = "";
    
} 



        /* delet the single number */ 
        
function deletLoginNumber() 
{
    
    const input = document.getElementById("login-password");
    
    input.value = input.value.slice(0, -1);
    
}



            /* check pasword */ 
            
function checkLogin() 
{
    
    const input = document.getElementById("login-password");
    
    const loginPage = document.querySelector(".login-page");
    
    
    const password = input.value;
    
    
       /* perminetley stop the song */ 
       
    songLocked = true;
    sliderSong.pause();
    sliderSong.currentTime = 0;
 
    
/* paused the vedio on click of login button and display none the vedio */

    const lyricalVideo = document.querySelector(".lyrical-video");
    
    
    lyricalVideo.pause();
    lyricalVideo.currentTime = 0;
    lyricalVideo.style.display = "none";
    
    
    
/* pasword 1 to pay the 2nd song and vedio */

        if (password === "1") 
        {
        
            input.value = "";
            
            sliderSong.volume = 0.1;
        
            sliderSong.src ="audio/login-page-song-2.mp3" ;
            lyricalVideo.src ="video/lyrical-video-2.mp4" ;
            lyricalVideo.style.display ="block" ;
            
            sliderSong.load();
            lyricalVideo.load();
            sliderSong.play();
            lyricalVideo.play();
            
            return ;
        }
    
    
    /* pasword 0 to pay the 2nd song and vedio */

        if (password === "0") 
        {
        
            input.value = "";
            
            sliderSong.volume = 0.1;
        
            sliderSong.src ="audio/login-page-song-3.mp3" ;
            lyricalVideo.src ="video/lyrical-video-3.mp4" ;
            lyricalVideo.style.display ="block" ;
            
            sliderSong.load();
            lyricalVideo.load();
            sliderSong.play();
            lyricalVideo.play();
            
            return ;
        }
        
    
    
           /* correct password */ 
           
if (input.value === CORRECT_PASSWORd) 

{
            /* hide loginpage */           
            loginPage.style.display = "none";
            
           /* unhide all login sections */
           
 document.querySelectorAll(".section-hide").forEach(function (section) 
 {
     section.classList.remove("section-hide");
 });
           
}
else
{
    
    input.value = "";
    input.placeholder = "Wrong Password"
    input.style.setProperty("--placeholder-color" , "red");
    
}
 
    
}





               /* login page song */
               
const sliderSong = document.getElementById("slider-song");

      /* ajesting the volume of the song */
      
    sliderSong.volume = 0.5;

let songLocked = false; 


const imgCards = document.querySelectorAll(".img-cards");


const lyricalVideo = document.querySelector(".lyrical-video");


imgCards.forEach(function (card)
{
    
    card.addEventListener("click", 
        function () 
    {
    
          if (songLocked === false)
          {
              sliderSong.play().catch(function (error) 
                  {
                  
                  console.log("song cold not play:", error);
                  
              });
              
              lyricalVideo.play().catch(function (error)
                   {
                  
                  console.log("vedio error: ", error);
                  
              });
          }
        
    });
});



