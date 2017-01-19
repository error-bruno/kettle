const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s.', 3000);
});
