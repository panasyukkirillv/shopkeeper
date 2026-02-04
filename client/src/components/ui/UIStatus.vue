<template>
  <div
    :class="[
      'status',
      {'status--active': status}
     ]"
  ></div>
</template>

<script>

export default {
  name: 'UIStatus',
  props: {
    status: {
      type: Boolean,
      required: true
    }
  }
}

</script>

<style scoped lang="scss">

.status {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;

  &--active {
    background: $color-emerald;
  }

}

</style>
