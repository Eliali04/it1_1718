firebase.initializeApp({
    apiKey: "AIzaSyBx3nCjC-XKlWdF0oApeVPBSLdVxUbnzXI",
    authDomain: "minforstedb00.firebaseapp.com",
    projectId: "minforstedb00"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("mappe").add({
    tittel: "Mitt første dokument",
    tekst: "Lorem bla bla bla",

});

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var tlfnrE = document.querySelector('.tlfnr');
var emailE = document.querySelector('.email');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {

    db.collection("Personopplysning").add({
        tittel: tittelE.value,
        tekst: tekstE.value,
        tlfnr: tlfnrE.value,
        email: emailE.value


    });

    tittelE.value = "";
    tekstE.value = "";
    tlfnrE.value = "";
    emailE.value = "";



});

