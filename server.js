const mysql = require('mysql');
const express = require('express');
const app = express();
const db = require('./app/config/db.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes/mk.routes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});