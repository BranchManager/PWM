plus = document.getElementById('add_psswrd')
cancel = document.getElementById('cancel_edit')
viewoptions = document.getElementById('view_window') //button to view accoutn options

cancel.addEventListener('click',()=>{
    $('.ui.modal')
    .modal('hide');
})
viewoptions.addEventListener('click',()=>{
    console.log('viewoptions')
    add_psswrd(1)
})
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
    }else{
        x.style.display = "none"
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }