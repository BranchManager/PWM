plus = document.getElementById('add_psswrd')
cancel = document.getElementById('cancel_edit')

cancel.addEventListener('click',()=>{
    $('.ui.modal')
    .modal('hide');
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