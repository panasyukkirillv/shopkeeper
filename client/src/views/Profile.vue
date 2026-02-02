<template>
  <div style="padding: 32px">Профиль</div>
</template>

<script>

export default {
  name: 'Profile',
  emits: ['updatePageInformation'],
  beforeCreate () {
    this.$emit('updatePageInformation', 'UserIcon', 'Профиль')
  }
}

</script>
