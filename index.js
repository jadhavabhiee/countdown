let day = new Date("nov 10, 2021 10:00:00").getTime();
var x=setInterval(function(){


let now = new Date().getTime();
let diff = day - now ;
let days = Math.floor(diff/(1000*60*60*24));
console.log(days);
let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
console.log(hours);
let minutes=Math.floor((diff%(1000*60*60))/(1000*60));
console.log(minutes);
let seconds=Math.floor((diff%(1000*60))/ 1000);
console.log(seconds);
document.getElementById("demo").innerHTML=days+"d,"+hours+"hrs: " + minutes+"m: "+seconds+"s"
}, 1000);