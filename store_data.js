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

// Reference messages collection

// Listen for form submit
document.getElementById('RegForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var fname = getInputVal('fname');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var telephone = getInputVal('telephone');
  var state = getInputVal('state');
  var city = getInputVal('city');
  var qual=getInputVal('qual');
  var qname=getInputVal('qname');
  localStorage.setItem("pwd",password);

  // Save message
  saveMessage(name, fname, email, password, telephone, state, city,qual, qname);

  // Clear form
  document.getElementById('RegForm').reset();
}
var id=Date.now();
localStorage.setItem("id",id);
var messagesRef = firebase.database().ref('messages/'+'users/'+id);
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, fname, email, password, telephone, state, city, qual, qname){
  messagesRef.set({
    name: name,
    fname:fname,
    email:email,
    password:password,
    telephone:telephone,
    state:state,
    city:city,
    qual:qual,
    qname:qname
  });
}