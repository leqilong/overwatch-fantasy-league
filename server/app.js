const express = require('express');
const cors = require('cors');
let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.listen(PORT, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port' + PORT);
});
