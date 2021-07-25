execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s run loot insert ~ ~1 ~ loot bloomin_town:command/bundle_loot
schedule function bloomin_town:rabbit_bundle_finalize 1t