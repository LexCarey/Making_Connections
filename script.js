console.log("I hope you're having a great day!");

var myname = document.querySelector(".name");;

var requests = document.querySelector("#numberofrequests");

var numberreq = 2;

var connections = document.querySelector("#numberofconnections");

var numbercons = 500;

var todd = document.querySelector(".todd");

var phil = document.querySelector(".phil");

var logOI = document.querySelector("#signout")

function profileEdited() {
    myname.innerText = "Akua";
}

function noMore(element) {
    numberreq -= 1;
    requests.innerText = numberreq;
    element.remove();
}

function add() {
    numbercons += 1;
    connections.innerText = numbercons
};

function signOutIn() {
    if (logOI.innerText == "Sign Out"){
    console.log("signing out!")
    logOI.innerText = "Sign In";
    } else {
        console.log("logging in!")
        logOI.innerText = "Sign Out";
    }
}