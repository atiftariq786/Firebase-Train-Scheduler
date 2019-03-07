

    // Initialize Firebase
    
    
    var config = {
        apiKey: "AIzaSyD8Xhpb9hJRVzaxenGuKXK_k0YKNBUKcss",
        authDomain: "fir-my-project-23639.firebaseapp.com",
        databaseURL: "https://fir-my-project-23639.firebaseio.com",
        projectId: "fir-my-project-23639",
        storageBucket: "fir-my-project-23639.appspot.com",
        messagingSenderId: "533465173805"
      };
      firebase.initializeApp(config);
      // Create a variable to reference the database.
      var database = firebase.database();
//-------------------------------------------------------------------------------------------
      // Initial Values
      var trainName = "";
      var destination = "";
     // var trainTiming = 0;
      var frequency = 0;
      var trainCurrentTime =0;
     
       
      // Capture Button Click
      $("#add-train-btn").on("click", function(event) {
        event.preventDefault();
  
        // Grabbed values from text-boxes
        trainName = $("#train-name-input").val().trim();
        destination = $("#destination-input").val().trim();
       trainCurrentTime = $("#trainTime-input").val().trim();
        frequency = $("#frequency-input").val().trim();
        
        // Code for "pushing values in the database"
        database.ref().push({
            trainName: trainName,
            destination: destination,
            trainCurrentTime:trainCurrentTime,
            frequency : frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  
      });
 //-------------------------------------------------------------------------------------- 
      // Firebase watcher + initial loader HINT: .on("value")
      database.ref().on("child_added", function(childSnapshot) {
  
        // Log everything that's coming out of snapshot
        //console.log(snapshot.val());
        console.log(childSnapshot.val(). trainName);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().trainCurrentTime);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().joinDate);

        // Change the HTML to reflect
        $("trainName-display").text(childSnapshot.val().trainName);
        $("#destination-display").text(childSnapshot.val().destination);
        $("#traintiming-display").text(childSnapshot.val().trainCurrentTime);
        $("#frequency-display").text(childSnapshot.val().frequency);



        
                
        

  
        // Handle the errors
        },function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

       
    });

   