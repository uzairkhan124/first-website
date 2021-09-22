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


let checkAuth = () => {


    let user = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");

    let myBody = {
        username: user.value,
        password: password.value
    }


    fetch(`https://dev.muawin.com:9000/LoginWithUsername?username=${encodeURIComponent(myBody.username)}&password=${encodeURIComponent(myBody.password)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log(response);
        let myJson = response.json();
        console.log(myJson);
        return myJson;
    }).then(result => {
        if (result.Requested_Action == true) {
            console.log("valid");
            const asyncLocalStorage = {
                setItem: async function (key, value) {

                    return localStorage.setItem(key, value);
                }
            };
            asyncLocalStorage.setItem("userName", result.displayName)
            let test = document.getElementById("formData");
            test.onsubmit = true ;
        } else {
            console.log("invalid");
            let test = document.getElementById("formData");
            test.onsubmit = false ;

        }
    }).catch(err => {
        console.log(" error ")
    })

    console.log("eof")
}