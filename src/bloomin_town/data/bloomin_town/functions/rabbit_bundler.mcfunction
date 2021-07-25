data remove entity @s Offers.Recipes[10]
data modify entity @s Offers.Recipes append value {buy:{id:"minecraft:gold_block",Count:64b},sell:{id:"minecraft:bundle",Count:1b},rewardXp:100,maxUses:1}
setblock ~ ~1 ~ chest replace
schedule function bloomin_town:rabbit_bundle_loot 1t