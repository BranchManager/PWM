//const { remote } = require('electron')
var firebase = require("firebase/app");
var init = require('./Myjs/MyFire')
var Crypto = require('./Myjs/keygen.js')
//const {BrowserWindow} = require('electron').remote
init.myFireInit()





console.log("hello")

firebase.auth().onAuthStateChanged(DaUserInfo =>{
  if(DaUserInfo){
    console.log(DaUserInfo.email)
   // console.log(Firstname)
   // setup_new_user(DaUserInfo)
    //window.location.replace('home.html')
  }else{
    console.log("WE NOT IN")
  }
})

function setup_new_user(user,storedsalt){
    console.log("we tried but nothing seems to be happeneing")
    //console.log(typeof userID)
    //console.log(userID)
    var ID = user.uid//.toString();
    var em = user.email//.toString()
    //var FN = user.FirstName//.toString();
    console.log(user.uid)
    console.log(user.email)
    //console.log(FN)
    console.log("no fn")
    

    var postData = {
  
      uid : ID,
      email: em,
     // FirstName :FN
  
    };

    firebase.database().ref(ID)
    .set(
      {
        userid: ID,
        email: em,
        salt: storedsalt}
    )
    .then(function(){
      console.log("WELP ITS WORKING")
      //console.log(refer)
      window.location.replace('home.html')
    }).catch(function(error){
      console.log("SEtting error")
    })
    
    console.log("WTF")
    
    
    return 
}



signi = document.getElementById("signi")


signi.addEventListener('click', function(){
    var email = document.getElementById('usersignin').value;
    var password = document.getElementById('passwordsignin').value; 

    console.log(email)
    console.log(password)
   

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('you have an error')
      console.log("error message")
      console.log(errorMessage)
      console.log(errorCode)
      // ...
    }).then(function(){
    /*.then((user)=>{
      console.log(user)
      setupdatabase(user)
    });*/
      firebase.auth().onAuthStateChanged(DaUserInfo =>{
        if(DaUserInfo){
          console.log(DaUserInfo.email)
        // console.log(Firstname)
          Crypto.Write_file(password)
          key = Crypto.Create_key(password)
          setup_new_user(DaUserInfo,key['Salt'])

          //window.location.replace('home.html')
        }else{
          console.log("WE NOT IN")
        }
      })
      
    })

   
    
})



    //firebase.auth().signInWithEmailAndPassword(email,password)
    //.then(
    //     function(dauser){
    //         console.log("aye bobby!")
    //     })
    // .catch(
    //     function(error) {
    //         console.log("ERROR BIH")
    //     })
    //     /*.catch(function(error) {
    //         var ec = error.code
    //         console.log("there was an error")
    //         console.log(ec)
    //         console.log(error.message)
    //     }).then((user)=>{console.log("gotemm"); console.log(user.email)})*/

    // firebase.auth().onAuthStateChanged(user =>{
    //     if(user){
    //         console.log(user.email)
    //         console.log("we in there")
    //remote.getCurrentWindow().loadURL('index.html')
    //window.open('index.html', 'home', 'nodeIntegration=no')
    

   
//window.location.href = "home.html"





  //   console.log("hello2")
    //     }else{
    //         console.log("not signed in")
    //     }
    // })

//const signin = document.getElementById('signin')
