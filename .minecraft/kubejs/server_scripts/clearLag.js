// const whitelist = Ingredient.matchAny([
//     'minecraft:cobblestone',
//     'minecraft:stone',
//     'minecraft:smooth_stone',
//     'minecraft:sand',
//     'minecraft:glass',
//     'minecraft:gravel',
//     'minecraft:clay_ball',
//     'thermal:slag',
//     'minecraft:clay',
//     'minecraft:terracotta',
//     'minecraft:andesite',
//     'minecraft:diorite',
//     'minecraft:granite'
// ])
// onEvent('server.load', function (event) {
//     event.server.schedule(10 * SECOND, event.server, function (callback) {
//         callback.server.getEntities("@e[type=item]").forEach(entity => {
//             if (whitelist.test(entity.item.id)){
//                 entity.kill();
//             }
//         });
//         callback.reschedule();
//     });
// })