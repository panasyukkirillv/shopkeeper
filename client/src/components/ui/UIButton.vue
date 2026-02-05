<template>
  <button
    :class="[
      'button',
      'button--' + size,
      'button--' + variant,
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
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator (variant) {
        return ['primary', 'secondary'].includes(variant)
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
  border: 1px solid transparent;
  box-shadow: none;
  cursor: pointer;
  color: $color-white;

  &--primary {
    border-color: $color-primary-600;
    background: $color-primary-600;
    color: $color-white;

    :deep(path) {
      stroke: $color-white;
    }

    &:hover {

      @include hover {
        border-color: $color-primary-500;
        background: $color-primary-500;
      }
    }
  }

  &--secondary {
    border-color: $color-greyscale-200;
    background: $color-white;
    color: $color-greyscale-900;

    :deep(path) {
      stroke: $color-greyscale-900;
    }

    &:hover {

      @include hover {
        border-color: $color-primary-500;
      }
    }
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
}

</style>
