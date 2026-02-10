<template>
  <div class="select">
    <div
      @click="isOpened = !isOpened"
      class="select__box"
    >
      <div class="select__value">
        {{selectedOption.label}}
      </div>
      <ChevronDownIcon
        :class="[
          'select__icon',
          {'select__icon--rotated': isOpened}
        ]"
      />
    </div>
    <div
      v-if="isOpened"
      :class="[
        'select__overbox',
        {'select__overbox--above': isOverboxAbove}
      ]"
    >
      <div class="select__options">
        <div
          v-for="(option, optionIndex) in options"
          :key="optionIndex"
          @click="selectOption(option)"
          :class="['' +
            'select__option',
            {'select__option--selected': option.value === selectedOption.value}
           ]"
        >
          {{option.label}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ChevronDownIcon from '@/components/icons/ChevronDownIcon.vue'

export default {
  name: 'UISelect',
  components: {
    ChevronDownIcon
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpened: false,
      selectedOption: {}
    }
  },
  methods: {
    selectOption (option) {
      this.selectedOption = option
      this.$emit('selectOption', this.selectedOption.value)
      this.isOpened = false
    }
  },
  computed: {
    isOverboxAbove () {
      const selectBox = this.$el.querySelector('.select__box')
      const rect = selectBox.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      return spaceBelow < 200
    }
  },
  mounted () {
    this.selectedOption = this.options[0]
    this.$emit('selectOption', this.selectedOption.value)
  },
  emits: ['selectOption']
}

</script>

<style scoped lang="scss">

.select {
  position: relative;
  z-index: 2;

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border: 1px solid $color-greyscale-200;
    border-radius: 12px;
    cursor: pointer;
  }

  &__value {
    @include text-medium-medium;
    color: $color-greyscale-400;
    line-height: 24px;
  }

  &__icon {
    width: 16px;
    height: 16px;

    &--rotated {
      transform: rotate(180deg);
    }

    :deep(path) {
      stroke: $color-greyscale-400;
    }
  }

  &__overbox {
    position: absolute;
    top: 100%;
    padding-top: 10px;
    min-width: 100%;

    &--above {
      top: auto;
      bottom: 100%;
      padding-top: 0;
      padding-bottom: 10px;
    }
  }

  &__options {
    position: relative;
    overflow: hidden;
    border: 1px solid $color-greyscale-200;
    border-radius: 12px;
    background: $color-white;
  }

  &__option {
    padding: 12px 16px;
    cursor: pointer;

    &--selected {
      background: $color-greyscale-50;
    }

    &:hover {

      @include hover {
        background: $color-greyscale-50;
      }
    }
  }
}

</style>
