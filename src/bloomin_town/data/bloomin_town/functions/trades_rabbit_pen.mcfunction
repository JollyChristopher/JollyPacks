# Apprentice Rabbit Tenders should have rabbit hide trades
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[2].buy.id set value rabbit_hide
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[2].buy.Count set value 8
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[2].sell.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[2].sell.Count set value 2
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[3].buy.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[3].buy.Count set value 4
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[3].sell.id set value rabbit_hide
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:2}}] at @s run data modify entity @s Offers.Recipes[3].sell.Count set value 4

# Journeyman Rabbit Tenders should have dandelion trades
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[4].buy.id set value dandelion
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[4].buy.Count set value 20
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[4].sell.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[4].sell.Count set value 2
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[5].buy.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[5].buy.Count set value 2
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[5].sell.id set value dandelion
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:3}}] at @s run data modify entity @s Offers.Recipes[5].sell.Count set value 10

# Expert Rabbit Tenders should have carrot and stew trades
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[6].buy.id set value carrot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[6].buy.Count set value 20
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[6].sell.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[6].sell.Count set value 2
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[7].buy.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[7].buy.Count set value 3
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[7].sell.id set value rabbit_stew
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:4}}] at @s run data modify entity @s Offers.Recipes[7].sell.Count set value 1

# Master Rabbit Tenders should have rabbit foot trades
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[8].buy.id set value rabbit_foot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[8].buy.Count set value 4
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[8].sell.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[8].sell.Count set value 1
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[9].buy.id set value gold_ingot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[9].buy.Count set value 4
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[9].sell.id set value rabbit_foot
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run data modify entity @s Offers.Recipes[9].sell.Count set value 1
