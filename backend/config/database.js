const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri = process.env.DB_URI || process.env.DB_LOCAL_URI;
  if (!uri) {
    console.error("MongoDB URI not configured. Set DB_URI or DB_LOCAL_URI.");
    process.exit(1);
  }

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB Database connected with HOST:${con.connection.host}`
      );
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err.message);
      process.exit(1);
    });
};
module.exports = connectDatabase;
