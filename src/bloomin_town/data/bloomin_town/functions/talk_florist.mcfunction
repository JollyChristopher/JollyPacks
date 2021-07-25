execute as @e[tag=bloomin_town.florist,sort=nearest,limit=1] at @s if predicate bloomin_town:chat_florist_chance run tell @a[distance=..16] If you fix up the garden outside, it will grow flowers every day! 

advancement revoke @s only bloomin_town:talk_florist