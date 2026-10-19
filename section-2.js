            /* card-1 and song */

const card1 = document.getElementById("card-1");
const card1song = document.getElementById("card-1-song");


            /* card-2 and song */

const card2 = document.getElementById("card-2");
const card2song = document.getElementById("card-2-song");



             /* card-3 and song */

const card3 = document.getElementById("card-3");
const card3song = document.getElementById("card-3-song");




             /* card-4 and song */

const card4 = document.getElementById("card-4");
const card4song = document.getElementById("card-4-song");
const card4video = document.getElementById("card-4-video")




             /* card-5 and song */

const card5 = document.getElementById("card-5");
const card5song = document.getElementById("card-5-song");



             /* card-6 and song */
                    

const card6 = document.getElementById("card-6");
const card6song = document.getElementById("card-6-song");



            /* card-7 and song */
                    

const card7 = document.getElementById("card-7");
const card7song = document.getElementById("card-7-song");





            /* load all songs */


const songs = [

card1song,
card2song,
card3song,
card4song,
card5song,
card6song,
card7song
    
];



         /* playing the current son */
         
let currentSong = null;
         
      
function playSong(song) {


/* if same song was chickes */

if (currentSong === song) {

if (!song.paused) {

/* pause the playing song */
song.pause();
    
}else {

/* on clicking the passed song rest the song and play */ 
    
    song.currentTime = 0;
    song.play();
    
}

return;
    
}


/* when one song is playing other songs shuld atop */

songs.forEach(function (otherSong) {

otherSong.pause();
otherSong.currentTime = 0;
    
});

/* play the new song from the beginning */

 song.currentTime = 0;
 song.play();
 
 currentSong = song;
    
}




/* play only the  card-1-song on click of card-1 */

card1.addEventListener("click", function () {

playSong(card1song);
card1song.volume = 0.5;
    
});



/* play only the  card-2-song on click of card-2 */

card2.addEventListener("click", function () {

playSong(card2song);
card2song.volume = 0.5;
    
});



/* play only the  card-3-song on click of card-3 */

card3.addEventListener("click", function () {

playSong(card3song);
card3song.volume = 0.5;
    
});



/* play only the  card-4-song on click of card-4 */

card4.addEventListener("click", function () {

playSong(card4song);
card4video.currentTime = 0;
card4video.play();
card4song.volume = 0.5;
    
});



/* play only the  card-5-song on click of card-5 */

card5.addEventListener("click", function () {

playSong(card5song);
card5song.volume = 0.5;
    
});



/* play only the  card-6-song on click of card-6 */

card6.addEventListener("click", function () {

playSong(card6song);
card6song.volume = 1;
    
});


/* play only the  card-7-song on click of card-7 */

card7.addEventListener("click", function () {

playSong(card7song);
card7song.volume = 0.5;
    
});
