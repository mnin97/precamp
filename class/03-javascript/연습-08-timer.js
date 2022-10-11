// let time = 10
// // undefined
// setInterval(function(){
    
//   if(time >= 0) {
//   console.log(time)
//   time = time - 1
//   }
// },1000)
// 126
// VM2663:4 10
// VM2663:4 9
// VM2663:4 8
// VM2663:4 7
// VM2663:4 6
// VM2663:4 5
// VM2663:4 4
// VM2663:4 3
// VM2663:4 2
// VM2663:4 1
// VM2663:4 0
let time = 180



setInterval(function(){

  if(time >= 0) {
      let min = Math.floor(time / 60)
      let sec = String(time % 60).padStart(2, "0")
      console.log(min + ":" + sec)
      time = time - 1
  }
  
},1000)