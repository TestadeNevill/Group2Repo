$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/product").then((data) => {
    console.log(data);
  });
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});

// $("#productsview").on("click", function() {
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
