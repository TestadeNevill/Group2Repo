$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });

  $.get("/api/ourmap").then((data) => {
    $("#ourmaplink").on("click", function() {
      console.log("Link works");
    });
  });

  //   $("#productsview").on("click", function() {
  //     // console.log($(this).text(data));
  //     $.get("/api/product").then((data) => {
  //       console.log(data);
  //     });
  //   });
});

// $("#ourmaplink").on("click", function() {
//   // console.log($(this).text(data));
//   $.get("/api/product").then((data) => {
//     console.log(data);
//   });

// $("#createproduct").on("click", function() {
//   // console.log($(this).text(data));
//   $.get("/api/createproducts").then((data) => {
//     console.log(data);
//   });
// });
