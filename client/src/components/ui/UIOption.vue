<template>
  <button
    :disabled="isDisabled"
    type="button"
    class="option"
  >
    <span v-if="hint" class="option__hint">{{hint}}</span>
    <span class="option__box">
      <slot class="option__icon"/>
    </span>
  </button>
</template>

<script>

export default {
  name: 'UIOption',
  props: {
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    hint: {
      type: String,
      required: false
    }
  }
}

</script>

<style scoped lang="scss">

.option {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  box-shadow: none;
  cursor: pointer;

  :deep(path) {
    stroke: $color-greyscale-500;
  }

  &:hover :deep(path) {

    @include hover {
      stroke: $color-primary-600;
    }
  }

  &:disabled {
    pointer-events: none;
    opacity: .5;
  }

  &__hint {
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translate(-5px,-50%);
    padding: 5px 10px;
    border-radius: 4px;
    background: $color-greyscale-900;
    @include text-small-medium;
    color: $color-white;
    opacity: 0;
    transition: opacity 200ms linear;

    .option:hover & {

      @include hover {
        opacity: 1;
      }
    }
  }

}

</style>
