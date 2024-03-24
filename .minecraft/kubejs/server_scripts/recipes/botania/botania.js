onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/botania/"
  const {
    mana_infusion,
    elven_trade,
    pure_daisy,
    brew,
    petal_apothecary,
    runic_altar,
    terra_plate,
    orechid,
    orechid_ignem,
    marimorphosis,
  } = event.recipes.botania
  pure_daisy("botania:livingwood", "occultism:otherworld_log").id(`${id_prefix}livingwood`)

  pure_daisy("botania:livingrock", "occultism:otherstone").id(`${id_prefix}livingrock`)

  mana_infusion("botania:mana_diamond", "occultism:spirit_attuned_gem", 10000).id(`${id_prefix}mana_diamond`)

  mana_infusion("botania:mana_diamond_block", "kubejs:spirit_attuned_gem_block", 90000).id(
    `${id_prefix}mana_diamond_block`
  )

  mana_infusion("botania:mana_pearl", "ae2:fluix_pearl", 6000).id(`${id_prefix}mana_pearl`)

  mana_infusion("kubejs:mana_pearl_block", "kubejs:fluix_pearl_block", 36000).id(`${id_prefix}mana_pearl_block`)

  mana_infusion("kubejs:mana_emerald", "emerald", 10000).id(`${id_prefix}mana_emerald`)
})
