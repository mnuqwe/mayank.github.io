// listen to form submit
var firebaseConfig = {
    apiKey: "AIzaSyAj9yyhfVYuA9EfYCkO_ThvvZHkVFUTQjU",
    authDomain: "contact-form-2bff3.firebaseapp.com",
    databaseURL: "https://contact-form-2bff3.firebaseio.com",
    projectId: "contact-form-2bff3",
    storageBucket: "",
    messagingSenderId: "578458578852",
    appId: "1:578458578852:web:398626624108227c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messageRef = firebase.database.ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    saveMessage(nmae, email, message);
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save the message to fire base
function saveMessage(name, email, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}