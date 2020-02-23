 var database = firebase.database();


function sendData(fullname, username, email, password) {

        let gender = "";
        let school = "";
        let age = 0;
        let link = "";
        let bio = "";

    	firebase.database().ref('users/' + username).set({
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        gender: gender,
        school: school,
        age: age,
        link: link,
        bio: bio
    });
}

function sendDataAgain(username, gender, school, age, link, bio) {

    firebase.database().ref('users/' + username).update({
        username: username,
        gender: gender,
        school: school,
        age: age,
        link: link,
        bio: bio
    })
}

function signup(ev) {
    fullname = document.querySelector("#fullname").value;
    username = document.querySelector("#username").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;

    sendData(fullname, username, email, password);
}

function edit(ev) {
    let username = document.querySelector("#username1").value;
    let gender = document.querySelector("#gender").value;
    let school = document.querySelector("#school").value;
    let age = document.querySelector("#age").value;
    let link = document.querySelector("#link").value;
    let bio = document.querySelector("#bio").value;

    sendDataAgain(username, gender, school, age, link, bio);
}

