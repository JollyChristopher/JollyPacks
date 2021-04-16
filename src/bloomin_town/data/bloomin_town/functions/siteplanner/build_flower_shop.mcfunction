advancement revoke @s only bloomin_town:recipes/recipe_flower_shop

execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteEast] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:1,mode:"LOAD",posY:-4,sizeX:15,posZ:-7,integrity:1.0f,name:"bloomin_town:town/flower_shop",sizeY:32,sizeZ:15} replace
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteEast] run setblock ~ ~2 ~ minecraft:redstone_block

execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteWest] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-15,mode:"LOAD",posY:-4,sizeX:15,posZ:-7,integrity:1.0f,name:"bloomin_town:town/flower_shop",sizeY:32,sizeZ:15} replace
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteWest] run setblock ~ ~2 ~ minecraft:redstone_block

execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteNorth] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-7,mode:"LOAD",posY:-4,sizeX:15,posZ:-15,integrity:1.0f,name:"bloomin_town:town/flower_shop",sizeY:32,sizeZ:15} replace
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteNorth] run setblock ~ ~2 ~ minecraft:redstone_block

execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteSouth] run setblock ~ ~1 ~ minecraft:structure_block{ignoreEntities:0b,rotation:"NONE",posX:-7,mode:"LOAD",posY:-4,sizeX:15,posZ:1,integrity:1.0f,name:"bloomin_town:town/flower_shop",sizeY:32,sizeZ:15} replace
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s if entity @s[tag=nitSiteSouth] run setblock ~ ~2 ~ minecraft:redstone_block

execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run function nitk:siteplanner/new_sites_check
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run function nitk:siteplanner/attacks_check

tag @a add nitCitizen
tag @e[type=minecraft:villager,distance=..20] add nitCitizen
scoreboard players operation @e[tag=nitCitizen,distance=..20] nitID = @e[tag=nitKTP,limit=1,sort=nearest] nitID
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run fill ~ ~ ~ ~ ~3 ~ air
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run kill @e[tag=!nitCitizen,distance=..2,tag=!global.ignore,tag=!global.ignore.kill]
execute as @e[tag=nitKSitePlanner,limit=1,sort=nearest,distance=..3] at @s run kill @s