const mongoose = require("mongoose");

const db =
  "mongodb+srv://SamadyADM:ProjetoEBAC@clustercourseebac.iixjaga.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCourseEBAC";

const connection = mongoose.connect(db, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

module.export = connection;
