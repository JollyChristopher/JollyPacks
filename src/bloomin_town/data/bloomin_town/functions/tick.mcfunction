# run noon functions
execute if score $dayTime nitResourceTime matches 6000 run function bloomin_town:flower_spread
execute if score $dayTime nitResourceTime matches 6000 run function bloomin_town:honey_make

# run constant functions
execute run function bloomin_town:trades_rabbit_pen