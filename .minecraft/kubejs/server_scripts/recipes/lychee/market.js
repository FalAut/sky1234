onEvent('recipes', event => {
    event.custom(
        {
            "type": "lychee:item_inside",
            "ghost": true,
            "comment": "下界的岩浆",
            "post": [
              {
                "type": "drop_item",
                "item": 'farmingforblockheads:market'
              }
            ],
            "item_in": [
              {
                "item": 'naturesaura:animal_generator'
              }
            ],
            "block_in": "minecraft:lava"
        }
    ).id('lychee:kubejs/recipes/lychee/market_ghost')

    event.custom(
        {
            "type": "lychee:item_inside",
            "hide_in_viewer": true,
            "contextual": [
                {
                  "type": "location",
                  "predicate": {
                    "dimension": "minecraft:the_nether"
                  }
                }
            ],
            "post": [
                {
                    "type": "execute",
                    "command": "summon minecraft:item ~ ~ ~ {NoGravity:1b,Motion:[0.0,0.5,0.0],Item:{id:'farmingforblockheads:market',Count:1}}"
                }
            ],
            "item_in": [
              {
                "item": 'naturesaura:animal_generator'
              }
            ],
            "block_in": "minecraft:lava"
          }      
    ).id('lychee:kubejs/recipes/lychee/market')
})