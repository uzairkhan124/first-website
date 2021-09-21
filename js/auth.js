/*
let auth =
   [
    {
        u_name : "uzair@gmail.com",
        pw : "uzairkhan",
        fullName : "Uzair Khan"
    },
    {
        u_name : "iftikhar@gmail.com",
        pw : "iftikhar",
        fullName : "Iftikhar Ahmed"
    }
];


function checkAuth(){
    let user = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    
    for(let i=0 ; i<auth.length; i++){
        
        if(auth[i].u_name === user.value && auth[i].pw === password.value){
            alert("this is working");
            localStorage.setItem("userName",auth[i].fullName);
            return true ;
        }
        else {
            alert("incorrect credentials");
            
        }
    }

    return false ;
    
}*/


const checkAuth= async() => {

    let user = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");

    let myBody = {
        username: user,
        password: password
    }

    /*fetch("https://dev.muawin.com:9000/swagger-ui.html#/web-client-rest-contoller/LoginWithUsernameUsingPOST", {
        method: "POST",
        body: formBody,
        header : {
            "Content-Type" : "application/json"
        }
    })
    .then(function(response) {
            return response.text()
    })
    .then(function(text) {
            alert(text);
            console.log(text)
    })*/

    const response = await fetch('https://dev.muawin.com:9000/swagger-ui.html#/web-client-rest-contoller/LoginWithUsernameUsingPOST', {
        method: 'POST',
        body: myBody,
        headers: {
          'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson);
}