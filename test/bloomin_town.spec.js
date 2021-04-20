/* eslint-disable no-unused-expressions */
const should = require('chai').should();
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
      },
      {
        id: 'flower_shop',
        name: 'Flower Shop',
        icon: 'minecraft:allium',
        recipe: [
          {
            id: 'dandelion',
            count: 8
          },
          {
            id: 'oak_log',
            count: 32
          },
          {
            id: 'poppy',
            count: 8
          },
          {
            id: 'flower_pot',
            count: 4
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'flower_pot',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'bricks',
            count: 8
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          dandelion: {
            name: 'Dandelion',
            key: 'D'
          },
          poppy: {
            name: 'Poppy',
            key: 'P'
          },
          flower_pot: {
            name: 'Flower Pot',
            key: 'F'
          },
          bricks: {
            name: 'Brick Block',
            key: 'B'
          }
        }
      },
      {
        id: 'apiary',
        name: 'Apiary',
        icon: 'minecraft:beehive',
        recipe: [
          {
            id: 'oak_log',
            count: 4
          },
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'oak_log',
            count: 4
          },
          {
            id: 'dandelion',
            count: 4
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'dandelion',
            count: 4
          },
          {
            id: 'beehive',
            count: 1
          },
          {
            id: 'honeycomb',
            count: 9
          },
          {
            id: 'beehive',
            count: 1
          }
        ],
        legend: {
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          dandelion: {
            name: 'Dandelion',
            key: 'D'
          },
          honeycomb: {
            name: 'Honeycomb',
            key: 'H'
          },
          beehive: {
            name: 'Bee Hive',
            key: 'B'
          }
        }
      },
      {
        id: 'greenhouse',
        name: 'Greenhouse',
        icon: 'minecraft:glass',
        recipe: [
          {
            id: 'glass',
            count: 4
          },
          {
            id: 'glass',
            count: 8
          },
          {
            id: 'glass',
            count: 4
          },
          {
            id: 'composter',
            count: 1
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'oak_leaves',
            count: 16
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          glass: {
            name: 'Glass',
            key: 'G'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          composter: {
            name: 'Composter',
            key: 'C'
          },
          oak_leaves: {
            name: 'Oak Leaves',
            key: 'O'
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
        minebot.chat('/gamemode creative');
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
      minebot.chat('/tp @s -6 64 0');
      await minebot.waitForTicks(10);
      const dropperBlock = minebot.blockAt(new Vec3(-7, 64, 0));
      let dropper = await minebot.openContainer(dropperBlock);
      dropper.on('updateSlot', (slot, oldItem, newItem) => {
        if (slot < 9) minebot.chat(`planner update: ${itemToString(oldItem)} -> ${itemToString(newItem)} (slot: ${slot})`);
      });
      dropper.on('close', () => {
        minebot.chat('planner closed');
      });
      await minebot.transfer({ window: dropper, itemType: 37, count: 8, sourceStart: 36, destStart: 0, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 16, sourceStart: 36, destStart: 1, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 8, sourceStart: 36, destStart: 2, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 830, count: 16, sourceStart: 36, destStart: 3, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 677, count: 1, sourceStart: 36, destStart: 4, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 859, count: 4, sourceStart: 36, destStart: 5, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 6, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 4, sourceStart: 36, destStart: 7, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 8, sourceEnd: 50, destEnd: null });
      dropper.close();
      dropper = await minebot.openContainer(dropperBlock);
      dropper.close();
      minebot.chat('/tp @s -18 ~ -2');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Rabbit Tender"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 10000)).should.be.true;
    });
    it('should be able to build flower shop', async function () {
      this.timeout(30000);
      minebot.chat('/give @s minecraft:oak_log 32');
      minebot.chat('/give @s minecraft:stone 4');
      minebot.chat('/give @s minecraft:dandelion 8');
      minebot.chat('/give @s minecraft:poppy 8');
      minebot.chat('/give @s minecraft:flower_pot 8');
      minebot.chat('/give @s minecraft:bricks 8');
      minebot.chat(`/give @s minecraft:paper${permitText()}`);
      minebot.chat('/tp @s 0 64 -6');
      await minebot.waitForTicks(10);
      const dropperBlock = minebot.blockAt(new Vec3(0, 64, -7));
      let dropper = await minebot.openContainer(dropperBlock);
      dropper.on('updateSlot', (slot, oldItem, newItem) => {
        if (slot < 9) minebot.chat(`planner update: ${itemToString(oldItem)} -> ${itemToString(newItem)} (slot: ${slot})`);
      });
      dropper.on('close', () => {
        minebot.chat('planner closed');
      });
      await minebot.transfer({ window: dropper, itemType: 111, count: 8, sourceStart: 36, destStart: 0, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 32, sourceStart: 36, destStart: 1, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 112, count: 8, sourceStart: 36, destStart: 2, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 829, count: 4, sourceStart: 36, destStart: 3, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 677, count: 1, sourceStart: 36, destStart: 4, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 829, count: 4, sourceStart: 36, destStart: 5, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 6, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 166, count: 8, sourceStart: 36, destStart: 7, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 8, sourceEnd: 50, destEnd: null });
      dropper.close();
      dropper = await minebot.openContainer(dropperBlock);
      dropper.close();
      minebot.chat('/tp @s -2 ~ -18');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Florist"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 10000)).should.be.true;
    });
    it('should be able to build apiary', async function () {
      this.timeout(30000);
      minebot.chat('/give @s minecraft:oak_log 16');
      minebot.chat('/give @s minecraft:dandelion 8');
      minebot.chat('/give @s minecraft:honeycomb 9');
      minebot.chat('/give @s minecraft:beehive 2');
      minebot.chat(`/give @s minecraft:paper${permitText()}`);
      minebot.chat('/tp @s 0 64 6');
      await minebot.waitForTicks(10);
      const dropperBlock = minebot.blockAt(new Vec3(0, 64, 7));
      let dropper = await minebot.openContainer(dropperBlock);
      dropper.on('updateSlot', (slot, oldItem, newItem) => {
        if (slot < 9) minebot.chat(`planner update: ${itemToString(oldItem)} -> ${itemToString(newItem)} (slot: ${slot})`);
      });
      dropper.on('close', () => {
        minebot.chat('planner closed');
      });
      await minebot.transfer({ window: dropper, itemType: 37, count: 4, sourceStart: 36, destStart: 0, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 8, sourceStart: 36, destStart: 1, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 37, count: 4, sourceStart: 36, destStart: 2, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 111, count: 4, sourceStart: 36, destStart: 3, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 677, count: 1, sourceStart: 36, destStart: 4, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 111, count: 4, sourceStart: 36, destStart: 5, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 954, count: 1, sourceStart: 36, destStart: 6, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 952, count: 9, sourceStart: 36, destStart: 7, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 954, count: 1, sourceStart: 36, destStart: 8, sourceEnd: 50, destEnd: null });
      dropper.close();
      dropper = await minebot.openContainer(dropperBlock);
      dropper.close();
      minebot.chat('/tp @s -2 ~ 18');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Beekeeper"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 10000)).should.be.true;
    });
    it('should be able to build greenhouse', async function () {
      this.timeout(30000);
      minebot.chat('/give @s minecraft:glass 16');
      minebot.chat('/give @s minecraft:composter');
      minebot.chat('/give @s minecraft:stone 6');
      minebot.chat('/give @s minecraft:oak_leaves 16');
      minebot.chat(`/give @s minecraft:paper${permitText()}`);
      minebot.chat('/tp @s 6 64 0');
      await minebot.waitForTicks(10);
      const dropperBlock = minebot.blockAt(new Vec3(7, 64, 0));
      let dropper = await minebot.openContainer(dropperBlock);
      dropper.on('updateSlot', (slot, oldItem, newItem) => {
        if (slot < 9) minebot.chat(`planner update: ${itemToString(oldItem)} -> ${itemToString(newItem)} (slot: ${slot})`);
      });
      dropper.on('close', () => {
        minebot.chat('planner closed');
      });
      console.log(dropper);
      await minebot.transfer({ window: dropper, itemType: 77, count: 4, sourceStart: 36, destStart: 0, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 77, count: 8, sourceStart: 36, destStart: 1, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 77, count: 4, sourceStart: 36, destStart: 2, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 935, count: 1, sourceStart: 36, destStart: 3, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 677, count: 1, sourceStart: 36, destStart: 4, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 69, count: 16, sourceStart: 36, destStart: 5, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 6, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 7, sourceEnd: 50, destEnd: null });
      await minebot.transfer({ window: dropper, itemType: 1, count: 2, sourceStart: 36, destStart: 8, sourceEnd: 50, destEnd: null });
      dropper.close();
      dropper = await minebot.openContainer(dropperBlock);
      dropper.close();
      minebot.chat('/tp @s 12 ~ -2');
      (await asyncAssert(async () => {
        return await minebot.nearestEntity((entity) => {
          return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Gardener"}' && entity.position.distanceTo(minebot.entity.position) < 8;
        });
      }, 10000)).should.be.true;
    });
    it('should be able to get flowers to grow', async function () {
      this.timeout(30000);
      minebot.chat('/tp @s -1 64 -11');
      await minebot.waitForTicks(10);
      const bushBlock = minebot.blockAt(new Vec3(-1, 64, -12));
      await minebot.dig(bushBlock);
      minebot.blockAt(new Vec3(0, 64, -12)).name.should.be.equal('flower_pot');
      (await asyncAssert(async () => {
        minebot.chat('/time set 5995');
        await minebot.waitForTicks(10);
        const pot = minebot.blockAt(new Vec3(0, 64, -12));
        console.log(pot.name);
        return pot.name === 'potted_brown_mushroom';
      }, 20000)).should.be.true;
    });
    it('should be able to get honey to be made', async function () {
      this.timeout(30000);
      minebot.chat('/tp @s -1 64 11');
      await minebot.waitForTicks(10);
      const barellBlock = minebot.blockAt(new Vec3(0, 64, 16));
      const barell = await minebot.openContainer(barellBlock);
      console.log(barell.slots[0]);
      should.not.equal(barell.slots[0], null);
      barell.slots[0].name.should.be.oneOf(['honeycomb', 'honey_bottle', 'honey_block', 'honeycomb_block', 'bee_nest', 'bee_spawn_egg']);
    });
    it('should shuffle gardener trades', async function () {
      this.timeout(30000); // Vec3 { x: 12.5, y: 64, z: -3.5 }
      minebot.chat('/tp @s 13 64 -4');
      await minebot.waitForTicks(10);
      const villager = await minebot.nearestEntity((entity) => {
        return entity.mobType === 'Villager' && entity.metadata[2] === '{"text":"Gardener"}' && entity.position.distanceTo(minebot.entity.position) < 8;
      });
      const tradeWindow = await minebot.openVillager(villager);
      console.log(tradeWindow.trades[1].outputItem);
      tradeWindow.trades[1].outputItem.name.should.not.equal('birch_leaves');
    });
    it('should be able to uninstall the pack', async function () {
      this.timeout(30000);
      minebot.chat('/tp @s -1 64 -11');
      await minebot.waitForTicks(5);
      (await minebot.nearestEntity((entity) => {
        return entity.mobType === 'Armor Stand' && entity.position.distanceTo(minebot.entity.position) < 8;
      })).name.should.be.equal('armor_stand');
      minebot.chat('/tp @s -1 64 11');
      await minebot.waitForTicks(5);
      (await minebot.nearestEntity((entity) => {
        return entity.mobType === 'Armor Stand' && entity.position.distanceTo(minebot.entity.position) < 8;
      })).name.should.be.equal('armor_stand');
      minebot.chat('/function bloomin_town:uninstall');
      minebot.chat('/tp @s -1 64 -11');
      await minebot.waitForTicks(10);
      should.equal(await minebot.nearestEntity((entity) => {
        return entity.mobType === 'Armor Stand' && entity.position.distanceTo(minebot.entity.position) < 8;
      }), null);
      minebot.chat('/tp @s -1 64 11');
      await minebot.waitForTicks(5);
      should.equal(await minebot.nearestEntity((entity) => {
        return entity.mobType === 'Armor Stand' && entity.position.distanceTo(minebot.entity.position) < 8;
      }), null);
    });
  });
});
