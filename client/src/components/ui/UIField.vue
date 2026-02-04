<template>
  <div class="field">
    <div class="field__box">
      <input
        class="field__input"
        type="text"
        autocomplete="off"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
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
    }
  },
  emits: ['update:modelValue']
}

</script>

<style scoped lang="scss">

.field {

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

    &:focus {
      border-color: $color-primary-600;
    }

    &::placeholder {
      color: transparent;
    }
  }

  &__placeholder {
    pointer-events: none;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    align-items: center;
    gap: 5px;

    &--required::after {
      content: '*';
      @include text-large-regular;
      color: $color-greyscale-400;
      line-height: 24px;
    }

    .field__input:placeholder-shown + & {
      display: flex;
    }
  }

  &__text {
    position: relative;
    overflow: hidden;
    @include text-large-regular;
    color: $color-greyscale-400;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

</style>
