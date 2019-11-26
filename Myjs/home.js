//const firebase = require("firebase/app");
//const init = require('./Myjs/MyFire')
let divs = {bill:"hello"}
var userID;
//init.myFireInit()
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


    add_button = document.getElementById('add_account')
    view_button = document.getElementById('view_window')
    emailID = document.getElementById('eml')
    passwordID = document.getElementById('pwd')
    userID = document.getElementById('usr')
    typID = document.getElementById('typ')

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

    view_button.addEventListener('click',()=>{
        //add_psswrd(1)
    })





    }else{
      console.log("no one signed in")
      window.location.replace('signin.html')
    }
})

function add_info(UserData,Account,Account_name){
    console.log(Account)
    console.log(Account['Account_type'])
    if((Account['Account_type']!="") && (Account['email']!="")&& (Account['password'] != "")){
        firebase.database().ref(UserData.uid+'/Account/'+Account_name).set(Account)
    }
    $('.ui.modal')
    .modal('hide');
}

function getSnap(UserData){
    ref = firebase.database.ref(UserData.uid+'/Account')
    ref.on('value',function(snap){
        return sn
    })
    return ref
}

function showitall(UserData){
    //ref = getSnap(UserData)
    ref.on('value',function(snap){
        snap.forEach(function(childsnap){
            console.log(childsnap.key)
            name = childsnap.key
            //call show it function
            view_info(name)
        })
    })
}

    var divArr1 = [];
var divArr2 = [];


function view_info(Accountname){

    var parentnode = document.getElementById("parent_list")
    console.log(parentnode)

    
    var newdivv = document.createElement("DIV");
    newdivv.className = "item"
    newdivv.id = Accountname
    console.log(newdivv)

    var newdivv2 = document.createElement("DIV");
    newdivv2.className = "content"
    console.log(newdivv2)

    var newdivv3 = document.createElement("DIV");
    newdivv3.className = "header"

    var view_button = document.createElement("button")
    view_button.className="position_it2 ui button"
    view_button.innerHTML = "View"
   // view_button.id = Accountname
    //view_button.onclick = view_info

    console.log(view_button)


    account = document.createTextNode(Accountname)

    newdivv3.appendChild(account)
    newdivv3.appendChild(view_button)
    newdivv2.appendChild(newdivv3)
    newdivv.appendChild(newdivv2)

    if(divs[Accountname] != Accountname){
        divs[Accountname] = Accountname

    
        parentnode.appendChild(newdivv)
    }


    console.log(newdivv)
    


}
function deletechildme(){
    deletechild(divs["windows2"])
}

function deletechild(div_to_delete){
    
    x = document.getElementById(div_to_delete)
    console.log(div_to_delete)
    console.log(x)
    // child = x.lastElement
    while(x.firstChild){
        console.log(x.firstChild)
        x.removeChild(x.firstChild);
    }
    x.remove()



}