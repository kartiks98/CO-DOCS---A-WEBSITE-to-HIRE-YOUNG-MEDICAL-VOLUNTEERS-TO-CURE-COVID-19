var firebaseConfig = {
  apiKey: "AIzaSyD1iQw7iuue9d2ZzUcLHTqNUDVNRNg_JKQ",
  authDomain: "covid-654eb.firebaseapp.com",
  databaseURL: "https://covid-654eb.firebaseio.com",
  projectId: "covid-654eb",
  storageBucket: "covid-654eb.appspot.com",
  messagingSenderId: "1063137192991",
  appId: "1:1063137192991:web:4d6eb9eb132193eec2392a",
  measurementId: "G-6KMYWQXMBM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Listen for form submit
document.getElementById('hostform').addEventListener('submit',submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var password = getInputVal('pass');
  var telephone = getInputVal('mno');
  var state = getInputVal('state');
  var count = getInputVal('count');
  localStorage.setItem("pwd",password);
  // Save message
  saveMessage(name, address, email, password, telephone, state, count);

  // Clear form
  document.getElementById('hostform').reset();
}
var id=Date.now();
localStorage.setItem("id",id);
var messagesRef = firebase.database().ref('messages/'+'hospitals/'+id);

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, address, email, password, telephone, state, count){
  messagesRef.set({
    name: name,
    address:address,
    email:email,
    password:password,
    telephone:telephone,
    state:state,
    count:count,
  });
}