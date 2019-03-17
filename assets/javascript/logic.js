
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAZ4qBNToESYMaTBc1Y07k1UX1Kq_TU_J8",
    authDomain: "mitch-s-project.firebaseapp.com",
    databaseURL: "https://mitch-s-project.firebaseio.com",
    projectId: "mitch-s-project",
    storageBucket: "mitch-s-project.appspot.com",
    messagingSenderId: "450595366408"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event){
      event.preventDefault();

      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var frequency = $("#frequency-input").val().trim();
      var nextArrival = ""
      var minAway = ""
  })