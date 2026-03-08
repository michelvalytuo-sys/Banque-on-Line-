function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let correctEmail = "jean.Jacqueberthelot2026@gmail.com"
let correctPassword = "Bonjour2026@"

if(email === correctEmail && password === correctPassword){

document.getElementById("loginPage").style.display = "none"
document.getElementById("app").style.display = "flex"

}else{

document.getElementById("error").innerHTML = "Identifiants incorrects"

}

}

console.log("Application bancaire en ligne
