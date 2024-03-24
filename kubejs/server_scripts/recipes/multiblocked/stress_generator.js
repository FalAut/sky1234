onEvent("recipes", (event) => {
  event.recipes.multiblocked
    .multiblock("stress_to_energy")
    .duration(20)
    .inputStress(16384)
    .setChance(0.001)
    .outputItem(
      Item.of(
        "mekanism:creative_energy_cube",
        '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
      )
    )
    .setChance(1)
    .setPerTick(true)
    .outputFE(8192)
})
