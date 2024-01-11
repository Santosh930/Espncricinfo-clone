

   document.querySelector("#Form").addEventListener("submit", myfunction);
   var clientData = JSON.parse(localStorage.getItem("clientData")) || [];


   function myfunction(){
       event.preventDefault();
    //    console.log("santosh");

   
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;
    

   var val = false;
    
//    console.log("santosh")
   for( var i=0 ; i<clientData.length; i++){
      
       if( email == clientData[i].email && pass == clientData[i].pass){
        //    console.log(i)
           window.location.href ="../index.html";
           val = true;
           alert(`Welcome ${clientData[i].name}`);
        //    window.location.href = "../index.html";
       }
   }
   if(!val){
       alert("wrong - Password")
   }

}
