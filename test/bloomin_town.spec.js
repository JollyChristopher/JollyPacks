const { should } = require('chai');
should();
const { packTests } = require('./pack_common.js');
const { startServer, endServer } = require('./server.js');

describe('Bloomin Town', function () {
  describe('installed datapacks advancements', function () {
    packTests('bloomin_town');
    it('should have bloomin_town', function () {
      const json = require('../build/bloomin_town/data/bloomin_town/advancements/bloomin_town.json');
      json.should.have.deep.property('display', {
        title: "Bloomin' Town",
        description: 'Spring time in New in Town!',
        icon: {
          item: 'minecraft:sweet_berries'
        },
        announce_to_chat: false,
        show_toast: false
      });
      json.should.have.property('parent', 'global:jolly_packs');
      json.should.have.deep.property('criteria', {
        trigger: {
          trigger: 'minecraft:tick'
        }
      });
    });
  });

  describe('latest version tests', function () {
    let minebot;
    this.beforeAll(function (done) {
      this.timeout(120000);
      startServer('latest').then((bot) => {
        minebot = bot;
        done();
      }).catch(error => {
        done(error);
      });
    });

    this.afterAll(function (done) {
      this.timeout(5000);
      endServer(minebot).then(() => {
        done();
      }).catch(error => {
        done(error);
      });
    });

    it('not a test!', function () {

    });
  });
});
