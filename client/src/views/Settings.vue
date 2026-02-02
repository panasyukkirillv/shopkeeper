<template>
  <div style="padding: 32px">Настройки</div>
</template>

<script>

export default {
  name: 'Orders',
  emits: ['updatePageInformation'],
  beforeCreate () {
    this.$emit('updatePageInformation', 'SettingsIcon', 'Настройки')
  }
}

</script>
