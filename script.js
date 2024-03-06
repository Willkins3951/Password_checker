const menuButton = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('.show');

show.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        show.classList.add('hide');
        
    }
    else {
        pswrd.setAttribute('type' ,'password');
        show.classList.remove('hide') ;
    }
}



function check(){
  var input = document.getElementById("myPassword").value;

  input = input.trim();
  document.getElementById("myPassword").value = input;
  document.getElementById("count").innerText = "Length : "  + input.length;
  
  if(input.length >= 5){
    document.getElementById("check0").style.color = "#f00";
  }else{
    document.getElementById("check0").style.color = "white";
  }

  if(input.length >= 10){
    document.getElementById("check1").style.color = "#f00";
  }else{
    document.getElementById("check1").style.color = "white";
  }

  if(input.match(/[A-Z]/i)){
    document.getElementById("check2").style.color = "#f00";
  }else{
    document.getElementById("check2").style.color = "white";
  }

  if(input.match(/[0-9]/i)){
    document.getElementById("check3").style.color = "#f00";
  }else{
    document.getElementById("check3").style.color = "white";
  }

  if(input.match(/[^A-Za-z0-9-'']/i)){
    document.getElementById("check4").style.color = "#f00";
  }else{
    document.getElementById("check4").style.color = "white";
  }

}
 


