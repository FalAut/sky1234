/** @format */

onEvent("recipes", (event) => {
  event.recipes.multiblocked
    .multiblock("prediction_chamber")
    .duration(60)
    .id("kubejs:recipes/multiblocked/prediction")
    .setChance(0.25)
    .outputItems([
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:ender_dragon"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:blaze"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:chicken"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:cod"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:cow"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:creeper"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:drowned"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:elder_guardian"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:enderman"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:evoker"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:ghast"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:guardian"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:glow_squid"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:hoglin"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:iron_golem"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:magma_cube"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:mooshroom"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:phantom"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:pig"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:polar_bear"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:rabbit"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:sheep"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:shulker"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:skeleton"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:slime"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:snow_golem"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:spider"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:squid"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:thermal/basalz"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:thermal/blitz"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:thermal/blizz"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:vindicator"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:witch"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:wither"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:wither_skeleton"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:zombie"}}'
      ),
      Item.of(
        "hostilenetworks:prediction",
        '{data_model:{id:"hostilenetworks:zombified_piglin"}}'
      ),
    ]);
});
