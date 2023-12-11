var database = [
    "stefan.g1234",
    "dominik.heslo",
    "petr.c1234",
    "jachym.d1234",
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var loginData = username + "." + password

    for (let i = 0; i < database.length; i++) {
        if(loginData == database[i]) {
            console.log("Login sucessful")
            break;
        } else if(i == database.length - 1){
            console.log("Incorrect input")
        }
    }
}