const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', (req, res) => {
  const stream = fs.createReadStream('./data.jpeg');
  res.setHeader('Content-disposition', `attachment; filename=${encodeURIComponent('屎多多')}.jpeg`);
  stream.pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
