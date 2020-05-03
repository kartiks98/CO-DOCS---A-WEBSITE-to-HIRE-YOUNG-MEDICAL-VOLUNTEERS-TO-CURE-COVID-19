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
  function show(){
        firebase.initializeApp(firebaseConfig);
        firebase.database().ref('messages/'+'users/').once('value').then(function (snapshot) {
            var a=snapshot.val();
        console.log(a);
        
        var count = 0;

        for(var prop in a) {
            if(a.hasOwnProperty(prop)){
                var b= a[prop];
                addRow(b.name,b.city,b.state,b.qual,b.qname,b.email,b.telephone);
            }
        };
        console.log(count);

        });
    }
    function addRow(name,city,state,qual,qname,email,telephone) {
        var table = document.getElementById("myTableData");
 
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= name;
        row.insertCell(1).innerHTML= city;
        row.insertCell(2).innerHTML= state;
        row.insertCell(3).innerHTML= qual;
        row.insertCell(4).innerHTML= qname;
        row.insertCell(5).innerHTML= email;
        row.insertCell(6).innerHTML= telephone;
        row.insertCell(7).innerHTML= '<input type="button" value = "Add to your team" style="background-color: red;  border: none; color: white;">';
     
    }