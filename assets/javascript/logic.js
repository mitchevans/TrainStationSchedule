
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

$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#firstTrainTime-input").val().trim();
    var frequency = $("#frequency-input").val().trim();

    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency,
    };

    // store train info in firebase
    database.ref().push(newTrain);

    // clear form
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#firstTrainTime-input").val("");
    $("#frequency-input").val("");

});

database.ref().on("child_added", function (childSnapshot) {
    
    
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;
    
    
    var firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "days");
    console.log(firstTimeConverted);

    // Difference between firstTimeConverted and current time
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

    // Time apart (remainder)
    var timeRemainder = diffTime % frequency;

    // Minutes Until Train
    var minTil = frequency - timeRemainder;

    // Next Train 
    var nextTrain = moment().add(minTil, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minTil)
    );

    $("#train-table > tbody").append(newRow);

});