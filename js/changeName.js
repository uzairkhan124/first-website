
let uname =localStorage.getItem("userName") ;
document.getElementById("u_name").innerHTML = uname;


function deleteLocalStorage() {
    localStorage.removeItem("userName");
}