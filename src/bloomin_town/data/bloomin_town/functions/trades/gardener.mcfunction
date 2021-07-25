# Novice fix
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[0].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[1].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[2].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{},{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[3].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{},{},{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[4].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{},{},{},{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[5].maxUses set value 9999999
execute as @e[tag=bloomin_town.gardener,nbt={Offers:{Recipes:[{},{},{},{},{},{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[6].maxUses set value 9999999

# Apprentice Gardeners should have fern, tall fern, grass, tall grass, dead bush unlock trades
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[7]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[7]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:grass",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:tall_grass",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:fern",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:large_fern",Count:1b},sell:{id:"minecraft:gold_ingot",Count:4b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:dead_bush",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:2}}] at @s run tag @s add bloomin_town.level_2

# Journeyman Gardeners should have sugar cane, bamboo, cactus, sweet berry, cave vine, vine, cocoa, grass block, podzol block, moss block unlock trades
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[12]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[12]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:sugar_cane",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:bamboo",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:cactus",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:sweet_berries",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:glow_berries",Count:1b},sell:{id:"minecraft:gold_ingot",Count:4b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:vine",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:cocoa_beans",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:grass_block",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:podzol",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:moss_block",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:3}}] at @s run tag @s add bloomin_town.level_3
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:3}}] at @s run tag @s remove bloomin_town.level_2

# Expert Gardeners should have sea pickle, lily pad, kelp, seagrass, azalea, flowering azalea, azalea leaf, flowering azalea leaf, rooted dirt, hanging roots unlock trades
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[22]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[22]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:sea_pickle",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:lily_pad",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:kelp",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:seagrass",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:azalea",Count:1b},sell:{id:"minecraft:gold_ingot",Count:3b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:flowering_azalea",Count:1b},sell:{id:"minecraft:gold_ingot",Count:3b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:azalea_leaves",Count:1b},sell:{id:"minecraft:gold_ingot",Count:3b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:flowering_azalea_leaves",Count:1b},sell:{id:"minecraft:gold_ingot",Count:3b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:rooted_dirt",Count:1b},sell:{id:"minecraft:gold_ingot",Count:4b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:hanging_roots",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:4}}] at @s run tag @s add bloomin_town.level_4
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:4}}] at @s run tag @s remove bloomin_town.level_3

# Master Gardeners should have sponge, mycelium, nether sprouts, roots, twisting vines, weeping vines, shroomlight, skulk block, spore blossom unlock trades
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[32]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[32]
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:sponge",Count:1b},sell:{id:"minecraft:gold_ingot",Count:10b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:mycelium",Count:1b},sell:{id:"minecraft:gold_ingot",Count:4b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:nether_sprouts",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:crimson_roots",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:warped_roots",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:twisting_vines",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:weeping_vines",Count:1b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:shroomlight",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:small_dripleaf",Count:1b},sell:{id:"minecraft:gold_ingot",Count:6b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:big_dripleaf",Count:1b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:chorus_fruit",Count:64b},buyB:{id:"minecraft:deepslate",Count:64b},sell:{id:"minecraft:sculk_sensor",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:big_dripleaf",Count:64b},buyB:{id:"minecraft:allium",Count:64b},sell:{id:"minecraft:spore_blossom",Count:1b},xp:0,maxUses:1}
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:5}}] at @s run tag @s add bloomin_town.level_5
execute as @e[tag=bloomin_town.gardener,nbt={VillagerData:{level:5}}] at @s run tag @s remove bloomin_town.level_4