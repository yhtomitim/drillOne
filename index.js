const express = require('express');
const cors = require('cors');
const data = require('./cohorts.js')
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json(data);
})

app.get('/:id', (req, res) => {
  let idParam = req.params.id;
  let findId = data.data.filter((index) => index.id == idParam);
  
  if (!findId.length) {
    res.status(404);
    return res.json({ "message": "No record found!" });
  }
  return res.json({
    data: {
      id: findId[0].id,
      cohortName: findId[0].cohortName,
      cohortCode: findId[0].cohortCode,
      numberOfStudents: findId[0].numberOfStudents
  }})
});

app.listen(port, () => {
  console.log(`CORS-enabled server is listening on port ${port}`);
})