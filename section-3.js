function addNumber(number)
{
    const password = document.getElementById("password");

    if(password.value.length < 4)
    {
        password.value += number;
    }
}


function clearPassword()
{
    document.getElementById("password").value = "";
}


function deleteNumber()
{
    const password = document.getElementById("password");

    password.value = password.value.slice(0, -1);
}


function login()
{
    const password = document.getElementById("password").value;
    const message = document.getElementById("password-message");
    const image = document.querySelector(".section_3 .letter-box .letter ");
    const letter = document.querySelector(".section_3 .letter-box");    
    const section3color = document.querySelector(".section_3");
    

    if(
        password.length === 4 &&
        password[0] === "0" &&
        password[1] === "1" &&
        password[2] === "1" &&
        password[3] === "0" 
    )
    {
        document.getElementById("password-box").style.display = "none";

        image.style.display = "block"; 
        section3color.style.background = "white";

        letter.scrollLeft = letter.scrollWidth;
    }
    else
    {
        message.textContent = "Wrong password!";
        document.getElementById("password").value = "";
    }
}












const lyricRadio = document.getElementById("lyric-radio");

const lyricSong = document.getElementById("lyric-song");

const lyrics = document.querySelectorAll(".lyric .t");

let playing = false;
let restartNext = false;


lyricRadio.addEventListener("click", () => 
{
    
    /* click 1 play */ 
    if (!playing && !restartNext) 
    {
        lyricSong.play();
        
        lyrics.forEach(word => 
        {
            word.style.animation = "";
        });
        
        lyricSong.play();
        playing = true;
    }
    
    
    /* click 2 pause */
    else if (playing) 
    {
        lyricSong.pause();
        playing = false;
        restartNext = true;
    }
    
    /* click 3 restart */
    else
    {
    
        lyricSong.pause();
        lyricSong.currentTime = 0;
        
        lyrics.forEach(word => 
            {
                word.style.animation = "none";
            });
            
            void document.querySelector(".lyric").offsetWidth;
            
            lyrics.forEach(word => 
                {
                   word.style.animation = "";
                });
                
                lyricSong.play();
                
                playing = true;
                restartNext = false;
    }
    
});