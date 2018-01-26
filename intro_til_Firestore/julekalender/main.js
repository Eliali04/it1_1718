// Initialize Firebase
var config = {
    apiKey: "AIzaSyBwB-RvWPTnNgHISHlughQcZQy1fG-IOqY",
    authDomain: "julekalender-f56ab.firebaseapp.com",
    databaseURL: "https://julekalender-f56ab.firebaseio.com",
    projectId: "julekalender-f56ab",
    storageBucket: "julekalender-f56ab.appspot.com",
    messagingSenderId: "472243968208"
};
firebase.initializeApp(config);

var db = firebase.firestore();

/*
for(var lukenummer = 1; lukenummer<=24; lukenummer++){

db.collection("julekalender").add({
    luke: lukenummer
    });
}
*/

var pakkerE = document.querySelector('.pakker');


var ref = db.collection('julekalender');

var query = ref.where ('luke', '=>', 12).where("luke", "==", 24);

query.onSnapshot(function (data) {
   var objekt = data.docs;

   for(var x in objekt){

       pakkerE.innerHTML += "<div class='luke'>"+
                            objekt[x] .data().luke +
                            "</div>";

   }
});