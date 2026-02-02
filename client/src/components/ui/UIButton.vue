<template>
  <button
    :class="[
      'button',
      'button--' + size,
    ]"
    type="button"
    :disabled="isDisabled"
  >
    <span class="button__box">
      <slot v-if="$slots.before" name="before" />
      {{ text }}
      <slot v-if="$slots.after" name="after" />
    </span>
  </button>
</template>

<script>

export default {
  name: 'UIButton',
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator (size) {
        return ['small', 'medium', 'large'].includes(size)
      }
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}

</script>

<style scoped lang="scss">

.button {
  display: block;
  margin: 0;
  border: 0;
  box-shadow: none;
  background: $color-primary-600;
  box-shadow: none;
  cursor: pointer;
  color: $color-white;

  &:hover {
    background: $color-primary-500;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 8px;
  }

  &--small {
    padding: 4px 12px;
    border-radius: 8px;
    @include text-small-bold;
    line-height: 24px;
  }

  &--medium {
    padding: 12px 36px;
    border-radius: 12px;
    @include text-medium-bold;
    line-height: 24px;
  }

  &--small,
  &--medium {

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }

  &--large {
    padding: 16px 48px;
    border-radius: 12px;
    @include heading-6;
    line-height: 24px;
  }

  :deep(path) {
    stroke: $color-white;
  }
}

</style>
