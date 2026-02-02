<template>
  <label class="switch">
    <input
      class="switch__input"
      type="checkbox"
      :checked="isOn"
      @change="$emit('change', $event.target.checked)"
    />
    <span class="switch__box">
      <span class="switch__figure"></span>
    </span>
  </label>
</template>

<script>

export default {
  name: 'UISwitch',
  props: {
    isOn: {
      type: Boolean,
      required: true
    }
  }
}

</script>

<style scoped lang="scss">

.switch {
  position: relative;
  display: block;
  width: 56px;
  height: 32px;
  cursor: pointer;

  &__input {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    box-shadow: none;
    background: none;
    outline: none;
  }

  &__box {
    display: block;
    width: 56px;
    height: 32px;
    border-radius: 16px;
    background: $color-greyscale-300;

    .switch__input:checked + & {
      background: $color-primary-600;
    }
  }

  &__figure {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 4px solid $color-greyscale-300;
    background: $color-white;

    .switch__input:checked + .switch__box > & {
      margin-left: 24px;
      border-color: $color-primary-600;
    }
  }
}

</style>
