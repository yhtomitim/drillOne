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
    data: findId[0]
  })
});

app.listen(port, () => {
  console.log(`CORS-enabled server is listening on port ${port}`);
})