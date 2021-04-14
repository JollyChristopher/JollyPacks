const readline = require('readline');
const fs = require('fs');

exports.packTests = function (pack) {
  const base = `../build/${pack}/data/global/advancements`;
  it('should have root', function () {
    const json = require(`${base}/root.json`);
    json.should.have.deep.property('display', {
      title: 'Installed Datapacks',
      description: '',
      icon: {
        item: 'minecraft:knowledge_book'
      },
      background: 'minecraft:textures/block/gray_concrete.png',
      show_toast: false,
      announce_to_chat: false
    });
    json.should.have.deep.property('criteria', {
      trigger: {
        trigger: 'minecraft:tick'
      }
    });
  });
  it('should have jolly_packs', function () {
    const json = require(`${base}/jolly_packs.json`);
    json.should.have.deep.property('display', {
      title: 'Jolly Christopher',
      description: 'Jolly Packs',
      icon: {
        item: 'minecraft:player_head',
        nbt: "{SkullOwner: 'JollyChristopher'}"
      },
      show_toast: false,
      announce_to_chat: false
    });
    json.should.have.property('parent', 'global:root');
    json.should.have.deep.property('criteria', {
      trigger: {
        trigger: 'minecraft:tick'
      }
    });
  });
};
const permitText = exports.permitText = function () {
  return '{HideFlags:1,display:{Lore:[\'{"text":"The final ingredient"}\',\'{"text":"in new town structures."}\'],Name:\'{"text":"Building Permit"}\'},Enchantments:[{lvl:0,id:"minecraft:protection"}]}';
};
function getDescription (recipe) {
  let description = 'Q = Building Permit\n';
  Object.values(recipe.legend).forEach(entry => {
    description += `${entry.key} = ${entry.name}\n`;
  });
  let count = 1;
  recipe.recipe.forEach(entry => {
    const key = entry.id === 'permit' ? 'Q' : recipe.legend[entry.id].key;
    description += key + (entry.count > 1 ? 'x' + entry.count : '');
    if (count !== 9) {
      if (count % 3 === 0) {
        description += '\n';
      } else {
        description += ' | ';
      }
    }
    count++;
  });
  return description;
}
function getItems (recipe) {
  let items = '{Items:[';
  let slot = 0;
  recipe.recipe.forEach(entry => {
    items += `{Slot:${slot}b,id:`;
    if (entry.id === 'permit') {
      items += `"minecraft:paper",Count:${entry.count}b,tag:${permitText()}},`;
    } else {
      items += `"minecraft:${entry.id}",Count:${entry.count}b}${slot !== 8 ? ',' : ''}`;
    }
    slot++;
  });
  items += ']}';
  return items;
}

exports.testRecipes = function (namespace, recipes) {
  recipes.forEach(recipe => {
    it(`should have recipe for ${namespace}:${recipe.id}`, function () {
      const description = getDescription(recipe);
      const items = getItems(recipe);
      const json = require(`../build/${namespace}/data/${namespace}/advancements/recipes/recipe_${recipe.id}.json`);
      json.should.have.property('parent', `${namespace}:recipes/root`);
      json.should.have.deep.property('display', {
        icon: {
          item: recipe.icon
        },
        title: `${recipe.name} Crafting`,
        description: description,
        frame: 'task',
        show_toast: false,
        announce_to_chat: false,
        hidden: false
      });
      json.should.have.deep.property('rewards', {
        function: `${namespace}:siteplanner/build_${recipe.id}`
      });
      json.should.have.deep.property('criteria', {
        'open-dropper': {
          trigger: 'minecraft:item_used_on_block',
          conditions: {
            location: {
              block: {
                block: 'dropper',
                nbt: items
              }
            }
          }
        }
      });
    });

    it(`should have building function for ${namespace}:${recipe.id}`, async function () {
      const lineReader = readline.createInterface({
        input: fs.createReadStream(`./build/${namespace}/data/${namespace}/functions/siteplanner/build_${recipe.id}.mcfunction`)
      });
      const lines = [];
      for await (const line of lineReader) {
        lines.push(line);
      }
      lines.should.be.deep.equal([
        `advancement revoke @s only ${namespace}:recipes/recipe_${recipe.id}`,
        '',
        `execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteEast] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:1,mode:"LOAD",posY:-4,sizeX:15,posZ:-7,integrity:1.0f,name:"${namespace}:town/${recipe.id}",sizeY:32,sizeZ:15} replace`,
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteEast] run setblock ~ ~2 ~ minecraft:redstone_block',
        '',
        `execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteWest] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-15,mode:"LOAD",posY:-4,sizeX:15,posZ:-7,integrity:1.0f,name:"${namespace}:town/${recipe.id}",sizeY:32,sizeZ:15} replace`,
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteWest] run setblock ~ ~2 ~ minecraft:redstone_block',
        '',
        `execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteNorth] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-7,mode:"LOAD",posY:-4,sizeX:15,posZ:-15,integrity:1.0f,name:"${namespace}:town/${recipe.id}",sizeY:32,sizeZ:15} replace`,
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteNorth] run setblock ~ ~2 ~ minecraft:redstone_block',
        '',
        `execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteSouth] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-7,mode:"LOAD",posY:-4,sizeX:15,posZ:1,integrity:1.0f,name:"${namespace}:town/${recipe.id}",sizeY:32,sizeZ:15} replace`,
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteSouth] run setblock ~ ~2 ~ minecraft:redstone_block',
        '',
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run function nitk:siteplanner/new_sites_check',
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run function nitk:siteplanner/attacks_check',
        '',
        'tag @a add nitCitizen',
        'tag @e[type=minecraft:villager,distance=..20] add nitCitizen',
        'scoreboard players operation @e[tag=nitCitizen,distance=..20] nitID = @e[tag=nitKTP,limit=1,sort=nearest] nitID',
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run fill ~ ~ ~ ~ ~3 ~ air',
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run kill @e[tag=!nitCitizen,distance=..2,tag=!global.ignore,tag=!global.ignore.kill]',
        'execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run kill @s'
      ]);
    });
  });
};

const debugWait = exports.debugWait = async function (time = 20000) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

exports.asyncAssert = async function (assertFunc, timeout = 1000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await assertFunc()) return true;
    await debugWait(1000);
  }
  return false;
};
