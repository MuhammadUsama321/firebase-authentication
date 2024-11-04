

// <!-- FireBase Authentication: -->

var firebaseConfig = {
    apiKey: "AIzaSyALm-qp5Zzkeb6MSJobszY4C8b5PePm9Tg",
    authDomain: "fir-auth-4491c.firebaseapp.com",
    projectId: "fir-auth-4491c",
    storageBucket: "fir-auth-4491c.firebasestorage.app",
    messagingSenderId: "213334028057",
    appId: "1:213334028057:web:cc5d5998f063d978f7df88"
  };

  var app = firebase.initializeApp(firebaseConfig);


function  signup(){
    var name= document.getElementById('name')
    var email= document.getElementById('email')
    var password= document.getElementById('Password')
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
      // ..
    });
}
 



  




  function login(){
    var loginemail= document.getElementById('loginemail')
    var loginpassword= document.getElementById('loginPassword')
    console.log(loginemail.value);
    console.log(loginpassword.value);

    firebase.auth().createUserWithEmailAndPassword(loginemail.value, loginpassword.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });
  }




