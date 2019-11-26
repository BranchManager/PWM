const firebase = require("firebase/app");
const init = require('./Myjs/MyFire')
//const {BrowserWindow} = require('electron').remote
init.myFireInit()

login = document.getElementById("login")

firebase.auth().onAuthStateChanged(DaUserInfo =>{
    if(DaUserInfo){
      console.log('the following user is signed in')
      console.log(DaUserInfo.email)
     // console.log(Firstname)
      window.location.replace('home.html')
    }else{
      console.log("no one signed in")
    }
})

const emailElm = document.getElementById('email')
const passwordElm = document.getElementById('password')

login.addEventListener('mouseup',function(event){
    console.log("alright")
    const emailVal = emailElm.value
    console.log(`email: ${emailVal}`)
    const passwordVal = passwordElm.value

    console.log(`password: ${passwordVal}`)


    firebase.auth().signInWithEmailAndPassword(emailVal,passwordVal).catch(function(error){
        errorCode = error.code;
        errMessage = error.message;

        console.log('err code')
        console.log(errorCode)
        console.log('errMessage')
        console.log(errMessage)
        

    }).then(function(){
        console.log("good")
    })
    console.log('testing it')
})