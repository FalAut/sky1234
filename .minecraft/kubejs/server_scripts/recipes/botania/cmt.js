const cmt = (outputs, base, sequence, seqLoops, transitional, event) => {
  let constructedSequence = [];
  let sequenceStep = 1;
  let totalSteps = sequence.length * seqLoops;

  sequence.forEach((step) => {
    let estStep = sequenceStep;
    if (step.type == "filling") {
      constructedSequence.push(event.recipes.create.filling(transitional, [transitional, Fluid.of("manaliquidizer:mana_fluid", 100)]));
    }
    if (step.type == "external") {
      constructedSequence.push(event.recipes.create.filling(transitional, [transitional, Fluid.of("kubejs:mana", 100000)]));

      while (estStep <= totalSteps) {
        let estProgress = 1 / (totalSteps / (estStep - 1)) + "f";
        let nextProgress = 1 / (totalSteps / estStep) + "f";

        let genID = `kubejs:cmt/step_${estStep}`;

        let preItem = "";
        let postItem = "";

        if (sequenceStep != 1) {
          preItem = Item.of(transitional, `{SequencedAssembly:{Progress:${estProgress},Step:${estStep - 1},id:"kubejs:cmt"}}`);
        } else {
          preItem = base;
        }

        if (estStep != totalSteps) {
          postItem = Item.of(transitional, `{SequencedAssembly:{Progress:${nextProgress},Step:${estStep},id:"kubejs:cmt"}}`);
        } else {
          postItem = outputs[0];
        }

        step.recipedata(postItem, preItem, genID);

        if (estStep <= totalSteps) {
          estStep += sequence.length;
        }
      }
    }
    sequenceStep++;
  });
  event.recipes.createSequencedAssembly(outputs, base, constructedSequence).loops(seqLoops).transitionalItem(transitional).id(`kubejs:cmt`);
};
onEvent("recipes", (event) => {
  cmt(
    [Item.of("botania:mana_tablet", "{creative:1b,mana:500000}")],
    Item.of("botania:mana_tablet", "{mana:500000}"),
    [
      {
        type: "filling",
      },
      {
        type: "external",
        recipedata: (post, pre) => event.recipes.botania.mana_infusion(post, pre, 10000),
      },
    ],
    1024,
    "kubejs:incomplete_creative_mana_tablet",
    event
  );
});
