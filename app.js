// let count = 0;
// document.querySelector('.fas').addEventListener('click',()=>{
//     if (count == 0) {
//         document.querySelector('#search').style.display = 'block'
//         count = 1
//     } else {
//         document.querySelector('#search').style.display = 'none';
//         count = 0
//     }
// })

// window.onscroll = () =>{
//     if(document.documentElement.scrollTop > 155){
//         document.querySelector('.navbar').classList.add('purple')
//         // document.querySelector('.navbar-brand').classList.add('bg-dark')
//         // document.querySelector('.navbar-link').classList.add('bg-dark')
//     }else{
//         document.querySelector('.navbar').classList.remove('purple')

//     }
// }
// WUC JS

window.onload = ()=>{

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      document.getElementById('days').innerHTML=days+"<span class='colon'>:</span>"
      document.getElementById('hours').innerHTML=hours+"<span class='colon'>:</span>"
      document.getElementById('min').innerHTML=minutes+"<span class='colon'>:</span>"
      document.getElementById('sec').innerHTML=seconds
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
}
// End Of WUC JS