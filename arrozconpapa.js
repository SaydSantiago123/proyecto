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


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 //Inicia código
    console.log(firebase_message_id);
    console.log(message_data);
    names = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML +=row;
    //Finaliza código
 } });  }); }
getData();
function send()
{  msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name: user_name,
       message: msg,
       like: 0
 });
 document.getElementById("msg").value="";
}

function updateLike(message_id)
{
 button_id = message_id;
 like = document.getElementById(button_id).value;
 updated_likes = Number(like) + 1;
 console.log(updated_likes);

 firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes
 });
}


function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
document.getElementById("user_name").innerHTML = " ";
}