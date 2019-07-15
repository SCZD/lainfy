var database = firebase.database();




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


   var user = firebase.auth().currentUser;

   if (user != null) {
   	document.getElementById('login-div').style.display = "none";
	document.getElementById('opacity-body').style.display = "none";
   	var	email_id = user.email;
   	document.getElementById("fckyou").style.display = "none";
   	document.getElementById("fckyou-1").style.display = "flex";
   	document.getElementById("fckyou-1").innerHTML = email_id;
   		var ref = database.ref('Lainfy')
		var	data = {
			Name: email_id,
			Code: "info"
		} 
		ref.push(data);
 	}
  }else{
	// document.getElementById("fckyou").style.display = "flex";
 //   	document.getElementById("fckyou-1").style.display = "none";
  }
});
function login(){
	var	userEmail = document.getElementById('email_field').value;
	var	userPass = document.getElementById('pass_field').value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	window.alert("Error :" + errorMessage);
	});
}
function register(){
	var	userEmail = document.getElementById('email_field').value;
	var	userPass = document.getElementById('pass_field').value;
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
 	 // Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
 	 window.alert("Error :" + errorMessage);
});
}
function logout(){
	firebase.auth().signOut().then(function() {
	  document.getElementById("fckyou").style.display = "flex";
   	  document.getElementById("fckyou-1").style.display = "none";
	}).catch(function(error) {
	  // An error happened.
	});
}
function google(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithRedirect(provider);
	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
	    // ...
	  }
	  // The signed-in user info.
	  var user = result.user;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}