<template>
  <div style="padding: 32px">Заказы</div>
</template>

<script>

export default {
  name: 'Orders',
  emits: ['updatePageInformation'],
  beforeCreate () {
    this.$emit('updatePageInformation', 'CoinIcon', 'Заказы')
  }
}

</script>
