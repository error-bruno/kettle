const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log([
    '888             888   888   888            \'',
    '888             888   888   888           ;',
    '888             888   888   888            ;',
    '888  888 .d88b. 888888888888888 .d88b.    `,  .--.',
    '888 .88Pd8P  Y8b888   888   888d8P  Y8b     ._.-./',
    '888888K 88888888888   888   88888888888     \\/"""\\ ',
    '888 "88bY8b.    Y88b. Y88b. 888Y8b.         (_____)',
    '888  888 "Y8888  "Y888 "Y888888 "Y8888    --=xXXXx=--'
  ].join('\n'));
  console.info('==> 🌎 Listening on port %s.', 3000);
});
