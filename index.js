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
  let idParam = req.params.id;
  let findId = data.data.filter((index) => index.id == idParam);
  
  if (!findId.length) {
    res.status(404);
    res.json({ "message": "No record found!" });
  } else {
    // const acc = {
    //   data: {
    //     id: undefined,
    //     cohortName: undefined,
    //     cohortCode: undefined,
    //     numberOfStudents: undefined
    //   }
    // };
    //  let formattedResponse = findId.reduce((acc, cv) => {
    //   acc.data.id = cv.id;
    //   acc.data.cohortName = cv.cohortName;
    //   acc.data.cohortCode = cv.cohortCode;
    //   acc.data.numberOfStudents = cv.numberOfStudents;
    //   return acc;
    // }, acc);
    // res.json(formattedResponse);
    res.json({
      data: {
        id: findId[0].id,
        cohortName: findId[0].cohortName,
        cohortCode: findId[0].cohortCode,
        numberOfStudents: findId[0].numberOfStudents
    }})
  }
});

app.listen(port, () => {
  console.log(`CORS-enabled server is listening on port ${port}`);
})