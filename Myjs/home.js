//const firebase = require("firebase/app");
//const init = require('./Myjs/MyFire')
const Crypto = require('./keygen')
let divs = {bill:"hello"}
let cache = ""
var userID;
//init.myFireInit()
// save_button = document.getElementById('save')
// delete_button = document.getElementById('delete')
// add_button = document.getElementById('add_account')
// view_button = document.getElementById('view_window')
// emailID = document.getElementById('eml')
// passwordID = document.getElementById('pwd')
// userID = document.getElementById('usr')
// typID = document.getElementById('typ')

firebase.auth().onAuthStateChanged(DaUserInfo =>{
    if(DaUserInfo){
      console.log('the following user is signed in')
      console.log(DaUserInfo.uid)
      userID = DaUserInfo.uid
      console.log(" here they are again")
      //console.log(userID)
      //console.log(userID)
     // console.log(Firstname)
      //window.location.replace('home.html')

      console.log("tesing")
      //console.log(userID)
      let ref = firebase.database().ref(userID)
      
      ref.once('value', function(snap){
          console.log(snap.val().email)
          console.log(snap.val())
      },
      
      function(error){
          console.log("Error: "+error.code)
      })

      


        showitall(DaUserInfo)

        save_button = document.getElementById('save')
        delete_button = document.getElementById('delete')
        add_button = document.getElementById('add_account')
        view_button = document.getElementById('view_window')
        emailID = document.getElementById('eml')
        passwordID = document.getElementById('pwd')
        userID = document.getElementById('usr')
        typID = document.getElementById('typ')


        save_button.addEventListener('click', ()=>{

            var email = emailID.value;
            var password = passwordID.value; 
            var username = userID.value;
            var typ = typID.value; 

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

            
            add_info(DaUserInfo,info_to_add,typ)
            

            
        })

        delete_button.addEventListener('click',function(){
            console.log(cache)
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
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
      $('.ui.modal')
    .modal('hide');
    
}

function add_info(UserData,Account,Account_name){
    console.log(Account)
    console.log(Account['Account_type'])
    console.log("add_info")
    if((Account['Account_type']!="") && (Account['email']!="")&& (Account['password'] != "")){
        firebase.database().ref(UserData.uid+'/Account/'+Account_name).set(Account)
    }
    $('.ui.modal')
    .modal('hide');
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

function showitall(UserData){
    ref = firebase.database().ref(UserData.uid+'/Account/')///= getSnap(UserData)
    ref.on('value',function(snap){
        snap.forEach(function(childsnap){
            console.log("child snap key")
            console.log(childsnap.val())
            name = childsnap.key
            //call show it function
            view_info(name,childsnap.val())
            fill_info(childsnap)
        })
    })
}

    var divArr1 = [];
var divArr2 = [];

function fill_info(Accountinfo){


}
function view_info(Accountname, accountinfo){

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
        divs[Accountname] = accountinfo

    
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