let button1=document.getElementById("JobsByLocation");
let button2=document.getElementById("allJobs");

button1.onclick= function()
{
    document.getElementById("pabJobsON").style.display="none";
    document.getElementById("jobDetails").style.display="block"; 
    document.getElementById("JobsByLocation").style.backgroundColor="#270d44";
    // document.getElementById("JobsByLocation").style.color="red";
    

    
}
button2.onclick=function()
{
    document.getElementById("pabJobsON").style.display="block";
    document.getElementById("JobsByLocation").style.backgroundColor="none";
}