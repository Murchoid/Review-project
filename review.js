window.onload = ()=> {
const reviewer=[
    {name:"Brenda kamau",position:"Software Developer",review:"We liked the app a lot i think it offerd good user experience",imgSrc:"photos/IMG1.jpg"},
    {name:"Michael kamau",position:"Software Engineer",review:"I think the app will help a lot of young learners out there to become better,kudos!",imgSrc:"photos/IMG2.jpg"},
    {name:"Joshua Nderitu",position:"Cyber security ",review:"I enjoyed using the app because it had a great user experience,great job!",imgSrc:"photos/IMG3.jpg"},
    {name:"Henry Irungu",position:"Junior Developer",review:"I love the way the developers have been able to style",imgSrc:"photos/IMG4.jpg"},
    {name:"Joseph Maina",position:"Software Developer",review:"I love this app!",imgSrc:"photos/IMG5.jpg"}

];

var next=document.getElementById("next");
var previous=document.getElementById("previous");
var surprise=document.getElementById("surprise");


var img=document.getElementById("photos");
var Name=document.getElementById("name");
var position=document.getElementById("position");
var reviews=document.getElementById("reviews");
var j=0;
function Next(){
 if(j < reviewer.length){
    img.src=reviewer[j].imgSrc;
    Name.innerText=reviewer[j].name;
    reviews.innerText=reviewer[j].review;
    position.innerText=reviewer[j].position;
  
    console.log(j)
 }
  ++j;
}

function Previous(){
 if(j > 0){
    img.src=reviewer[j].imgSrc;
    Name.innerText=reviewer[j].name;
    reviews.innerText=reviewer[j].review;
    position.innerText=reviewer[j].position;
                                                                                                       
   console.log(j)
 }
  --j; 
}

function Surprise(){
    var random=Math.floor(Math.random()*reviewer.length);
    img.src=reviewer[random].imgSrc;
    Name.innerText=reviewer[random].name;
    reviews.innerText=reviewer[random].review;
    position.innerText=reviewer[random].position;
    j=0;
}

next.addEventListener("click",Next);
previous.addEventListener("click",Previous);
surprise.addEventListener("click",Surprise);
}