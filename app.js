var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Live on Heroku!');
});
app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});