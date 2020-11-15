function textchange(headingcolor){
    var sectionheading = document.getElementById('sectionheading');
    sectionheading.style.color = headingcolor;
}
function submitbtn(){
    var name = document.getElementById("name");
    var email = document.getElementById("email"); 
    var message = document.getElementById("message");  
      if(email.value === ""){
          alert("Email Required!")
      }else
      if(name.value === ""){
        alert("Name Required!")
    }else
    if(message.value === "" || message.value === "Enter text here..."){
        alert("Plz Write Message In Comment Box!");
    }else{
        alert(name.value+" Your Email Succesful Submitted");
    }
}
function socialhover(color){
    var fb = document.getElementById("fb");
    fb.style.borderColor= color;
}
function socialhover1(color){
    var tw = document.getElementById("tw");
    tw.style.borderColor= color;
}
function socialhover2(color){
    var ln = document.getElementById("ln");
    ln.style.borderColor= color;
   
}
function socialhover3(color){
    var ins = document.getElementById("ins");
    ins.style.borderColor= color;
}