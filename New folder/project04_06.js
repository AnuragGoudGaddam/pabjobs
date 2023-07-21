let button1=document.getElementById("taskButton2");
let button2=document.getElementById("taskButton");

button1.onclick= function()
{
    document.getElementById("fullname").textContent="Full Name";
    document.getElementById("genpact1").style.display="";
    document.getElementById("genpact2").style.display="";
    document.getElementById("genpact3").style.display="";
    document.getElementById("genpact4").style.display="";
    document.getElementById("genpact5").style.display="";
    document.getElementById("genpact6").style.display="";
    document.getElementById("genpact7").style.display="";
    document.getElementById("check1").style.display="";
    document.getElementById("check2").style.display="none";
    document.getElementById("recutries1").style.color=" lightgray";
    document.getElementById("Seeker").style.color="form-control";


    // Seeker


    document.getElementById("image1").src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000";
}
button2.onclick= function()
{
    document.getElementById("fullname").textContent="Company Name";
    document.getElementById("genpact1").style.display="none";
    document.getElementById("genpact2").style.display="none";
    document.getElementById("genpact3").style.display="none";
    document.getElementById("genpact4").style.display="none";
    document.getElementById("genpact5").style.display="none";
    document.getElementById("genpact6").style.display="none";
    document.getElementById("genpact6").style.display="none";
    document.getElementById("genpact7").style.display="none";
    document.getElementById("check1").style.display="none";
    document.getElementById("check2").style.display="block";
    document.getElementById("Seeker").style.color=" lightgray";
    document.getElementById("recutries1").style.color="";






    document.getElementById("image1").src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000";
}

function otp1(){
    alert("Hello! I am an alert box!!");
}
