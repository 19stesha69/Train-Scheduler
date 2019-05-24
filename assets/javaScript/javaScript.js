 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDHQ_7eWURFwoeoImsiPysJNzoQ0MJLw5Q",
    authDomain: "train-scheduler-989f8.firebaseapp.com",
    databaseURL: "https://train-scheduler-989f8.firebaseio.com",
    projectId: "train-scheduler-989f8",
    storageBucket: "train-scheduler-989f8.appspot.com",
    messagingSenderId: "995280177977",
    appId: "1:995280177977:web:43eec0b06e09937e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  //Initial Values
  var trainLine = "";
  var destName = "";
  var departTime = "00:00";
  var frequencyNum = 0;
  


  //Send form values to the database
  $("#add-train-btn").on("click", function (event) { 

    //get values from form
    trainLine = $("#train").val().trim();
    destName = $("#destination").val().trim();
    departTime = $("#departure").val().trim();
    frequencyNum = $("#frequency").val().trim();

    //push values to
    database.ref().push({
        train:       trainLine,
        destination: destName,
        departure:   departTime,
        frequency:   frequencyNum
    })
  });

  //Show database inputs in table

  database.ref().on("child_added", function(snapshot){

    var data = snapshot.val();

    var newTrain = data.train;
    var newDest = data.destination;
    var newDepart = data.departure;
    var minutesAway;
    var newFrequency = data.frequency;

    minutesAway = moment().endOf(newDepart, "HHmm").fromNow();
    
    console.log(minutesAway);
    
  })