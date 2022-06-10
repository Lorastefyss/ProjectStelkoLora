const firstName = ["Lora", "Stelko"];
document.getElementById("lora").innerHTML = firstName[0];
document.getElementById("stelko").innerHTML = firstName[1];
document.getElementById("bg").volume = 0.1;

  // let date = new Date();
  // let h = date.getHours();
  // h = update(h);
  // let m = date.getMinutes();
  // m = update(m);
  // let s = date.getSeconds();
  // s = update(s);
  
  // let fullTime = `${h}:${m}:${s}`;
  
  // function update(k){
  //   if(k < 10){
  //     return '0' + k;
  //   } else {
  //     return k;
  //   }
  // }
  // document.getElementById('clock').innerHTML = fullTime;

  // function currentTime() {
  //   let date = new Date(); 
  //   let hour = date.getHours();
  //   let min = date.getMinutes();
  //   let sec = date.getSeconds();
  //   hour = updateTime(hour);
  //   min = updateTime(min);
  //   sec = updateTime(sec);
  //   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
  //   let t = setTimeout(function(){ currentTime() }, 1000);
    

  //   function updateTime(k) {
  //   if (k < 10) {
  //       return "0" + k;
  //    }
  //     else {
  //        return k;
  //    }
  //   }

  //    currentTime();


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius * 0.90
// //drawClock();
// setInterval(drawClock, 1000);
