# Novice fix
execute as @e[tag=bloomin_town.rabbit_tender,nbt={Offers:{Recipes:[{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[0].maxUses set value 9999999
execute as @e[tag=bloomin_town.rabbit_tender,nbt={Offers:{Recipes:[{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[1].maxUses set value 9999999

# Apprentice Rabbit Tenders should have rabbit hide trades
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:rabbit_hide",Count:8b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:10,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:4b},sell:{id:"minecraft:rabbit_hide",Count:4b},xp:5,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run tag @s add bloomin_town.level_2

# Journeyman Rabbit Tenders should have dandelion trades
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:dandelion",Count:20b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:20,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:2b},sell:{id:"minecraft:dandelion",Count:10b},xp:10,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run tag @s add bloomin_town.level_3
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run tag @s remove bloomin_town.level_2

# Expert Rabbit Tenders should have carrot and stew trades
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[6]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[6]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:carrot",Count:20b},sell:{id:"minecraft:gold_ingot",Count:2b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:3b},sell:{id:"minecraft:rabbit_stew",Count:1b},xp:15,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run tag @s add bloomin_town.level_4
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run tag @s remove bloomin_town.level_3

# Master Rabbit Tenders should have rabbit foot trades
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[8]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[8]
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:rabbit_foot",Count:4b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:4b},sell:{id:"minecraft:rabbit_foot",Count:1b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run tag @s add bloomin_town.level_5
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run tag @s remove bloomin_town.level_4