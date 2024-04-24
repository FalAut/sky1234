onEvent('recipes', (event) => {
    const id_prefix = 'kubejs:recipes/tconstruct/melting/'
    const recipes = [
        {
            input: 'tconstruct:ichor_slime_ball',
            output: 'kubejs:ichor_slime',
            amount: 250,
            temperature: 50,
            time: 31,
            id: `${id_prefix}ichor_slime1`,
        },
        {
            input: 'tconstruct:ichor_congealed_slime',
            output: 'kubejs:ichor_slime',
            amount: 1000,
            temperature: 50,
            time: 31,
            id: `${id_prefix}ichor_slime2`,
        },
        {
            input: 'minecraft:andesite',
            output: 'kubejs:molten_andesite',
            amount: 100,
            temperature: 1000,
            time: 48,
            id: `${id_prefix}molten_andesite`,
        },
        {
            input: 'kubejs:congealed_magma_cream',
            output: 'tconstruct:magma',
            amount: 1000,
            temperature: 300,
            time: 48,
            id: `${id_prefix}magma`,
        },
    ]

    recipes.forEach((recipe) => {
        ;(recipe.type = 'tconstruct:melting'), (recipe.ingredient = { item: recipe.input })
        ;(recipe.result = { fluid: recipe.output, amount: recipe.amount }), event.custom(recipe).id(recipe.id)
    })
})
