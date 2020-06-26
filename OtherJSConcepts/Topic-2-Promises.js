//
// let promisetoCleanTheRoom = new Promise(function(resolve, reject){
//
//   // cleaning the room - when this is finished
//   let isClean = true;
//
//   if(isClean){
//     resolve();
//   } else {
//     reject();
//   }
//
// });
//
// promisetoCleanTheRoom.then(function(){
//
// })

const rand = () => Math.floor(Math.random()*10) + 1;

// Promise represents the eventual completion (or failure) of an ansychronous operation
// and its resulting value
let p1 = new Promise((resolve, reject) => {
    let x = 5;
    // resolve (x); // calling this calls then()
    // reject(x); // calling this calls the catch()

    // note - promise can only do one resolve / reject
   // if it hits resolve it goes to the then below
   // if it hits reject to goes to catch

   let num = rand();
   setTimeout(resolve, 1500, num)
})

// ex will taking the x value
p1.then((ex) => {
  console.log(ex);
  return ex * 2;
}).then((x) => {
    console.log(x);
}).catch((exx) => {
  // runs if reject is called (OR) if an error gets thrown in any of the thens
  console.log('caught', exx);
})
