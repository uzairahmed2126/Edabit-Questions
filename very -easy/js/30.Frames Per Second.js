const frames = (minutes,fps)=>{
   return minutes*fps*60 
}
console.log(frames(1, 1))
console.log(frames(10, 1))
console.log(frames(10, 25))
