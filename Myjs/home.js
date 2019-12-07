//const firebase = require("firebase/app");
//const init = require('./Myjs/MyFire')
const Crypto = require('./Myjs/keygen')
//let salty = require('./Myjs/signin')
//salt = salty.salt
 //console.log(salt)

// import {Crypto} from './keygen.'
//console.log(Crypto)
let divs = {bill:"hello"}
global.Master_psswrd = "f"
let cache = ""
global.salt = "p"
var userID;
//init.myFireInit()
save_button = document.getElementById('save')
delete_button = document.getElementById('delete')
add_button = document.getElementById('add_account')
view_button = document.getElementById('view_window')
emailID = document.getElementById('Email')
passwordID = document.getElementById('pwd')
userID = document.getElementById('usr')
typID = document.getElementById('typ')
//let salt="l";
//module.exports.salt = "salt" 
//console.log(Crypto.pass())
firebase.auth().onAuthStateChanged(DaUserInfo =>{
    if(DaUserInfo){
      console.log('the following user is signed in')
      MPs = Crypto.Read_file()
      console.log(MPs)
      MP = JSON.parse(MPs)
      I_am_master = MP['pswrd']
      global.salt = MP['salt']
      console.log(global.salt)
      console.log(I_am_master)
      console.log(DaUserInfo.uid)
      userID = DaUserInfo.uid
      console.log(" here they are again")
      console.log(I_am_master)
      //console.log(userID)
      //console.log(userID)
     // console.log(Firstname)
      //window.location.replace('home.html')

      console.log("tesing")
      //console.log(userID)
      let ref = firebase.database().ref(userID)
      
      ref.once('value', function(snap){
          console.log(snap.val().email)
          global.salt = snap.val().salt
          console.log(snap.val())
          //showitall(DaUserInfo)
      },
      
      function(error){
          console.log("Error: "+error.code)
      })

      
      
        //if(global.salt != "p"){
            showitall(DaUserInfo,I_am_master)
       // }

        // save_button = document.getElementById('save')
        // delete_button = document.getElementById('delete')
        // add_button = document.getElementById('add_account')
        // view_button = document.getElementById('view_window')
        // emailID = document.getElementById('Email')
        // passwordID = document.getElementById('pwd')
        // userID = document.getElementById('usr')
        // typID = document.getElementById('typ')


        save_button.addEventListener('click', ()=>{

            // var email = emailID.value;
            // var password = passwordID.value; 
            // var username = userID.value;
            // var typ = typID.value; 

            emailID = document.getElementById('Email')
            passwordID = document.getElementById('pwd')
            userID = document.getElementById('usr')
            typID = document.getElementById('typ')

            var email = emailID.value;
            var password = passwordID.value; 
            var username = userID.value;
            var typ = typID.value; 

            // emailID.value = ""
            // passwordID.value = ""
            // userID.value = ""
            // typID.value = ""
            
            console.log(email)
            info_to_add = {
                Account_type: typ,
                email: email,
                password: password,
                usrname: ""

            }
            if(username != ""){
                info_to_add.usrname = username
                console.log("type object")
                console.log(info_to_add.usrname)
            }
            update_info(DaUserInfo,info_to_add,typ)
        })

        add_button.addEventListener("click", function(){
            var email = emailID.value;
            var password = passwordID.value; 
            var username = userID.value;
            var typ = typID.value; 

            // emailID.value = ""
            // passwordID.value = ""
            // userID.value = ""
            // typID.value = ""

            console.log(add_button)
            console.log(emailID)
            console.log(email)
            console.log(typ)
            info_to_add = {
                Account_type: typ,
                email: email,
                password: password,
                usrname: ""

            }
            if(username != ""){
                info_to_add['usrname'] = username
                console.log("type object")
                console.log(username)
                console.log(info_to_add.usrname)
            }

            console.log(info_to_add)
            add_info(DaUserInfo,info_to_add,typ,I_am_master)
            
            

            
        })

        delete_button.addEventListener('click',function(){
            console.log(cache)
            // emailID.value = ""
            // passwordID.value = ""
            // userID.value = ""
            // typID.value = ""

            delete_info(DaUserInfo,cache)
            //delete_info(DaUserInfo,typ)
        })

        //view_button.addEventListener('click',()=>{
            //add_psswrd(1)
        //})





    }else{
      console.log("no one signed in")
      window.location.replace('signin.html')
    }
})


function delete_info(UserData,Account_name){

   deletechild(Account_name + "_div")
   
    firebase.database().ref(UserData.uid+'/Account/'+Account_name).remove().then(function() {
        console.log("Remove succeeded.")
        $('.ui.modal').modal({
            onHide: function(){
            console.log('hidden');
            // emailID = document.getElementById('Email').value = ""
            // passwordID = document.getElementById('pwd').value=""
            // userID = document.getElementById('usr').value=""
            // typID = document.getElementById('typ').value=""
        }

        }).modal('hide')

      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
      $('.ui.modal')
    .modal('hide');
    
}

function add_info(UserData,Account,Account_name,MP){
    let encrypted = ""
    console.log(Account)
    console.log(Account['Account_type'])
    console.log(global.salt)

    Actual_key = Crypto.Create_key(MP,global.salt)
    console.log(Actual_key)
    str = JSON.stringify(Account)
    console.log(Actual_key['Master_key'])
    encrypted = Crypto.encrypt(Actual_key['Master_key'],str)
    console.log(encrypted)


    console.log(Actual_key)
    accinfo = Crypto.decrypt(Actual_key['Master_key'],encrypted)
    console.log(accinfo)
    //divs[Accountname] = accountinfo


    console.log("add_info")
    console.log(Account_name)
    if((Account['Account_type']!="") && (Account['email']!="")&& (Account['password'] != "")){
        firebase.database().ref(UserData.uid+'/Account/'+Account_name).set(encrypted).then(()=>{
            console.log('try hiding')
            $('.ui.modal').modal({
                onHidden: function(){
                console.log('hidden');

                /// emailID = document.getElementById('Email').value = ""
                 ///passwordID = document.getElementById('pwd').value=""
                 ///userID = document.getElementById('usr').value=""
                 ///typID = document.getElementById('typ').value=""
            }
    
            }).modal('hide')
        })
    }
    
}

function update_info(UserData,Account,actname){

    //var firebase.database().ref()
    console.log(UserData)
    console.log(Account)
    console.log(actname)
    firebase.database().ref(UserData.uid+'/Account/'+actname).update(Account)
    divs[actname]=Account

    $('.ui.modal')
    .modal('hide');
    var updates = {}

    
}

function getSnap(UserData){
    ref = firebase.database.ref(UserData.uid+'/Account')
    // ref.on('value',function(snap){
    //     return snap
    // })
    return ref
}

function showitall(UserData,MP){
    ref = firebase.database().ref(UserData.uid)///= getSnap(UserData)
    // ref.once('value',function(saltval){
    //     global.salt = saltval.val().salt
    //     console.log(global.salt)
    // })
    ref.child('/Account/').on('value',function(snap){
        snap.forEach(function(childsnap){
            console.log("child snap key")
            console.log(childsnap.val())
            Plaintext = childsnap.val()
            name = childsnap.key
            //name['salt'] = 
            console.log(childsnap.val())
            //call show it function
            console.log(global.salt)
            
            view_info(name,childsnap.val(),MP)

            

            fill_info(childsnap)
        })
    })
}

    var divArr1 = [];
var divArr2 = [];

function fill_info(Accountinfo){


}
function view_info(Accountname, accountinfo,MP){

    var parentnode = document.getElementById("parent_list")
    console.log(parentnode)

    
    var newdivv = document.createElement("DIV");
    newdivv.className = "item"
    newdivv.id = Accountname + "_div"
    console.log(newdivv)

    var newdivv2 = document.createElement("DIV");
    newdivv2.className = "content"
    console.log(newdivv2)

    var newdivv3 = document.createElement("DIV");
    newdivv3.className = "header"

    var view_button = document.createElement("button")
    view_button.className="position_it2 ui button"
    view_button.innerHTML = "View"
    view_button.tagName = 'view_window2'
    view_button.name = "namer"
    view_button.id = Accountname
    // view_button.onclick = function(){
        
    //     add_psswrd(1)
    //     fill_info(Accountname)
        
    // }
   // view_button.id = Accountname
    //view_button.onclick = view_info

    console.log(view_button)


    account = document.createTextNode(Accountname)

    newdivv3.appendChild(account)
    newdivv3.appendChild(view_button)
    newdivv2.appendChild(newdivv3)
    newdivv.appendChild(newdivv2)

    //if(divs[Accountname] != Accountname){
    if(!divs.hasOwnProperty(Accountname)){
        console.log(Accountname)
        console.log(accountinfo)

        console.log(global.salt)
        console.log(MP)
        deckey = Crypto.Create_key(MP,global.salt)
        console.log(deckey)
        console.log(accountinfo)
        accinfo = Crypto.decrypt(deckey['Master_key'],accountinfo)
        console.log(accinfo)
        x = JSON.parse(accinfo)
        divs[Accountname] = x

    
        parentnode.appendChild(newdivv)
        console.log(divs)
        console.log(divs)
    }


    console.log(newdivv)
    


}
function deletechildme(){
    deletechild(divs["windows2"])
}

function deletechild(div_to_delete){
    
    console.log(div_to_delete)
    x = document.getElementById(div_to_delete)
    console.log(div_to_delete)
    console.log(x)
    // child = x.lastElement
    while(x.firstChild){
        console.log(x.firstChild)
        x.removeChild(x.firstChild);
    }
    x.remove()
    console.log("returning")



}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    console.log('we out piece')
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });