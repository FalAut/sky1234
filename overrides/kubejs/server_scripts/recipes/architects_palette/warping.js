onEvent('recipes', event => {
    const id_prefix = 'kubejs:recipes/architects_palette/warping/'
    const recipes = [
        {
            ingredient: [{item: 'minecraft:redstone'}],
            result: {item: 'fluxnetworks:flux_dust'},
            dimension: "minecraft:the_nether",
            id: `${id_prefix}flux_dusts`
        },
        {
            ingredient: [{item: 'iron_ingot'}],
            result: {item: 'minecraft:netherite_ingot'},
            dimension: "minecraft:the_nether",
            id: `${id_prefix}netherite_ingot`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = "architects_palette:warping";
        event.custom(recipe).id(recipe.id);
    });
})