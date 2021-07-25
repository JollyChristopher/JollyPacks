# Novice fix
execute as @e[tag=bloomin_town.apiarist,nbt={Offers:{Recipes:[{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[0].maxUses set value 9999999
execute as @e[tag=bloomin_town.apiarist,nbt={Offers:{Recipes:[{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[1].maxUses set value 9999999

# Apprentice Apiarists should have honeycomb trades
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:honeycomb",Count:8b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:10,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:4b},sell:{id:"minecraft:honeycomb",Count:4b},xp:5,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:2}}] at @s run tag @s add bloomin_town.level_2

# Journeyman Apiarists should have honeycomb block trades
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:honeycomb_block",Count:2b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:20,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:2b},sell:{id:"minecraft:honeycomb_block",Count:1b},xp:10,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:3}}] at @s run tag @s add bloomin_town.level_3
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:3}}] at @s run tag @s remove bloomin_town.level_2

# Expert Apiarists should have campfire and candle trades
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[6]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:campfire",Count:4b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:2b},sell:{id:"minecraft:candle",Count:3b},xp:15,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:4}}] at @s run tag @s add bloomin_town.level_4
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:4}}] at @s run tag @s remove bloomin_town.level_3

# Master Apiarists should have honey block trades
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[8]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[8]
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:honey_block",Count:2b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:4b},sell:{id:"minecraft:honey_block",Count:1b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:5}}] at @s run tag @s add bloomin_town.level_5
execute as @e[tag=bloomin_town.apiarist,nbt={VillagerData:{level:5}}] at @s run tag @s remove bloomin_town.level_4