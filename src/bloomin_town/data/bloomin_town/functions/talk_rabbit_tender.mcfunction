execute as @e[tag=bloomin_town.rabbit_tender,sort=nearest,limit=1] at @s if entity @s[nbt={VillagerData:{level:5}}] if predicate bloomin_town:chat_rabbit_tender_chance run tell @a[distance=..16] Each day, I might offer something nice for a price.

advancement revoke @s only bloomin_town:talk_rabbit_tender