onEvent('recipes', event => {
    event.custom(
        {
            "type": "lychee:item_burning",
            "post": [
              {
                "type": "drop_item",
                "item": 'naturesaura:token_anger'
              }
            ],
            "item_in": {
              "item": 'naturesaura:token_joy'
            }
          }          
    ).id('lychee:kubejs/recipes/lychee/burning/token_anger')
})