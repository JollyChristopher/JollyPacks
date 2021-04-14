const { should } = require('chai');
should();
const { Vec3 } = require('vec3');
const { packTests, testRecipes, asyncAssert, permitText } = require('./pack_common.js');
const { startServer, endServer, itemToString } = require('./server.js');

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

  describe('recipes tests', function () {
    const recipes = [
      {
        id: 'rabbit_pen',
        name: 'Rabbit Pen',
        icon: 'minecraft:rabbit_foot',
        recipe: [
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'oak_log',
            count: 16
          },
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'carrot',
            count: 16
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'rabbit_hide',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          carrot: {
            name: 'Carrot',
            key: 'C'
          },
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          rabbit_hide: {
            name: 'Rabbit Hide',
            key: 'H'
          }
        }
      }
    ];
    it('should have root for recipes', function () {
      const json = require('../build/bloomin_town/data/bloomin_town/advancements/recipes/root.json');
      json.should.have.deep.property('display', {
        icon: {
          item: 'minecraft:sweet_berries'
        },
        title: 'Bloomin Town Recipes',
        description: 'Spring time recipes for New in Town.',
        frame: 'task',
        background: 'minecraft:textures/block/lime_wool.png',
        show_toast: false,
        announce_to_chat: false,
        hidden: false
      });
      json.should.have.deep.property('criteria', {
        exists: {
          trigger: 'minecraft:tick'
        }
      });
    });
    testRecipes('bloomin_town', recipes);
  });

  describe('game tests', function () {
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
      endServer().then(() => {
        done();
      }).catch(error => {
        done(error);
      });
    });

    it('should be able to spawn NiT wagon', async function () {
      this.timeout(30000);
      minebot.chat('/tp @s 0 ~ 0');
      minebot.chat('/give @s minecraft:oak_log 1');
      minebot.chat('/trigger nitContract set 1');
      minebot.chat('created wagon');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Town Planner"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 20000)).should.be.equal(true, 'Could not find Town Planner');
    });
    it('should be able to build rabbit pen', async function () {
      this.timeout(30000);
      minebot.chat('/give @s minecraft:oak_log 31');
      minebot.chat('/give @s minecraft:stone 8');
      minebot.chat('/give @s minecraft:carrot 16');
      minebot.chat('/give @s minecraft:rabbit_hide 4');
      minebot.chat(`/give @s minecraft:paper${permitText()}`);
      minebot.chat('/tp @s -5 ~ 0');
      const dropperBlock = minebot.blockAt(new Vec3(-7, 64, 0));
      let dropper = await minebot.openContainer(dropperBlock);
      dropper.on('updateSlot', (slot, oldItem, newItem) => {
        if (slot < 9) minebot.chat(`planner update: ${itemToString(oldItem)} -> ${itemToString(newItem)} (slot: ${slot})`);
      });
      dropper.on('close', () => {
        minebot.chat('planner closed');
      });
      await minebot.transfer({ window: dropper, itemType: 37, count: 8, sourceStart: 36, destStart: 0, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 16, sourceStart: 36, destStart: 1, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 8, sourceStart: 36, destStart: 2, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 830, count: 16, sourceStart: 38, destStart: 3, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 677, count: 1, sourceStart: 40, destStart: 4, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 859, count: 4, sourceStart: 39, destStart: 5, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 37, destStart: 6, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 4, sourceStart: 37, destStart: 7, sourceEnd: null, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 37, destStart: 8, sourceEnd: null, destEnd: null });
      dropper.close();
      dropper = await minebot.openContainer(dropperBlock);
      dropper.close();
      minebot.chat('/tp @s -18 ~ -2');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Rabbit Tender"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 10000)).should.be.equal(true, 'Could not find Rabbit Tender');
    });
  });
});
