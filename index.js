const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


const app = express();

// Express body parser
// app.use(express.urlencoded({ extended: true }));  //to use request.body //it's body parser but it's actually included in express 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', require('./routes/index.js'));
 app.use('/candidate', require('./routes/candidate.js'));
 app.use('/admin',require('./routes/admin.js'));
// app.use('/admin',require('./routes/admin.js'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

