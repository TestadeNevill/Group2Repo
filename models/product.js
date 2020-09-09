// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// Creating our User model

module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define(
    "Product",
    {
      // The email cannot be null, and must be a proper email before creation
      item_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_Number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Unit_Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Store_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    { timestamps: false }
  );
  return Product;
};

// sequelize.sync({ force: true }).then(() => {
//   Note.bulkCreate(notes, { validate: true }).then(() => {
//       console.log('New products added.');
//   }).catch((err) => {
//       console.log('failed to create notes');
//       console.log(err);
//   }).finally(() => {
//       sequelize.close();
//   });

// Project.findOne({ where: { title: "My Title" } });
// if (project === null) {
//   console.log("Not found!");
// } else {
//   console.log(project instanceof Project); // true
//   console.log(project.title); // 'My Title'
// }
