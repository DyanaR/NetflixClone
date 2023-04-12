const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);


let port = process.env.PORT;
if (port == null || port == "") {
  port == 5000;
}

app.listen(port, function() {
  console.log("Server has started successfully");
});


// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });

// mongodb+srv://drahhal98:<password>@cluster1.6wpchyu.mongodb.net/?retryWrites=true&w=majority