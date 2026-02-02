<template>
  <div class="message">
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

.message {
  @include text-large-regular;
  color: $color-greyscale-400;
}

</style>
