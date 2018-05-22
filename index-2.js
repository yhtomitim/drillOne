var express = require('express')
var app = express()

var data = JSON.parse('cohorts.csv')
// require data
// require morgan

//response.status(404);

//app.get ... response.json({
// data: data;
// })

// function findById(data, id){
//   for (let i = 0; i < data.length; i++){
//       if (data[i].id == id){
//           return data[i];
//       } 
//   }
//   return null;
// }

//get a specific ID, need to write JS to get object with an ID, from the data
function getById(data, id) {
  for (let index = 0; index < data.length; index++) {
    if (data[i].id === id) {
      
    }
    const element = data[index];
    
  }
}

app.get('/', (req, res) => res.send(data.data[0].cohortCode))
app.get('/data/:id', (req, res) => res.send(data))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


