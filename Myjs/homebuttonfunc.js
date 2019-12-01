plus = document.getElementById('add_psswrd')
cancel = document.getElementById('cancel_edit')
viewoptions = document.getElementById('view_window') //button to view accoutn options
an = document.getElementById('Account_name')
console.log(an)


cancel.addEventListener('click',()=>{
    $('.ui.modal')
    .modal('hide');
})
// viewoptions.addEventListener('click',()=>{
//     console.log('viewoptions')
//     add_psswrd(1)


//     // <div class="item">
//     //         <div class="content">
//     //           <div class="header">Netflix 
//     //             <button class=" position_it2 ui button" id="view_window" >View </button> 
//     //           </div>
//     //           <!--a id="signoutI" class="item" role="button">Edit Password</a-->
//     //         </div>
//     //       </div>
    
// })

//$(document).on('click','#view_window2',function(){console.log('testing meh again')})

// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'view_window2'){
//         console.log('testing meh')
        
//     }
// })

plus.addEventListener('click',()=>{
    add_psswrd(0)
})
function add_psswrd(show){
    $('.ui.modal')
    .modal('show');

    if(show === 1){
        myFunction(1)
    }else{
        myFunction(0)
    }
    
  }
function show_pssrd(){
    let x = document.getElementById("pwd");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";

    }
    
    //$('.ui.modal')
    //.modal('show');
}

function myFunction(show) {
    var x = document.getElementById("hideme");
    console.log("myfunc")
    if(show === 1){
        x.style.display = "block"
        console.log("wellllll")
        console.log(divs)
        //This if statment will show the delete or save button
    
    }else{
        x.style.display = "none"
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  document.addEventListener('click',function(e){
      if(e.target.name == 'namer'){
          console.log("weelllll test")
          document.getElementById('usr').value = divs[e.target.id]['usrname']
          document.getElementById('eml').value = divs[e.target.id]['email']
          document.getElementById('pwd').value = divs[e.target.id]['password']
          document.getElementById('typ').value = divs[e.target.id]['Account_type']
          add_psswrd(1)
      }
  })
//   function fill_info(accountinfo){
//       console.log("its me bitch")
//       console.log(accountinfo)
//       console.log(divs)
//       an = document.getElementById('typ').value = accountinfo
      
//       if(document.getElementById('usr').value == undefined){
//         document.getElementById('usr').value = "hello"
//       }

//     //   document.getElementById('eml').value = divs[accountinfo].email
//     //   document.getElementById('pwd').value = divs[accountinfo].password

//   }