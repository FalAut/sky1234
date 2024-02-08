onEvent("recipes", (event) => {
    event.recipes.multiblocked.multiblock('gaia_killer')
        .inputMana(100000)
        
        .duration(200)
        .setChance(0.01)
        .outputItem('torcherino:double_compressed_torcherino')
        .setChance(0.5)
        .outputItems([
            '16x botania:life_essence',
            '8x botania:life_essence',
            '4x botania:life_essence',
            '2x botania:life_essence',
            '2x botania:black_lotus',
            '8x botania:manasteel_ingot',
            '4x botania:mana_diamond',
            '4x botania:mana_pearl',
            '2x botania:overgrowth_seed',
            'botania:blacker_lotus'
        ])
        .setChance(0.25)
        .outputItems([
            'botania:rune_water',
            'botania:rune_fire',
            'botania:rune_earth',
            'botania:rune_air',
            'botania:rune_mana',
            'botania:rune_spring',
            'botania:rune_summer',
            'botania:rune_autumn',
            'botania:rune_winter',
            'botania:rune_lust',
            'botania:rune_gluttony',
            'botania:rune_greed',
            'botania:rune_sloth',
            'botania:rune_envy',
            'botania:rune_pride',
            'botania:ancient_will_ahrim',
            'botania:ancient_will_dharok',
            'botania:ancient_will_guthan',
            'botania:ancient_will_torag',
            'botania:ancient_will_verac',
            'botania:ancient_will_karil',
            'botania:record_gaia_2',
            'botania:dice',
            'botania:pinkinator',
            'immersiveengineering:shader_bag_epic',
            'minecraft:music_disc_13',
            'minecraft:music_disc_wait'
        ])
})