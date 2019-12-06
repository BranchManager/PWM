const firebase = require("firebase/app");
const init = require('./Myjs/MyFire')
let Crypto = require('./Myjs/keygen')
//const {BrowserWindow} = require('electron').remote

 let obj = {}
// password = salty.salt
// console.log(password)


init.myFireInit()


login = document.getElementById("login")

  firebase.auth().onAuthStateChanged(DaUserInfo =>{
      if(DaUserInfo){
        console.log('the following user is signed in')
        console.log(DaUserInfo.email)

        let ref = firebase.database().ref(DaUserInfo.uid)
        
        ref.once('value', function(snap){
            console.log(snap.val().email)
            //global.salt = snap.val().salt
            obj['salt'] = snap.val().salt
            console.log(snap.val())
            // console.log(obj)
            // console.log(JSON.stringify(obj))
            // Crypto.Write_file(JSON.stringify(obj))

            obj['pswrd']= global.passwordVal
        //changescreen()
            console.log(obj)
            console.log(JSON.stringify(obj))
            Crypto.Write_file(JSON.stringify(obj))
            
            window.location.replace('home.html')
            
            //showitall(DaUserInfo)
        },
        
        function(error){
            console.log("Error: "+error.code)
        })
      // console.log(Firstname)
        //
        
      }else{
        console.log("no one signed in")
      }
  })


const emailElm = document.getElementById('email')
const passwordElm = document.getElementById('password')
salt = passwordElm
console.log(salt)
login.addEventListener('mouseup',function(event){
    console.log("alright")
    const emailVal = emailElm.value
    console.log(`email: ${emailVal}`)
    global.passwordVal = passwordElm.value

    console.log(`password: ${passwordVal}`)


    firebase.auth().signInWithEmailAndPassword(emailVal,passwordVal).catch(function(error){
        errorCode = error.code;
        errMessage = error.message;

        console.log('err code')
        console.log(errorCode)
        console.log('errMessage')
        console.log(errMessage)
        

    }).then(function(test){

        console.log(test)
        console.log("good")
        console.log(passwordVal)
        // obj['pswrd']= global.passwordVal
        // changescreen()
        // console.log(obj)
        // console.log(JSON.stringify(obj))
        // Crypto.Write_file(JSON.stringify(obj))
            
        // window.location.replace('home.html')
        
        //module.exports = salt
    })
    console.log('testing it')
})






















