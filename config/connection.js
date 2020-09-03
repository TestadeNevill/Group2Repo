const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "iv6d7owbvywhzzu4",
  password: "b8ikebeldd4k9fqn",
  database: "vbkjhgumbw9uqm0w",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
