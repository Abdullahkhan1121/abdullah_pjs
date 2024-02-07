setTimeout(function(){
    console.log("Hello World")
},4000)

// setInterval(function(){
//     document.write("Wow")
// },2000)

// PROMISE
let promiseOne = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("first promise")
    },2000)
})

// second promise

let promiseTwo = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({name : "Ali" , password : "12345"})
    },2000)
})
promiseTwo.then(function(user){
    console.log(user)
})

// third Promise
let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "altaf" , email : "altaf@gmail.com"})
    })
})
promiseThree.then(function(election){
    return election.email;
}).then(function(userEmail){
    console.log(userEmail)
})

// forth Promise
 let promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "sony" , password : "1121"})
        }
        else{
            reject("Error : Something Went Wrong")
        }
    },4000)
 })

 promiseFour.then(function(apple){
    return apple.name;
 }).then(function(myName){
    console.log(myName)
 }).catch(function(error){
    console.log(error)
 })

//  promise Fifth
let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({Name : "abdullah" , Email : "apc@gmail.com"})
        }
        else{
            reject("An Error has occured")
        }
    },4000)
 })

 async function consumedPromiseFive(){
    try{
        let resp = await promiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error)
    }
 }
 consumedPromiseFive()