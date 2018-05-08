// at some point I will clear the Database because there is a ton of lkjsdflkjsd in it

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

// setting the variables that we need to empty strings
var em = "";
var role = "";
var start_date = "";
var m_rate = "";


//this is our click event: when user submits buttons
$("#sub").on('click', function(e) {
  e.preventDefault();

//getting the value from the form ===================
 em = $("#em").val().trim();
 role = $("#role").val().trim();
 start_date = $("#start_date").val().trim();
 m_rate = $("#m_rate").val().trim();

// pushing form data to the firebase database
    database.ref().push({
      name: em,
      role: role,
      start_date: start_date,
      m_rate: m_rate
    });
  });


// In the event that data is added to the database via: push({}) run this code
database.ref().on("child_added", function(snapshot) {
// This is the template literal you can lean more at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// we build the entire HTML and then interpolate the ===snapshot.val().name=== with ${some js code or vars}
  var template =
                `
                <tr>
                  <td>${snapshot.val().name}</td>
                  <td>${snapshot.val().role}</td>
                  <td>${snapshot.val().start_date}</td>
                  <td>Must build function</td>
                  <td>${snapshot.val().m_rate}</td>
                  <td>Must build function</td>
                </tr>

                `;
    //just logging the template
    console.log(template)
    // we now append the template literal to the DOM/HTML
    $("#myRow").append(template);
});
