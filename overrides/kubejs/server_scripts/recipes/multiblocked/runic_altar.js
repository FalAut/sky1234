onEvent("recipes", (event) => {
    const id_prefix = 'kubejs:recipes/multiblocked/runic_altar/'

    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'botania:fabulous_pool',
            Item.of('botania:mana_tablet', '{mana:500000}'),
            'botania:overgrowth_seed',
            Item.of('botania:mana_tablet', '{mana:500000}'),
            'botania:blacker_lotus',
            Item.of('botania:mana_tablet', '{mana:500000}'),
            'botania:dice',
            Item.of('botania:mana_tablet', '{mana:500000}'),
        ])
        .inputMana(4000000)
        
        .duration(20)
        .outputItem('botania:creative_pool')
        .id(`${id_prefix}creative_pool`)
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'botania:manasteel_ingot',
            'botania:mana_pearl',
            'botania:manasteel_ingot'
        ])
        .inputMana(100000)
        
        .duration(20)
        .outputItem('botania:rune_mana')
    .id(`${id_prefix}rune_mana`)
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'minecraft:feather',
            'tconstruct:sky_slime_crystal',
            'naturesaura:sky_ingot',
            'tconstruct:sky_slime_ball',
            'thermal:blitz_rod'
        ])
        .inputMana(100000)
        
        .duration(120)
        .outputItem('botania:rune_air')
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'tconstruct:earth_slime_crystal',
            'thermal:basalz_rod',
            'minecraft:slime_ball',
            'minecraft:stone',
            'minecraft:grass_block'
        ])
        .inputMana(100000)
        
        .duration(120)
        .outputItem('botania:rune_earth')
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'thermal:blizz_rod',
            'tconstruct:ender_slime_crystal',
            'minecraft:water_bucket',
            'botania:mana_bottle',
            'botania:mana_powder'
        ])
        .inputMana(100000)
        
        .duration(120)
        .outputItem('botania:rune_water')
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'minecraft:magma_cream',
            'tconstruct:ichor_slime_crystal',
            'minecraft:fire_charge',
            'minecraft:blaze_rod',
            'minecraft:gunpowder'
        ])
        .inputMana(100000)
        
        .duration(120)
        .outputItem('botania:rune_fire')
    
    event.recipes.multiblocked.multiblock('runic_altar')
        .inputItems([
            'botania:rune_mana',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
            'botania:rune_water'
        ])
        .inputMana(1000000)
        
        .duration(120)
        .outputItem('multiblocked:runic_crystal')
})