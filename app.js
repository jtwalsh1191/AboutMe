const express = require('express');
const app = express();
const path = require("path");
const MeControl = require('./controller/me');


app.use(express.static(path.join(__dirname + '/Views')));

var engine = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//Route to homepage
app.get('/', MeControl.homepage);

app.get('/CrashSortByGradeGL', MeControl.CrashSortByGradeGL);



  const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });