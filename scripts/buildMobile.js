/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const buildPath = path.join(__dirname, '../build');
const mobilePath = path.join(__dirname, '../cordova/www');

exec('npm run build', () => {
  if (fs.existsSync(mobilePath)) {
    fs.remove(mobilePath, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
  fs.rename(buildPath, mobilePath, error => console.error(error));
});
