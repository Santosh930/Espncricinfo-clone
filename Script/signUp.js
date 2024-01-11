

    var clientData = JSON.parse(localStorage.getItem("clientData")) || [];
document.querySelector("#Form").addEventListener("submit", myfunction);

function myfunction(){
    event.preventDefault();
    // console.log("santosh")

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;

    var obj = {
        name,
        email,
        pass
    };

    clientData.push(obj);
    
    localStorage.setItem("clientData", JSON.stringify(clientData))
    
    window.location.href = "../index.html";

} 
