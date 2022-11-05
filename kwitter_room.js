
var firebaseConfig = {
      apiKey: "AIzaSyDAa4TDqk60wpaBJ9LJgqeHt0g2T8x51KM",
      authDomain: "kwitter-9acf9.firebaseapp.com",
      databaseURL: "https://kwitter-9acf9-default-rtdb.firebaseio.com",
      projectId: "kwitter-9acf9",
      storageBucket: "kwitter-9acf9.appspot.com",
      messagingSenderId: "237900192209",
      appId: "1:237900192209:web:07f084d63b66e94129a8f0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");


//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
