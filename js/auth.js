/*const auth_user = [
    {
    u_name : "uzair@gmail.com",
    pw : "uzairkhan"
    }
    ,{
        u_name : "iftikhar@gmail.com",
        pw : "iftikhar"
    }
]
*/


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

/*let auth = {
     ["uzair@gmail.com","uzairkhan"],
     ["iftikhar@gmail.com", "iftikhar"] 
}*/
function checkAuth(){
    let user = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    
    for(let i=0 ; i<auth.length; i++){
        
        if(auth[i].u_name === user.value && auth[i].pw === password.value){
            alert("this is working");
            //document.getElementsByClassName("userName").innerHTML = auth[i].fullName ;
            let testing = document.getElementById("userName");
            console.log(testing);
            return true ;
        }
        else {
            alert("incorrect credentials");
            
        }
    }

    return false ;
    /*let i= 0
    for( i in auth_user){
        if (user.value == auth_user[i][u_name]){
            console.log("this is perfect");
            alert("hello");
        }
        else{
            alert("not working")
        }
    }*/
}

