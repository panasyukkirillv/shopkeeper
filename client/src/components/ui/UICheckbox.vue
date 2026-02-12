<template>
  <label class="checkbox">
    <input class="checkbox__input"
       type="checkbox"
       :checked="modelValue"
       @change="onChange"
    />
    <span class="checkbox__figure">
      <CheckIcon class="checkbox__icon"/>
    </span>
  </label>
</template>

<script>

import CheckIcon from '@/components/icons/CheckIcon.vue'

export default {
  name: 'UICheckbox',
  components: {
    CheckIcon
  },
  props: {
    modelValue: {
      type: Boolean
    }
  },
  methods: {
    onChange (event) {
      this.$emit('update:modelValue', event.target.checked)
    }
  },
  emits: ['update:modelValue']
}

</script>

<style scoped lang="scss">

.checkbox {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
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

  &__figure {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid $color-greyscale-200;

    .checkbox__input:checked + & {
      border-color: $color-primary-600;
      background: $color-primary-600;
    }
  }

  &__icon {
    display: none;

    .checkbox__input:checked + .checkbox__figure > & {
      display: block;
    }

    :deep(path) {
      stroke: #FFF;
    }
  }
}

</style>
