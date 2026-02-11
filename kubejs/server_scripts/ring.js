ServerEvents.tags("item", event => {
  event.add("curios:ring", "candlelight:gold_ring")
})

if (global.config.experimental_ring_signing) {
  ItemEvents.entityInteracted("candlelight:gold_ring", event => {
    let { player, item, target } = event
    if (target.type == "minecraft:wolf") {
      item.nbt.test = target.name.string
    }
  })
}

