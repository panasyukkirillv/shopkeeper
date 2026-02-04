<template>
  <div class="notification">
    {{ text }}
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped lang="scss">

.notification {
  background: $color-primary-600;
  padding: 12px;
  border-radius: 8px;
  color: $color-white;
}

</style>
