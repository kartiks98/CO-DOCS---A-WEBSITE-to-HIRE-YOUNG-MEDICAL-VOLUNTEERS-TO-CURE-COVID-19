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
        firebase.initializeApp(firebaseConfig);


//********GET DATA************** */
        function getdata() {
            if(document.getElementById('log').checked){
                var radio = "hospital";
            }else{
                var radio="volunteer";
            }
            if(radio=="hospital"){
                Doctor();
            }else{
                volunteer();
             }
    }

//**************************************************************************************************************** */
function volunteer(){
   var l_password=document.getElementById("id").value;
    var pass=document.getElementById("l_password").value;
    firebase.database().ref('messages/'+'users/'+l_password).once('value').then(function (snapshot) {
        //here we will get data
        if(!snapshot.exists()){
            document.getElementById("error").style.color = "red";
        }else{
        //enter your field name
        var name=snapshot.val().name;
        var phone=snapshot.val().telephone;
        var email=snapshot.val().email;
        var state=snapshot.val().state;
        var city=snapshot.val().city;
        var qual=snapshot.val().qual;
        var qname=snapshot.val().qname;
        var pass1=snapshot.val().password;
        //now we have data in variables
        //now show them in our html
        if(pass1==pass){
            localStorage.setItem("name",name);
            localStorage.setItem("email",email);
            localStorage.setItem("city",city);
            localStorage.setItem("state",state);
            localStorage.setItem("phone",phone);
            localStorage.setItem("qual",qual);
            localStorage.setItem("qname",qname);
           window.location.href='profile.html';
}
    else{
        document.getElementById("error").style.color = "red";
        }
     }
     });
}
//******************************DOCTORS*************************** */
function Doctor(){
    var l_password=document.getElementById("id").value;
     var pass=document.getElementById("l_password").value;
     firebase.database().ref('messages/'+'hospitals/'+l_password).once('value').then(function (snapshot) {
         //here we will get data
         if(!snapshot.exists()){
             document.getElementById("error").style.color = "red";
         }else{
         //enter your field name
         var pass1=snapshot.val().password;

         if(pass1==pass){
            window.location.href='doc.html';
 }
     else{
         document.getElementById("error").style.color = "red";
         }
      }
      });
 }