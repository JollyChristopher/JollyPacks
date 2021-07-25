function bloomin_town:flower_spread
function bloomin_town:honey_make
function bloomin_town:gardener_research
execute as @e[tag=bloomin_town.rabbit_tender,nbt={VillagerData:{level:5}}] at @s if predicate bloomin_town:bundle_rabbit_tender_chance run function bloomin_town:rabbit_bundler