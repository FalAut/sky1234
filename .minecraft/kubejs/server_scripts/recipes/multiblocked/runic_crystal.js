onEvent("recipes", (event) => {
    event.recipes.multiblocked.multiblock('runic_crystal')
        .inputItems([
            'botania:rune_mana',
            'botania:mana_diamond'
        ])
        .inputMana(500000)
        
        .duration(120)
        .outputItem('botania:terrasteel_ingot')
})