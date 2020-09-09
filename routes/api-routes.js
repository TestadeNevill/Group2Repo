// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // app.route("/api/ourmap", (req,res) => {

  // }
  app.get("/api/product", (req, res) => {
    db.Product.findAll({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", (req, res) => {
      db.User.create({
        email: req.body.email,
        password: req.body.password,
      })
        .then(() => {
          res.redirect(307, "/api/login");
        })
        .catch((err) => {
          res.status(401).json(err);
        });
    });

    // Route for logging user out
    app.get("/logout", (req, res) => {
      req.logout();
      res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id,
        });
      }
    });

    // app.get("/api/product", (req, (res) => {}));
    // app.create("/api/createproduct", (req, res) => {
    //   db.Product.update(
    //     { quanity: 5 },
    //     {
    //       where: {
    //         id: 0,
    //       },
    //     }
    //   );
    // });
  });

  app.get("/api/product", (req, res) => {
    db.Product.findAll({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
  // app.get("/api/products", (req, res) => {
  // db.prodcuts.findAll({
  //   where: {
  //     item_number: 1,
  //   },
  // });
  // app.post("/api/products",(req, res) => {
  // db.prodcuts.udpate({ item_name item_number
  //   where: {
  //     authorId: 2,
  //   },
  // });
};

// db.Product.create

// app.get("/api/product/:item_name", (req, res) => {
//   db.Product.findOne({
//     where: {
//       item_name: req.params.item_name,
//     },
//   })
//     .then((data) => {
//       console.log(data);
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(401).json(err);
//     });
// });
// });

// app.get("/api/products/:item_name?", (req, res) => {
//   let query;
//   if (req.params.itemName) {
//     query = db.Products.findAll({
//       include: [
//         { model: Products, where: { itemName: req.params.itemName } },
//         { model: Tag },
//       ],
//     });
//   } else {
//     query = Products.findAll({ include: [Tag, User] });
//   }
//   return query.then((blogs) => res.json(blogs));
// });

// app.get("/api/products", (req, res) => {
// db.prodcuts.findAll({
//   where: {
//     item_number: 1,
//   },
// });
// app.post("/api/products",(req, res) => {
// db.prodcuts.udpate({ item_name item_number
//   where: {
//     authorId: 2,
//   },
//   // });
// };
