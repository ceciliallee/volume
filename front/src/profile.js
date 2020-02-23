var profileData = firebase.database();

function sendData(fullname, username, email, password) {
    profileData.ref('users/' + username).set({
        fullname: fullname,
        username: username,
        email: email,
        password: password
    })
}

function signup(ev) {
    console.log("hello");
    let fullname = document.querySelector("#fullname").value;
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    sendData(fullname, username, email, password);
}