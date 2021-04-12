// mineflayer does not support snapshots in general. Unfortunate. Basically, do not use this until it is supported.
// I could also attempt to add support myself at some point, but not now.
const {exec} = require('child_process');
const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer');

exports.startServer = function(version = 'snapshot') {
    return new Promise((resolve, reject) => {
        exec(`npm run run-server-${version}`, (error) => {
            if(error) reject(error);
            else resolve();
        });
    }).then(() => { // todo: make a way to have this more exact
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 40000);
        })
    }).then(() => {
        console.log('server started, creating bot');
        return new Promise((resolve, reject) => {
            const bot = mineflayer.createBot({
                host: 'localhost',
                username: 'jollypack_tester',
                version: version === 'snapshot' ? '21w14a': false
            });
            bot.on('kicked', reject);
            bot.on('error', reject);
            bot.once('spawn', () => {
                resolve(bot); // todo: also enable the viewer for videos!
            });
        });
    });
};

exports.endServer = function(bot) {
    // end the running server
    return new Promise((resolve, reject) => {
        bot.end();
        exec(`npm run close-server`, (error) => {
            if(error) reject(error);
            else resolve();
        });
    }).then(() => {
        console.log('server ended!');
    });
};