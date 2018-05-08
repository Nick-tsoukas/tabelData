// em
//role
// start_date
// m_rate
// sub = button

var config = {
  apiKey: "AIzaSyAoxi4Mk0vWYUCfwgERQjpmk7SFYrOx3x4",
  authDomain: "employee-cb45d.firebaseapp.com",
  databaseURL: "https://employee-cb45d.firebaseio.com",
  projectId: "employee-cb45d",
  storageBucket: "employee-cb45d.appspot.com",
  messagingSenderId: "298666775692"
};
firebase.initializeApp(config);
var database = firebase.database();

var em = "";
var role = "";
var start_date = "";
var m_rate = "";

$("#sub").on('click', function(e) {
  e.preventDefault();


 em = $("#em").val().trim();
 role = $("#role").val().trim();
 start_date = $("#start_date").val().trim();
 m_rate = $("#m_rate").val().trim();
 console.log(em)

    database.ref().push({
      name: em,
      role: role,
      start_date: start_date,
      m_rate: m_rate
    });
  });

  // var template =
  //               `
  //               <tr>
  //                 <td>${}</td>
  //                 <td>${em}</td>
  //                 <td>${em}</td>
  //                 <td>${em}</td>
  //                 <td>${em}</td>
  //                 <td>${em}</td>
  //               </tr>
  //               `;

// $("#myRow").append(database.name);

database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val().name)
  var template =
                `
                <tr>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().name}</td>
                </tr>
                `;
    $("#myRow").append(template);
});




// var config = {
//     apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
//     authDomain: "fir-recent-user.firebaseapp.com",
//     databaseURL: "https://fir-recent-user.firebaseio.com",
//     storageBucket: "fir-recent-user.appspot.com"
//   };
//
//   firebase.initializeApp(config);
//
//   // Create a variable to reference the database.
//   var database = firebase.database();
//
//   // Initial Values
//   var name = "";
//   var email = "";
//   var age = 0;
//   var comment = "";
//
//   // Capture Button Click
//   $("#add-user").on("click", function(event) {
//     event.preventDefault();
//
//     // Grabbed values from text-boxes
//     name = $("#name-input").val().trim();
//     email = $("#email-input").val().trim();
//     age = $("#age-input").val().trim();
//     comment = $("#comment-input").val().trim();
//
//     // Code for "Setting values in the database"
//     database.ref().set({
//       name: name,
//       email: email,
//       age: age,
//       comment: comment
//     });
//
//   });
//
//   // Firebase watcher + initial loader HINT: .on("value")
//   database.ref().on("value", function(snapshot) {
//
//     // Log everything that's coming out of snapshot
//     console.log(snapshot.val());
//     console.log(snapshot.val().name);
//     console.log(snapshot.val().email);
//     console.log(snapshot.val().age);
//     console.log(snapshot.val().comment);
//
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
//
//     // Handle the errors
//   }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//   });
