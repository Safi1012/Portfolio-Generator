const fs = require('fs');
require('dotenv').config();

fs.readFile('./public/manifest.json', 'utf8', function(err, data) {
  let formattedData = data.replace(/"name":.*/, `"name": "${process.env.MANIFEST_NAME}",`);
  formattedData = formattedData.replace(/"short_name":.*/, `"short_name": "${process.env.MANIFEST_SHORT_NAME}",`);

  fs.writeFile('./public/manifest.json', formattedData, 'utf8', function(err) {
    if (err) return err;
  });
});
