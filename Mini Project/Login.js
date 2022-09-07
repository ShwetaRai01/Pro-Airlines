
 function myfunction()
 {
    var a=document. getElementById("unamee").value; 
    var b=document. getElementById("passs").value;
    if(a=="a"&&b=="a")
    { 
      
       
      window.open("Home2.html");
    //  document.getElementsByTagName("button"); 
       
    }
    else
    {
        alert(" Invalid UserName and Password");
    }
    // console.log(b);

    
    
 }

function newFunction() {
    window.location.replace("Home2.html");
}
// document.forms["loginform"]["pass"].value