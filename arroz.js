var firebaseConfig = {
    apiKey: "AIzaSyDnpEKC20wMGvKpP8GAi4hDDR2xDG8hQwE",
    authDomain: "basededatos-5a431.firebaseapp.com",
    databaseURL: "https://basededatos-5a431-default-rtdb.firebaseio.com",
    projectId: "basededatos-5a431",
    storageBucket: "basededatos-5a431.appspot.com",
    messagingSenderId: "57482750694",
    appId: "1:57482750694:web:baca7647eea9babcbae927"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML-"Hola"+user_name;




  function addRoom()
{
 
room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  
window.location="a.html"


}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name){
    console.log(name);
  }

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="a.html";
  }

  function logOut(){
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.locatiom="index.html";
document.getElementById("user_name").innerHTML = " ";
  }