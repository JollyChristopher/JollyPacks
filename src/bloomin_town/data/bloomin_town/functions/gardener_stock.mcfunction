# Spawn first offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_1
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[0].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]

# Spawn second offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_2
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[1].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]

# Spawn third offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_3
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[2].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]

# Spawn fourth offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_1
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[3].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]

# Spawn fifth offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_2
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[4].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]

# Spawn sixth offer
execute as @e[tag=bloomin_town.gardener] at @s run loot spawn ~ ~ ~ loot bloomin_town:command/make_plants_3
execute as @e[tag=bloomin_town.gardener] at @s run tag @e[type=item,distance=..1,limit=1,sort=nearest] add bloomin_town.garden_plant
execute as @e[tag=bloomin_town.gardener] at @s run data modify entity @s Offers.Recipes[5].sell.id set from entity @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest] Item.id
execute as @e[tag=bloomin_town.gardener] at @s run kill @e[tag=bloomin_town.garden_plant,distance=..1,limit=1,sort=nearest]