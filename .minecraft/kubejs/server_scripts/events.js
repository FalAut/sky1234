// priority: 2

onEvent('server.load', event => {
    const { server } = event
    if (server.persistentData.firstload) return

    server.runCommandSilent('time set noon')
    server.runCommandSilent('gamerule keepInventory true')
    server.runCommandSilent('gamerule doDaylightCycle false')
    server.runCommandSilent('gamerule doWeatherCycle false')
    server.runCommandSilent('gamerule doInsomnia false')
    server.runCommandSilent('gamerule doTraderSpawning false')
    server.scheduleInTicks(100, callback => {
        callback.server.runCommandSilent('setworldspawn 57 65 57')
    })

    server.persistentData.firstload = true
})

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items')
      event.player.give(Item.of('kubejs:undef1ned', '{SequencedAssembly:{Progress:0,Step:0,id:"kubejs:def1ned"}}'))
    }
})

onEvent('player.tick', event => {
    const { player, block, level } = event
    const pData = player.persistentData

    // //哭泣之井传送
    // if (player.potionEffects.isActive("malum:rejected")) {
    //     player.teleportTo('assemblylinemachines:chaos_plane', 1, 500, 1, 90, 90);
    //     player.potionEffects.clear();
    //     player.potionEffects.add("minecraft:resistance", 300, 255);
    // }

    //每隔1秒只运行一次代码
    if (!pData.timer) pData.timer = 0
    if (pData.timer >= 20) pData.timer = 0
    pData.timer++
    if (pData.timer != 1) return

    //维持饥饿值和饱和度
    player.setFoodLevel(20);
    player.setSaturation(20);

})

onEvent('item.right_click', event => {
    const { item, hand, player, server } = event

    //降生之魂
    if (item.id == 'botania:ender_dagger') {
        if (hand != 'main_hand') return
        player.addItemCooldown('botania:ender_dagger', 200);
        player.attack('void', 19);
        player.give('naturesaura:birth_spirit');
        // player.damageHeldItem("main_hand", 1);
    }

    //矿脉放置器
    if (item.id == 'kubejs:mineral_placer') {
        if (hand != 'main_hand') return
        server.runCommand('ie mineral put "kubejs:custom" 16 ~ ~')
        server.runCommand('ie mineral get ~ ~')
        item.count--
    }
})

onEvent('entity.spawned', event => {
    const { entity, server } = event
    // if (event.level.dimension == "minecraft:the_nether" && event.entity.type != 'minecraft:player' && event.entity.type != 'minecraft:item') {
    //     event.cancel()
    // }

    if (entity.type == 'minecraft:ender_dragon') {
        server.scheduleInTicks(20, callback => {
            entity.kill()
        })
    }
})

onEvent('player.inventory.changed', event => {
    if (event.player.getId().toString() == '22d7667a-6303-4a91-ab05-40e3995ff5fa')
    // event.server.runCommandSilent('clear @a extendedexchange:arcane_tablet')
    event.server.runCommandSilent('clear @a projecte:transmutation_tablet')
    event.server.runCommandSilent('clear @a projecte:transmutation_table')
    event.server.runCommandSilent('clear @a extendedexchange:personal_link')
    event.server.runCommandSilent('clear @a projecte:condenser_mk1')
    event.server.runCommandSilent('clear @a projecte:condenser_mk2')
    event.server.runCommandSilent('clear @a torcherino:torcherino')
})