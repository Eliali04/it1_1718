firebase.initializeApp({
    apiKey: "AIzaSyDsjPq1EZbJG-Di9zEypg8EvInilfZqcII",
    authDomain: "klikkespill00.firebaseapp.com",
    projectId: "klikkespill00"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();




var navnE = document.querySelector('.navn');
var startE = document.querySelector('.start');
var klikkE = document.querySelector('.klikk');
var klikkverdiE = document.querySelector('.klikkverdi');
var listeE = document.querySelector('.poengliste');

var antklikk = 0;

db.collection("spill").add({
   navn: "test",
   poeng: 0

});

klikkE.addEventListener('click', function () {
    antklikk = antklikk + 1;
    klikkverdiE.innerHTML = antklikk;

});

startE.addEventListener('click', function () {
    antklikk = 0;
    klikkverdiE.innerHTML = antklikk;

    setTimeout(function () {

        db.collection("spill").add({
            navn: navnE.value,
            poeng: antklikk

        });
            alert(antklikk)
    }, 3000)

});

var mappe = db.collection('spill').orderBy('poeng', 'desc');

mappe.onSnapshot(function (data) {

    listeE.innerHTML = "";

    var dokumenter = data.docs;

    for(var x in dokumenter){

        listeE.innerHTML += "<li>"+ dokumenter[x].data().navn + ": " + dokumenter[x].data().poeng +"</li>"

    }

});


