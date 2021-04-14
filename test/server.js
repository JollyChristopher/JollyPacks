// mineflayer does not support snapshots in general. Unfortunate. Basically, do not use this until it is supported.
// I could also attempt to add support myself at some point, but not now.
const { exec } = require('child_process');
const mineflayer = require('mineflayer');
// const { headless: mineflayerViewer } = require('prismarine-viewer'); // issue with the video processor...
let bot;
exports.startServer = function (version = 'latest', videoName = 'output') {
  return new Promise((resolve, reject) => {
    exec(`npm run run-server-${version}`, (error) => {
      if (error) reject(error);
      else resolve();
    });
  }).then(() => { // todo: make a way to have this more exact
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const checkServer = function () {
        exec('npm run check-server-status --silent', (error, stdout) => {
          if (error) {
            reject(error);
          } else {
            if (stdout.startsWith('healthy')) {
              console.log(`server started in ${(Date.now() - start) / 1000}s`);
              resolve();
            } else {
              setTimeout(checkServer, 1000);
            }
          }
        });
      };
      checkServer();
    });
  }).then(() => {
    console.log('creating bot');
    return new Promise((resolve, reject) => {
      bot = mineflayer.createBot({
        host: 'localhost',
        username: 'jollypack_tester'
      });
      bot.on('message', (message) => {
        console.log(`${message}`);
      });
      bot.on('kicked', reject);
      bot.on('error', reject);
      bot.once('spawn', () => {
        // todo: also enable the viewer for videos!
        console.log('Bot joined the world');
        // mineflayerViewer(bot, { output: `test-output/videos/${videoName}.mp4`, frames: -1, width: 512, height: 512 });
        resolve(bot);
      });
    });
  });
};

exports.endServer = function () {
  // end the running server
  return new Promise((resolve, reject) => {
    exec('npm run close-server', (error) => {
      bot.quit();
      bot = null;
      if (error) reject(error);
      else resolve();
    });
  }).then(() => {
    console.log('server ended!');
  });
};

exports.itemToString = function (item) {
  if (item) {
    return `${item.name}x${item.count}`;
  } else {
    return 'nothing';
  }
};
