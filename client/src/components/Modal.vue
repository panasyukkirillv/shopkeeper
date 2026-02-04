<template>
  <div class="modal">
    <div class="modal__box" @click.self="$emit('closeModal')">
      <div class="modal__window">
        <div class="modal__header">
          <div class="modal__heading">
            {{heading}}
          </div>
          <button class="modal__button" type="button"  @click="$emit('closeModal')">
              <span class="modal__box">
                <CrossIcon class="modal__icon" />
              </span>
          </button>
        </div>
        <div class="modal__main">
          <slot name="main" />
        </div>
        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CrossIcon from '@/components/icons/CrossIcon.vue'

export default {
  name: 'Modal',
  components: {
    CrossIcon
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  emits: ['closeModal']
}

</script>

<style scoped lang="scss">

.modal {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  z-index: 1000;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(15, 43, 32, 0.45);

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
  }

  &__window {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 984px;
    border-radius: 16px;
    background: $color-white;
  }

  &__header {
    position: relative;
    padding: 18px 24px;
    border-bottom: 1px solid $color-greyscale-100;
  }

  &__heading {
    @include heading-5;
    color: $color-greyscale-900;
    line-height: 40px;
  }

  &__button {
    position: absolute;
    right: 24px;
    top: 18px;
    display: block;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: $color-greyscale-50;
    box-shadow: none;
    cursor: pointer;

    &:hover {

      @include hover {
        background: $color-primary-600;
      }
    }
  }

  &__icon {

    :deep(path) {
      stroke: $color-greyscale-500;

      .modal__button:hover & {

        @include hover {
          stroke: $color-white;
        }
      }
    }
  }

  &__main,
  &__footer{
    padding: 24px;
  }
}

</style>
