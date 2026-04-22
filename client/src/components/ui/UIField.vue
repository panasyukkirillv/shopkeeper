<template>
  <div class="field">
    <div class="field__box">
      <input
        :class="[
          'field__input',
          {'field__input--error': error}
        ]"
        :type="type"
        autocomplete="off"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :min="min"
        :max="max"
      />
      <div
        :class="[
          'field__placeholder',
          {'field__placeholder--required': required },
        ]"
      >
        <div class="field__text">
          {{ placeholder }}
        </div>
      </div>
    </div>
    <div
      v-if="error"
      class="field__error"
    >
      {{error}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'UIField',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    error: {
      type: String,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    }
  },
  emits: ['update:modelValue']
}

</script>

<style scoped lang="scss">

.field {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__box {
    position: relative;
  }

  &__input {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 16px;
    border: 1px solid $color-greyscale-200;
    border-radius: 12px;
    background: $color-white;
    box-shadow: none;
    outline: none;
    @include text-large-semibold;
    color: $color-greyscale-900;
    line-height: 24px;
    -moz-appearance: textfield;

    &:hover,
    &:focus {
      border-color: $color-primary-600;
    }

    &--error,
    &--error:hover,
    &--error:focus {
      border-color: $color-secondary-glamour-pink-500;
    }

    &::placeholder {
      color: transparent;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &__placeholder {
    pointer-events: none;
    position: absolute;
    left: 11px;
    right: 16px;
    top: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    transition: all 200ms linear;

    &--required::after {
      content: '*';
      padding: 0 5px;
      background: $color-white;
      @include text-large-regular;
      color: $color-greyscale-400;
      line-height: 24px;
    }

    .field__input:placeholder-shown + & {
      top: 50%;
    }

    .field__input:focus + & {
      top: 0;
    }
  }

  &__text {
    position: relative;
    overflow: hidden;
    padding-left: 5px;
    background: $color-white;
    @include text-large-regular;
    color: $color-greyscale-400;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__error {
    @include text-small-regular;
    color: $color-secondary-glamour-pink-500;
  }
}

</style>
