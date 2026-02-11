if (false) {
  BlockEvents.rightClicked('minecraft:chest', event => {
    let { item, block } = event
    if (item == "minecraft:stick") {
      let nbt = block.entity.serializeNBT()
      nbt.Items.map(item => {
        item.tag.Damage = 1
        return item
      })
      block.setEntityData(nbt)
      event.cancel()
    }
  })
}
