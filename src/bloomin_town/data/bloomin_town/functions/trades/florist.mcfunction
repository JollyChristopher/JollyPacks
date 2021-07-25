# Novice fix
execute as @e[tag=bloomin_town.florist,nbt={Offers:{Recipes:[{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[0].maxUses set value 9999999
execute as @e[tag=bloomin_town.florist,nbt={Offers:{Recipes:[{},{maxUses:12}]}}] at @s run data modify entity @s Offers.Recipes[1].maxUses set value 9999999

# Apprentice Florists should have flower pot trades
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data remove entity @s Offers.Recipes[2]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:flower_pot",Count:6b},sell:{id:"minecraft:gold_ingot",Count:1b},xp:10,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_2,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:4b},sell:{id:"minecraft:flower_pot",Count:3b},xp:5,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:2}}] at @s run tag @s add bloomin_town.level_2

# Journeyman Florists should have most one tall flower trades
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data remove entity @s Offers.Recipes[4]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:blue_orchid",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:allium",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:azure_bluet",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:oxeye_daisy",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:cornflower",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_3,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:lily_of_the_valley",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:3}}] at @s run tag @s add bloomin_town.level_3
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:3}}] at @s run tag @s remove bloomin_town.level_2

# Expert Florists should have rooted dirt and tulip trades
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data remove entity @s Offers.Recipes[10]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:rooted_dirt",Count:10b},sell:{id:"minecraft:gold_ingot",Count:10b},xp:20,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:red_tulip",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:orange_tulip",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:white_tulip",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_4,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:pink_tulip",Count:10b},xp:2,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:4}}] at @s run tag @s add bloomin_town.level_4
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:4}}] at @s run tag @s remove bloomin_town.level_3

# Master Florists should have two tall flower trades
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[15]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data remove entity @s Offers.Recipes[15]
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:rose_bush",Count:5b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:peony",Count:5b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:sunflower",Count:5b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,tag=!bloomin_town.level_5,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_ingot",Count:1b},sell:{id:"minecraft:lilac",Count:5b},xp:30,maxUses:9999999}
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:5}}] at @s run tag @s add bloomin_town.level_5
execute as @e[tag=bloomin_town.florist,nbt={VillagerData:{level:5}}] at @s run tag @s remove bloomin_town.level_4