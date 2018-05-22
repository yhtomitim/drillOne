const express = require('express');
const cors = require('cors');
const data = require('./cohorts.js')
const port = 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json(data);
  // console.log(Array.isArray(data.data));
})

app.get('/:id', (req, res) => {
  let idParam = parseInt(req.params.id);
  let testing = data.data.filter((index) => index.id === idParam);
  
  if (testing.length === 0) {
    res.status(404);
    res.json({ "message": "No record found!" });
  } else {
    const acc = {
      data: {
        id: Number,
        cohortName: String,
        cohortCode: String,
        numberOfStudents: Number
      }
    };
     let formattedResponse = testing.reduce((acc, cv) => {
      acc.data.id = cv.id;
      acc.data.cohortName = cv.cohortName;
      acc.data.cohortCode = cv.cohortCode;
      acc.data.numberOfStudents = cv.numberOfStudents;
      return acc;
    }, acc);
    res.json(formattedResponse);
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled server is listening on port ${port}`);
})