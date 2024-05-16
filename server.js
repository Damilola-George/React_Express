//It Works

const express = require ('express');
const app = express();

app.use("/users/", require("./routes/usersRoute"));


//express port should be different from react port

app.listen(3001, function() {
    console.log("express server is running on port 3001");
});

//in your local machine go to localhost:3001/users/ 