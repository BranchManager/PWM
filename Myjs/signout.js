var firebase = require("firebase/app");
var init = require('./Myjs/MyFire')
init.myFireInit()

signoutID = document.getElementById("signoutID")


console.log("well are we here")

//firebase.auth()

signoutID.addEventListener('click',function(){
    console.log("testing bih")
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        firebase.auth().onAuthStateChanged(DaUserInfo =>{
            if(DaUserInfo){
            console.log(DaUserInfo.email)
            // console.log(Firstname)
            //setup_new_user(DaUserInfo)
            
            }else{
                console.log("WE NOT IN")
                window.location.replace('Login.html')
            }
        })
    }).catch(function(error) {
        // An error happened.
        console.log("ERROR: did not signout user")
    });
})