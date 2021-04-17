# spread flowers and stock honey daily at noon
execute if score $dayTime nitResourceTime matches 6000 run function bloomin_town:flower_spread
execute if score $dayTime nitResourceTime matches 6000 run function bloomin_town:honey_make