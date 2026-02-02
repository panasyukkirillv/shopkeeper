<template>
  <div style="padding: 32px">Сообщения</div>
</template>

<script>

export default {
  name: 'Messages',
  emits: ['updatePageInformation'],
  beforeCreate () {
    this.$emit('updatePageInformation', 'MailIcon', 'Сообщения')
  }
}

</script>
