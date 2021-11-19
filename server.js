var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8181);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist/appointment-planner'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('dist/appointment-planner', 'index.html'));
    });
  }