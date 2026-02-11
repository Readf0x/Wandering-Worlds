ServerEvents.recipes(event => {
  [
    "supplementaries:soap",
    "galosphere:silver_bomb",
    "projectiles:netherite_arrow",
  ]
    .forEach(i =>
      event.remove({ id: i })
    )

  event.recipes.create.mixing(
    "supplementaries:soap",
    [
      Fluid.of("minecraft:water", 1000),
      Item.of("supplementaries:ash", 4),
      "immersive_weathering:tallow"
    ]
  )

  event.shaped(
    Item.of("galosphere:silver_bomb", 2),
    [
      " AC",
      "ABA",
      " A "
    ],
    {
      A: "galosphere:silver_ingot",
      B: "minecraft:tnt",
      C: "minecraft:string"
    }
  )

  event.shaped(
    Item.of("projectiles:netherite_arrow", 4),
    [
      "A",
      "B",
      "C"
    ],
    {
      A: "createbigcannons:nethersteel_ingot",
      B: "minecraft:stick",
      C: "minecraft:feather"
    }
  )
})
