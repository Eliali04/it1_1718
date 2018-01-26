firebase.initializeApp({
    apiKey: "AIzaSyCAnBYzNJ6F4uY2RFe8PvvpHukLZ-TUF2U",
    authDomain: "filmer00-9affb.firebaseapp.com",
    projectId: "filmer00-9affb",
    storageBucket: "filmer00-9affb.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var fjellnavninput = document.querySelector('.fjellnavn');
var mohinput = document.querySelector('.moh');
var bildeinput = document.querySelector('.fjellbilde');
var sendknapp = document.querySelector('.send');

sendknapp.addEventListener('click', function () {

    db.collection('fjell').add({
        fjellnavn: fjellnavninput.value,
        moh: mohinput.value,
        fjellbilde: bildeinput.value

    });

});

sendknapp.addEventListener('click', function () {

var storageRef

});

/*
db.collection ('fjell').add({
    navn:"Vengetind",
    moh: 1852,
    bilde: ""
    /*
});