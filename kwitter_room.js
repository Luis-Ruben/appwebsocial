
var firebaseConfig = {
      apiKey: "AIzaSyDAa4TDqk60wpaBJ9LJgqeHt0g2T8x51KM",
      authDomain: "kwitter-9acf9.firebaseapp.com",
      databaseURL: "https://kwitter-9acf9-default-rtdb.firebaseio.com",
      projectId: "kwitter-9acf9",
      storageBucket: "kwitter-9acf9.appspot.com",
      messagingSenderId: "237900192209",
      appId: "1:237900192209:web:07f084d63b66e94129a8f0"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("Bienvenido").innerHTML = "¡Bienvenido " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Nombre de la sala: " + Room_names)
      row = "<div class='room name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("romm_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("user_name", user_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("romm_name", name)
      window_location = "kwitter_page.html"
}

function logOut()
{
    window.location = "index.html";
}
