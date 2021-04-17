const express = require("express");
const app = express();
const cors = require("cors");
const superheroController = require("./controllers/superhero")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", superheroController)

// app.set("port", process.env.PORT || 4000);

// app.listen(app.get('port'), () =>{
//     console.log(`connected on PORT: ${app.get('port')}`)
// })

app.listen(process.env.PORT || 4000)

